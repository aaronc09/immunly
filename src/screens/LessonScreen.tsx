import React, { useEffect, useState, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, MODULE_GRADIENTS } from '../theme/colors';
import { RootStackParamList } from '../types';
import { getLesson, getModule } from '../data/modules';
import { LESSON_EXTRAS } from '../data/lessonExtras';
import { useProgress } from '../data/ProgressContext';
import LessonSections from '../components/LessonSections';
import QuickCheckModal from '../components/QuickCheckModal';
import FlashcardMode from '../components/FlashcardMode';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Route = RouteProp<RootStackParamList, 'Lesson'>;

type Phase = 'lesson' | 'quickcheck' | 'takeaways' | 'flashcards';

export default function LessonScreen() {
  const nav = useNavigation<Nav>();
  const route = useRoute<Route>();
  const { moduleId, lessonId } = route.params;

  const lesson = getLesson(moduleId, lessonId);
  const mod = getModule(moduleId);
  const extras = LESSON_EXTRAS[lessonId];
  const { markLessonComplete, setCurrentLesson, markFlashcardsComplete, completedFlashcardLessons } = useProgress();

  const [phase, setPhase] = useState<Phase>('lesson');
  const [showQC, setShowQC] = useState(false);
  const [qcShown, setQcShown] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (lesson && mod) setCurrentLesson(moduleId, lessonId);
  }, [lessonId]);

  if (!lesson || !mod) return null;

  const gradColors = MODULE_GRADIENTS[mod.number] ?? ['#4F8EF7', '#2563EB'];
  const quickCheck = extras?.quickCheck ?? lesson.quickCheck;
  const takeaways = extras?.takeaways ?? lesson.takeaways;
  const flashcards = extras?.flashcards ?? lesson.flashcards;
  const flashcardsAlreadyDone = completedFlashcardLessons.has(lessonId);

  const handleScrollEnd = () => {
    // Show quick check mid-lesson once
    if (!qcShown && quickCheck) {
      setQcShown(true);
      setShowQC(true);
    }
  };

  const handleFinishLesson = () => {
    markLessonComplete(moduleId, lessonId);
    if (takeaways && takeaways.length > 0) {
      setPhase('takeaways');
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    } else if (flashcards && flashcards.length > 0) {
      setPhase('flashcards');
    } else {
      nav.goBack();
    }
  };

  const handleFinishTakeaways = () => {
    if (flashcards && flashcards.length > 0) {
      setPhase('flashcards');
    } else {
      nav.goBack();
    }
  };

  const handleFlashcardsComplete = () => {
    markFlashcardsComplete(lessonId);
    nav.goBack();
  };

  // ── Takeaways phase ───────────────────────────────────────────────────────
  if (phase === 'takeaways') {
    return (
      <View style={styles.root}>
        <LinearGradient colors={gradColors} style={styles.header}>
          <SafeAreaView edges={['top']}>
            <TouchableOpacity onPress={() => nav.goBack()} style={styles.backBtn}>
              <Text style={styles.backText}>← Done</Text>
            </TouchableOpacity>
            <Text style={styles.lessonEmoji}>{lesson.emoji}</Text>
            <Text style={styles.headerTitle}>Key Takeaways</Text>
            <Text style={styles.headerSub}>{lesson.title}</Text>
          </SafeAreaView>
        </LinearGradient>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <Text style={styles.takeawayIntro}>Before you go, make sure you've got these:</Text>
          {(takeaways ?? []).map((tw, i) => (
            <View key={i} style={styles.takeawayCard}>
              <Text style={styles.takeawayNum}>{i + 1}</Text>
              <Text style={styles.takeawayText}>{tw}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.8} onPress={handleFinishTakeaways}>
            <LinearGradient colors={gradColors} style={styles.primaryBtnGrad}>
              <Text style={styles.primaryBtnText}>
                {flashcards && flashcards.length > 0 ? 'Practice Flashcards →' : 'Finish Lesson ✓'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ height: 40 }} />
        </ScrollView>
      </View>
    );
  }

  // ── Flashcards phase ──────────────────────────────────────────────────────
  if (phase === 'flashcards') {
    return (
      <View style={styles.root}>
        <LinearGradient colors={gradColors} style={styles.header}>
          <SafeAreaView edges={['top']}>
            <TouchableOpacity onPress={() => nav.goBack()} style={styles.backBtn}>
              <Text style={styles.backText}>← Skip</Text>
            </TouchableOpacity>
            <Text style={styles.lessonEmoji}>{lesson.emoji}</Text>
            <Text style={styles.headerTitle}>Flashcard Review</Text>
            <Text style={styles.headerSub}>{lesson.title} · {flashcards?.length} cards</Text>
          </SafeAreaView>
        </LinearGradient>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <FlashcardMode
            cards={flashcards ?? []}
            accentColor={gradColors[0]}
            onComplete={handleFlashcardsComplete}
          />
          {flashcardsAlreadyDone && (
            <TouchableOpacity style={[styles.primaryBtn, { marginTop: 24 }]} onPress={() => nav.goBack()}>
              <LinearGradient colors={gradColors} style={styles.primaryBtnGrad}>
                <Text style={styles.primaryBtnText}>Finish →</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
          <View style={{ height: 40 }} />
        </ScrollView>
      </View>
    );
  }

  // ── Lesson phase ──────────────────────────────────────────────────────────
  return (
    <View style={styles.root}>
      {/* Header */}
      <LinearGradient colors={gradColors} style={styles.header}>
        <SafeAreaView edges={['top']}>
          <TouchableOpacity onPress={() => nav.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← {mod.title}</Text>
          </TouchableOpacity>
          <Text style={styles.lessonEmoji}>{lesson.emoji}</Text>
          <Text style={styles.headerTitle}>{lesson.title}</Text>
          <Text style={styles.headerSub}>{lesson.duration} · Module {mod.number}</Text>
        </SafeAreaView>
      </LinearGradient>

      {/* Content */}
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={400}
      >
        <LessonSections sections={lesson.sections} />

        {/* Complete button */}
        <View style={styles.completeSection}>
          <TouchableOpacity onPress={handleFinishLesson} activeOpacity={0.85}>
            <LinearGradient colors={gradColors} style={styles.completeBtn}>
              <Text style={styles.completeBtnText}>Complete Lesson ✓</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Flashcard shortcut */}
          {flashcards && flashcards.length > 0 && (
            <TouchableOpacity
              style={styles.flashcardShortcut}
              onPress={() => setPhase('flashcards')}
              activeOpacity={0.75}
            >
              <Text style={styles.flashcardShortcutText}>
                🃏 Practice flashcards {flashcardsAlreadyDone ? '· Done ✓' : `· ${flashcards.length} cards`}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>

      {/* Quick check modal */}
      {quickCheck && (
        <QuickCheckModal
          visible={showQC}
          quickCheck={quickCheck}
          onDismiss={() => setShowQC(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  header: { paddingHorizontal: 20, paddingBottom: 28 },
  backBtn: { marginTop: 8, marginBottom: 12, alignSelf: 'flex-start' },
  backText: { color: '#ffffffcc', fontSize: 15, fontWeight: '600' },
  lessonEmoji: { fontSize: 36, marginBottom: 8 },
  headerTitle: { color: '#fff', fontSize: 24, fontWeight: '800', letterSpacing: -0.3, marginBottom: 4 },
  headerSub: { color: '#ffffffcc', fontSize: 14, fontWeight: '500' },

  scroll: { flex: 1 },
  content: { padding: 20, gap: 0 },

  completeSection: { marginTop: 32, gap: 12 },
  completeBtn: { borderRadius: 14, padding: 16, alignItems: 'center' },
  completeBtnText: { color: Colors.white, fontSize: 16, fontWeight: '800' },
  flashcardShortcut: {
    backgroundColor: Colors.bgCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    alignItems: 'center',
  },
  flashcardShortcutText: { color: Colors.textSub, fontSize: 14, fontWeight: '600' },

  // Takeaways
  takeawayIntro: { color: Colors.textSub, fontSize: 15, marginBottom: 20, lineHeight: 22 },
  takeawayCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  takeawayNum: {
    color: Colors.electric,
    fontSize: 20,
    fontWeight: '900',
    minWidth: 24,
    textAlign: 'center',
  },
  takeawayText: { color: Colors.text, fontSize: 15, lineHeight: 22, flex: 1, fontWeight: '500' },
  primaryBtn: { borderRadius: 14, overflow: 'hidden', marginTop: 8 },
  primaryBtnGrad: { padding: 16, alignItems: 'center' },
  primaryBtnText: { color: Colors.white, fontSize: 16, fontWeight: '800' },
});
