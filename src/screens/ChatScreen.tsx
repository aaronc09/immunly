import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ActivityIndicator, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../theme/colors';
import { useProgress } from '../data/ProgressContext';
import { getLesson, getModule } from '../data/modules';

const API_KEY_STORAGE = '@immunolearn_api_key';
const MODEL = 'claude-sonnet-4-20250514';

function buildSystemPrompt(currentContext: { moduleId: string; lessonId: string } | null): string {
  let contextNote = '';
  if (currentContext) {
    const lesson = getLesson(currentContext.moduleId, currentContext.lessonId);
    const mod = getModule(currentContext.moduleId);
    if (lesson && mod) {
      contextNote = `\n\nCONTEXT: The student is currently studying "${lesson.title}" in Module ${mod.number}: ${mod.title}. Prioritize content relevant to this lesson, but answer any immunology question they ask.`;
    }
  }

  return `You are ImmunoBot — a friendly, expert immunology tutor for high school students interested in biomedical research. Your role is to guide students through the ImmunoLearn curriculum.${contextNote}

Curriculum topics:
- Module 1: Foundations — DNA, genes, proteins, cell biology, hematopoiesis (HSC → CLP/CMP → all immune cells), lymphatic system
- Module 2: The Immune System — innate vs adaptive, neutrophils, macrophages, dendritic cells, NK cells, cytokines (IL-2, IL-4, IL-12, IFN-γ, TNF-α), MHC I vs II, T cell activation (3 signals), Th1/Th2/Th17/Tfh/Treg subsets, B cell activation, germinal centers, affinity maturation, antibody isotypes
- Module 3: When It Goes Wrong — autoimmunity, molecular mimicry, allergies (IgE/mast cell degranulation), HIV/AIDS (CD4+ T cell depletion), cancer immune evasion (PD-L1, MHC I downregulation, tumor microenvironment)
- Module 4: Treatments — mRNA vaccines (LNPs), CAR-T cell therapy (chimeric antigen receptors, CRS), checkpoint inhibitors (anti-PD-1, anti-CTLA-4), monoclonal antibodies
- Module 5: Research Skills — reading papers, flow cytometry, ELISA, Western blot, PCR, RNA-seq, scRNA-seq, bioinformatics

Personality:
- Enthusiastic and encouraging — you love immunology
- Use vivid analogies and connect concepts across modules
- Format: short paragraphs, bullet points for lists, bold key terms
- Ask a follow-up question at the end to keep students thinking
- Use emojis occasionally 🧬`;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatScreen() {
  const { stats } = useProgress();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey! I'm **ImmunoBot** 🧬 — your personal immunology tutor. I know everything in the ImmunoLearn curriculum and I'm here to help you understand any concept.\n\nWhat's on your mind? You can ask me about anything from hematopoiesis to CAR-T therapy! 🔬",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [keyDraft, setKeyDraft] = useState('');
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    AsyncStorage.getItem(API_KEY_STORAGE).then(key => {
      if (key) setApiKey(key);
      else setShowKeyInput(true);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  }, [messages, loading]);

  const saveApiKey = async () => {
    const key = keyDraft.trim();
    if (!key.startsWith('sk-ant-')) {
      Alert.alert('Invalid key', 'Anthropic API keys start with "sk-ant-". Please check your key.');
      return;
    }
    await AsyncStorage.setItem(API_KEY_STORAGE, key);
    setApiKey(key);
    setShowKeyInput(false);
    setKeyDraft('');
  };

  const clearKey = async () => {
    Alert.alert('Clear API Key', 'Remove your stored API key?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: async () => {
        await AsyncStorage.removeItem(API_KEY_STORAGE);
        setApiKey(null);
        setShowKeyInput(true);
      }},
    ]);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading || !apiKey) return;
    setInput('');

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 1024,
          system: buildSystemPrompt(stats.currentLessonContext),
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error((err as any)?.error?.message ?? `HTTP ${response.status}`);
      }

      const data = await response.json() as { content: Array<{ type: string; text: string }> };
      const reply = data.content.find(c => c.type === 'text')?.text ?? '(No response)';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (e: any) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: `⚠️ Error: ${e.message ?? 'Something went wrong'}. Check your API key and internet connection.` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const SUGGESTIONS = [
    'Explain T cell activation',
    'How do mRNA vaccines work?',
    'MHC I vs MHC II — what\'s the difference?',
    'Why does HIV deplete CD4+ T cells?',
    'What is affinity maturation?',
  ];

  // ── API key setup screen ──────────────────────────────────────────────────
  if (showKeyInput) {
    return (
      <View style={styles.root}>
        <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.keySetup}>
            <Text style={styles.keyEmoji}>🤖</Text>
            <Text style={styles.keyTitle}>Set Up ImmunoBot</Text>
            <Text style={styles.keySub}>
              ImmunoBot uses the Anthropic API (Claude) to answer your immunology questions.
            </Text>
            <View style={styles.keySteps}>
              {[
                'Go to console.anthropic.com',
                'Create an account and add credits',
                'Go to API Keys → Create new key',
                'Paste your key below',
              ].map((step, i) => (
                <View key={i} style={styles.keyStepRow}>
                  <View style={styles.keyStepNum}>
                    <Text style={styles.keyStepNumText}>{i + 1}</Text>
                  </View>
                  <Text style={styles.keyStep}>{step}</Text>
                </View>
              ))}
            </View>
            <TextInput
              style={styles.keyInput}
              value={keyDraft}
              onChangeText={setKeyDraft}
              placeholder="sk-ant-..."
              placeholderTextColor={Colors.textMuted}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
            <TouchableOpacity
              activeOpacity={keyDraft.trim() ? 0.85 : 1}
              onPress={saveApiKey}
              disabled={!keyDraft.trim()}
              style={{ borderRadius: 14, overflow: 'hidden' }}
            >
              <LinearGradient
                colors={keyDraft.trim() ? ['#4F8EF7', '#2563EB'] : [Colors.bgSurface, Colors.bgSurface]}
                style={styles.keyBtn}
              >
                <Text style={[styles.keyBtnText, !keyDraft.trim() && { color: Colors.textMuted }]}>
                  Save Key & Start Chatting →
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.keyNote}>🔒 Your key is stored locally on your device and never shared.</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }

  // ── Chat screen ───────────────────────────────────────────────────────────
  const currentLessonCtx = stats.currentLessonContext;
  const currentLesson = currentLessonCtx
    ? getLesson(currentLessonCtx.moduleId, currentLessonCtx.lessonId)
    : null;

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={{ backgroundColor: Colors.bgCard }}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <LinearGradient colors={['#4F8EF7', '#22D3EE']} style={styles.botAvatar}>
              <Text style={{ fontSize: 20 }}>🧬</Text>
            </LinearGradient>
            <View>
              <Text style={styles.headerName}>ImmunoBot</Text>
              {currentLesson
                ? <Text style={styles.headerContext}>📍 {currentLesson.title}</Text>
                : <Text style={styles.headerStatus}>Ready to help</Text>
              }
            </View>
          </View>
          <TouchableOpacity onPress={clearKey} style={styles.settingsBtn}>
            <Text style={styles.settingsText}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        <ScrollView
          ref={scrollRef}
          style={{ flex: 1 }}
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((m, i) => (
            <View key={i} style={[styles.bubble, m.role === 'user' ? styles.userBubble : styles.botBubble]}>
              {m.role === 'assistant' && (
                <View style={styles.botAvatarSmall}>
                  <Text style={{ fontSize: 14 }}>🧬</Text>
                </View>
              )}
              <View style={[styles.bubbleInner, m.role === 'user' ? styles.userBubbleInner : styles.botBubbleInner]}>
                <Text style={[styles.bubbleText, m.role === 'user' ? styles.userText : styles.botText]}>
                  {m.content}
                </Text>
              </View>
            </View>
          ))}

          {loading && (
            <View style={[styles.bubble, styles.botBubble]}>
              <View style={styles.botAvatarSmall}>
                <Text style={{ fontSize: 14 }}>🧬</Text>
              </View>
              <View style={[styles.botBubbleInner, { paddingVertical: 14, paddingHorizontal: 16 }]}>
                <ActivityIndicator size="small" color={Colors.electric} />
              </View>
            </View>
          )}

          {/* Suggestion chips — only shown at start */}
          {messages.length === 1 && (
            <View style={styles.suggestions}>
              <Text style={styles.suggestLabel}>Try asking:</Text>
              {SUGGESTIONS.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.suggestChip}
                  onPress={() => setInput(s)}
                  activeOpacity={0.75}
                >
                  <Text style={styles.suggestText}>{s}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            placeholder="Ask about immunology..."
            placeholderTextColor={Colors.textMuted}
            multiline
            maxLength={1000}
          />
          <TouchableOpacity
            style={[styles.sendBtn, (!input.trim() || loading) && styles.sendBtnDisabled]}
            onPress={sendMessage}
            disabled={!input.trim() || loading}
            activeOpacity={0.8}
          >
            <Text style={styles.sendIcon}>↑</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.bgCard,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  botAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerName: { color: Colors.text, fontSize: 16, fontWeight: '800' },
  headerStatus: { color: Colors.textMuted, fontSize: 12 },
  headerContext: { color: Colors.electric, fontSize: 12, fontWeight: '600' },
  settingsBtn: { padding: 6 },
  settingsText: { fontSize: 22 },

  messageList: { padding: 16, paddingBottom: 10, gap: 12 },
  bubble: { flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  userBubble: { justifyContent: 'flex-end' },
  botBubble: { justifyContent: 'flex-start' },
  botAvatarSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4F8EF720',
    borderWidth: 1,
    borderColor: Colors.electric,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  bubbleInner: { maxWidth: '80%', borderRadius: 18, padding: 13 },
  userBubbleInner: {
    backgroundColor: Colors.electric,
    borderBottomRightRadius: 4,
  },
  botBubbleInner: {
    backgroundColor: Colors.bgElevated,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  bubbleText: { fontSize: 14, lineHeight: 22 },
  userText: { color: Colors.white },
  botText: { color: Colors.text },

  suggestions: { marginTop: 8, gap: 8 },
  suggestLabel: { color: Colors.textMuted, fontSize: 12, fontWeight: '600' },
  suggestChip: {
    backgroundColor: Colors.bgCard,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    alignSelf: 'flex-start',
  },
  suggestText: { color: Colors.electric, fontSize: 13, fontWeight: '600' },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: Colors.bgCard,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.bgSurface,
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: Colors.text,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.electric,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: { backgroundColor: Colors.bgSurface },
  sendIcon: { color: Colors.white, fontSize: 20, fontWeight: '800' },

  // Key setup
  keySetup: { flex: 1, padding: 28, justifyContent: 'center' },
  keyEmoji: { fontSize: 56, textAlign: 'center', marginBottom: 16 },
  keyTitle: { color: Colors.text, fontSize: 26, fontWeight: '900', textAlign: 'center', marginBottom: 10 },
  keySub: { color: Colors.textSub, fontSize: 15, textAlign: 'center', lineHeight: 22, marginBottom: 24 },
  keySteps: {
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 20,
    gap: 10,
  },
  keyStepRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  keyStepNum: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.electric,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyStepNumText: { color: Colors.white, fontSize: 12, fontWeight: '800' },
  keyStep: { color: Colors.text, fontSize: 14, flex: 1 },
  keyInput: {
    backgroundColor: Colors.bgCard,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: Colors.text,
    borderWidth: 1.5,
    borderColor: Colors.border,
    marginBottom: 14,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  keyBtn: { padding: 16, alignItems: 'center', borderRadius: 14 },
  keyBtnText: { color: Colors.white, fontWeight: '800', fontSize: 15 },
  keyNote: { color: Colors.textMuted, fontSize: 12, textAlign: 'center', lineHeight: 18, marginTop: 12 },
});
