import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, MODULE_GRADIENTS } from '../theme/colors';
import { RootStackParamList } from '../types';
import { getModule } from '../data/modules';
import { useProgress } from '../data/ProgressContext';

type Nav = NativeStackNavigationProp<RootStackParamList>;
type Route = RouteProp<RootStackParamList, 'ModuleLessons'>;

export default function ModuleLessonsScreen() {
  const nav = useNavigation<Nav>();
  const route = useRoute<Route>();
  const { moduleId } = route.params;
  const mod = getModule(moduleId);
  const { getModuleProgress } = useProgress();

  if (!mod) return null;

  const mp = getModuleProgress(moduleId);
  const gradColors = MODULE_GRADIENTS[mod.number] ?? ['#4F8EF7', '#2563EB'];
  const done = mp.completedLessonIds.length;
  const total = mod.lessons.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <View style={styles.root}>
      {/* Gradient header */}
      <LinearGradient colors={gradColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.header}>
        <SafeAreaView edges={['top']}>
          <TouchableOpacity onPress={() => nav.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.moduleNum}>Module {mod.number}</Text>
          <Text style={styles.moduleTitle}>{mod.title}</Text>
          <Text style={styles.moduleSub}>{mod.subtitle}</Text>
          <View style={styles.headerProgress}>
            <View style={styles.headerPBar}>
              <View style={[styles.headerPFill, { width: `${pct}%` }]} />
            </View>
            <Text style={styles.headerPText}>{pct}% complete</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Lessons */}
        <Text style={styles.sectionLabel}>Lessons</Text>
        {mod.lessons.map((lesson, idx) => {
          const isComplete = mp.completedLessonIds.includes(lesson.id);
          const isLocked = idx > 0 && !mp.completedLessonIds.includes(mod.lessons[idx - 1].id);

          return (
            <TouchableOpacity
              key={lesson.id}
              style={[styles.lessonRow, isComplete && styles.lessonRowComplete, isLocked && styles.lessonRowLocked]}
              activeOpacity={isLocked ? 1 : 0.75}
              onPress={() => {
                if (!isLocked) nav.navigate('Lesson', { moduleId, lessonId: lesson.id });
              }}
            >
              {/* Step indicator */}
              <View style={[styles.stepCircle, isComplete && { backgroundColor: Colors.success }, isLocked && { backgroundColor: Colors.bgSurface }]}>
                {isComplete
                  ? <Text style={styles.stepCheck}>✓</Text>
                  : isLocked
                    ? <Text style={styles.stepLock}>🔒</Text>
                    : <Text style={styles.stepNum}>{idx + 1}</Text>
                }
              </View>

              {/* Info */}
              <View style={styles.lessonInfo}>
                <Text style={[styles.lessonTitle, isLocked && styles.textLocked]}>{lesson.emoji} {lesson.title}</Text>
                <Text style={[styles.lessonMeta, isLocked && styles.textLocked]}>{lesson.duration}</Text>
              </View>

              {/* Chevron */}
              {!isLocked && <Text style={styles.chevron}>›</Text>}
            </TouchableOpacity>
          );
        })}

        {/* Quiz button */}
        <View style={styles.quizSection}>
          <Text style={styles.sectionLabel}>Module Quiz</Text>
          <TouchableOpacity
            style={[styles.quizBtn, done < total && styles.quizBtnLocked]}
            activeOpacity={done >= total ? 0.8 : 1}
            onPress={() => { if (done >= total) nav.navigate('Quiz', { moduleId }); }}
          >
            <LinearGradient
              colors={done >= total ? gradColors : [Colors.bgSurface, Colors.bgSurface]}
              style={styles.quizBtnGrad}
            >
              <Text style={styles.quizBtnEmoji}>📝</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.quizBtnTitle, done < total && { color: Colors.textMuted }]}>
                  {mod.title} Quiz
                </Text>
                <Text style={[styles.quizBtnSub, done < total && { color: Colors.textMuted }]}>
                  {done >= total
                    ? mp.quizScore !== null ? `Best score: ${mp.quizScore}%  · Retake` : 'Start quiz'
                    : `Complete all ${total} lessons to unlock`
                  }
                </Text>
              </View>
              {done < total && <Text style={{ fontSize: 18 }}>🔒</Text>}
              {done >= total && <Text style={styles.chevron}>›</Text>}
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  header: { paddingHorizontal: 20, paddingBottom: 28 },
  backBtn: { marginTop: 8, marginBottom: 16, alignSelf: 'flex-start' },
  backText: { color: '#ffffffcc', fontSize: 15, fontWeight: '600' },
  moduleNum: { color: '#ffffff99', fontSize: 13, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 },
  moduleTitle: { color: '#fff', fontSize: 26, fontWeight: '800', letterSpacing: -0.5, marginBottom: 4 },
  moduleSub: { color: '#ffffffcc', fontSize: 15, fontWeight: '500', marginBottom: 16 },
  headerProgress: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerPBar: { flex: 1, height: 4, backgroundColor: '#ffffff30', borderRadius: 2, overflow: 'hidden' },
  headerPFill: { height: 4, backgroundColor: '#fff', borderRadius: 2 },
  headerPText: { color: '#ffffffcc', fontSize: 12, fontWeight: '700' },

  scroll: { flex: 1 },
  content: { padding: 20 },
  sectionLabel: {
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },

  lessonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    marginBottom: 10,
    gap: 14,
  },
  lessonRowComplete: { borderColor: Colors.success + '60', backgroundColor: Colors.successBg + '40' },
  lessonRowLocked: { opacity: 0.5 },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.electric,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepCheck: { color: Colors.white, fontSize: 16, fontWeight: '800' },
  stepLock: { fontSize: 14 },
  stepNum: { color: Colors.white, fontSize: 14, fontWeight: '800' },
  lessonInfo: { flex: 1 },
  lessonTitle: { color: Colors.text, fontSize: 15, fontWeight: '700', marginBottom: 3 },
  lessonMeta: { color: Colors.textSub, fontSize: 13 },
  textLocked: { color: Colors.textMuted },
  chevron: { color: Colors.textMuted, fontSize: 22 },

  quizSection: { marginTop: 24 },
  quizBtn: { borderRadius: 14, overflow: 'hidden', borderWidth: 1, borderColor: Colors.border },
  quizBtnLocked: { opacity: 0.6 },
  quizBtnGrad: { flexDirection: 'row', alignItems: 'center', padding: 18, gap: 14 },
  quizBtnEmoji: { fontSize: 28 },
  quizBtnTitle: { color: Colors.white, fontSize: 16, fontWeight: '700', marginBottom: 3 },
  quizBtnSub: { color: '#ffffffcc', fontSize: 13 },
});
