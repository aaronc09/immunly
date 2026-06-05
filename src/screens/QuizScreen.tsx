import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, MODULE_GRADIENTS } from '../theme/colors';
import { RootStackParamList } from '../types';
import { getModule } from '../data/modules';
import { useProgress } from '../data/ProgressContext';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Route = RouteProp<RootStackParamList, 'Quiz'>;

export default function QuizScreen() {
  const nav = useNavigation<Nav>();
  const route = useRoute<Route>();
  const { moduleId } = route.params;
  const mod = getModule(moduleId);
  const { saveQuizScore } = useProgress();

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!mod) return null;

  const questions = mod.quiz;
  const gradColors = MODULE_GRADIENTS[mod.number] ?? ['#4F8EF7', '#2563EB'];

  const handleSelect = (qid: string, idx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qid]: idx }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) return;
    const correct = questions.filter(q => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    saveQuizScore(moduleId, score);
    setSubmitted(true);
    setRevealed(true);
  };

  if (submitted) {
    const correct = questions.filter(q => answers[q.id] === q.correctIndex).length;
    const score = Math.round((correct / questions.length) * 100);
    const emoji = score >= 90 ? '🏆' : score >= 75 ? '🎉' : score >= 50 ? '💪' : '📚';
    const message = score >= 90 ? 'Outstanding!' : score >= 75 ? 'Great work!' : score >= 50 ? 'Keep going!' : 'Keep studying!';

    return (
      <View style={styles.root}>
        <LinearGradient colors={gradColors} style={styles.header}>
          <SafeAreaView edges={['top']}>
            <View style={styles.resultHero}>
              <Text style={styles.resultEmoji}>{emoji}</Text>
              <Text style={styles.resultScore}>{score}%</Text>
              <Text style={styles.resultMsg}>{message}</Text>
              <Text style={styles.resultSub}>{correct} / {questions.length} correct</Text>
            </View>
          </SafeAreaView>
        </LinearGradient>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.reviewTitle}>Answer Review</Text>
          {questions.map((q, qi) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctIndex;
            return (
              <View key={q.id} style={[styles.reviewCard, isCorrect ? styles.reviewCardCorrect : styles.reviewCardWrong]}>
                <View style={styles.reviewCardHeader}>
                  <Text style={[styles.reviewStatus, { color: isCorrect ? Colors.success : Colors.error }]}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </Text>
                  <Text style={styles.reviewQNum}>Q{qi + 1}</Text>
                </View>
                <Text style={styles.reviewQuestion}>{q.question}</Text>
                {/* All options */}
                {q.options.map((opt, oi) => {
                  const isCorrectOpt = oi === q.correctIndex;
                  const isUserOpt = oi === userAns;
                  let bg = 'transparent';
                  let textColor = Colors.textSub;
                  if (isCorrectOpt) { bg = Colors.successBg; textColor = Colors.success; }
                  else if (isUserOpt && !isCorrect) { bg = Colors.errorBg; textColor = Colors.error; }
                  return (
                    <View key={oi} style={[styles.reviewOpt, { backgroundColor: bg }]}>
                      <Text style={[styles.reviewOptText, { color: textColor }]}>
                        {isCorrectOpt ? '✓ ' : isUserOpt ? '✗ ' : '   '}{opt}
                      </Text>
                    </View>
                  );
                })}
                {/* Explanation */}
                <View style={styles.explanationBox}>
                  <Text style={styles.explanationTitle}>Explanation</Text>
                  <Text style={styles.explanationText}>{q.explanation}</Text>
                </View>
              </View>
            );
          })}

          <TouchableOpacity style={styles.doneBtn} onPress={() => nav.goBack()} activeOpacity={0.85}>
            <LinearGradient colors={gradColors} style={styles.doneBtnGrad}>
              <Text style={styles.doneBtnText}>Back to Module ←</Text>
            </LinearGradient>
          </TouchableOpacity>
          {score < 100 && (
            <TouchableOpacity
              style={styles.retakeBtn}
              onPress={() => {
                setAnswers({});
                setSubmitted(false);
                setRevealed(false);
              }}
              activeOpacity={0.75}
            >
              <Text style={styles.retakeBtnText}>🔄 Retake Quiz</Text>
            </TouchableOpacity>
          )}
          <View style={{ height: 40 }} />
        </ScrollView>
      </View>
    );
  }

  // ── Taking quiz ─────────────────────────────────────────────────────────
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  return (
    <View style={styles.root}>
      <LinearGradient colors={gradColors} style={styles.header}>
        <SafeAreaView edges={['top']}>
          <TouchableOpacity onPress={() => nav.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>✕ Exit</Text>
          </TouchableOpacity>
          <Text style={styles.quizTitle}>{mod.title}</Text>
          <Text style={styles.quizSub}>Module {mod.number} Quiz · {questions.length} questions</Text>
          {/* Progress */}
          <View style={styles.quizProgress}>
            <View style={styles.quizPBar}>
              <View style={[styles.quizPFill, { width: `${(answeredCount / questions.length) * 100}%` }]} />
            </View>
            <Text style={styles.quizPText}>{answeredCount}/{questions.length}</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {questions.map((q, qi) => (
          <View key={q.id} style={styles.questionCard}>
            <Text style={styles.questionNum}>Question {qi + 1}</Text>
            <Text style={styles.questionText}>{q.question}</Text>
            <View style={styles.optionsGap}>
              {q.options.map((opt, oi) => {
                const selected = answers[q.id] === oi;
                return (
                  <TouchableOpacity
                    key={oi}
                    style={[styles.optionBtn, selected && styles.optionSelected]}
                    onPress={() => handleSelect(q.id, oi)}
                    activeOpacity={0.75}
                  >
                    <View style={[styles.optionLetter, selected && styles.optionLetterSelected]}>
                      <Text style={[styles.optionLetterText, selected && styles.optionLetterTextSelected]}>
                        {String.fromCharCode(65 + oi)}
                      </Text>
                    </View>
                    <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{opt}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.submitBtn, !allAnswered && styles.submitBtnDisabled]}
          onPress={handleSubmit}
          activeOpacity={allAnswered ? 0.85 : 1}
        >
          <LinearGradient
            colors={allAnswered ? gradColors : [Colors.bgSurface, Colors.bgSurface]}
            style={styles.submitBtnGrad}
          >
            <Text style={[styles.submitBtnText, !allAnswered && { color: Colors.textMuted }]}>
              {allAnswered ? 'Submit Quiz →' : `Answer all ${questions.length - answeredCount} remaining`}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  header: { paddingHorizontal: 20, paddingBottom: 24 },
  backBtn: { marginTop: 8, marginBottom: 16, alignSelf: 'flex-start' },
  backText: { color: '#ffffffcc', fontSize: 15, fontWeight: '600' },
  quizTitle: { color: '#fff', fontSize: 22, fontWeight: '800', letterSpacing: -0.3, marginBottom: 4 },
  quizSub: { color: '#ffffffcc', fontSize: 14, marginBottom: 16 },
  quizProgress: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  quizPBar: { flex: 1, height: 4, backgroundColor: '#ffffff30', borderRadius: 2, overflow: 'hidden' },
  quizPFill: { height: 4, backgroundColor: '#fff', borderRadius: 2 },
  quizPText: { color: '#ffffffcc', fontSize: 12, fontWeight: '700' },

  scroll: { flex: 1 },
  content: { padding: 20, gap: 16 },

  questionCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 18,
  },
  questionNum: { color: Colors.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  questionText: { color: Colors.text, fontSize: 16, fontWeight: '700', lineHeight: 24, marginBottom: 16 },
  optionsGap: { gap: 8 },
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Colors.bgSurface,
    borderRadius: 10,
    padding: 12,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  optionSelected: { borderColor: Colors.electric, backgroundColor: '#4F8EF715' },
  optionLetter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.bgCard,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  optionLetterSelected: { backgroundColor: Colors.electric, borderColor: Colors.electric },
  optionLetterText: { color: Colors.textSub, fontSize: 12, fontWeight: '800' },
  optionLetterTextSelected: { color: Colors.white },
  optionText: { color: Colors.textSub, fontSize: 14, flex: 1, lineHeight: 20 },
  optionTextSelected: { color: Colors.text, fontWeight: '600' },

  submitBtn: { borderRadius: 14, overflow: 'hidden', marginTop: 8 },
  submitBtnDisabled: { opacity: 0.7 },
  submitBtnGrad: { padding: 16, alignItems: 'center' },
  submitBtnText: { color: Colors.white, fontSize: 16, fontWeight: '800' },

  // Results
  resultHero: { alignItems: 'center', paddingVertical: 20, gap: 6 },
  resultEmoji: { fontSize: 56 },
  resultScore: { color: '#fff', fontSize: 56, fontWeight: '900', letterSpacing: -2 },
  resultMsg: { color: '#fff', fontSize: 22, fontWeight: '800' },
  resultSub: { color: '#ffffffcc', fontSize: 16 },

  reviewTitle: { color: Colors.text, fontSize: 18, fontWeight: '800', marginBottom: 4 },
  reviewCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    gap: 10,
  },
  reviewCardCorrect: { borderColor: Colors.success + '60' },
  reviewCardWrong: { borderColor: Colors.error + '60' },
  reviewCardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  reviewStatus: { fontSize: 13, fontWeight: '700' },
  reviewQNum: { color: Colors.textMuted, fontSize: 13 },
  reviewQuestion: { color: Colors.text, fontSize: 15, fontWeight: '700', lineHeight: 22 },
  reviewOpt: {
    borderRadius: 8,
    padding: 10,
  },
  reviewOptText: { fontSize: 14, lineHeight: 20 },
  explanationBox: {
    backgroundColor: Colors.bgSurface,
    borderRadius: 10,
    padding: 12,
    marginTop: 4,
  },
  explanationTitle: { color: Colors.electric, fontSize: 11, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 },
  explanationText: { color: Colors.textSub, fontSize: 13, lineHeight: 20 },

  doneBtn: { borderRadius: 14, overflow: 'hidden', marginTop: 8 },
  doneBtnGrad: { padding: 16, alignItems: 'center' },
  doneBtnText: { color: Colors.white, fontSize: 16, fontWeight: '800' },
  retakeBtn: {
    borderRadius: 14,
    backgroundColor: Colors.bgCard,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  retakeBtnText: { color: Colors.textSub, fontSize: 15, fontWeight: '700' },
});
