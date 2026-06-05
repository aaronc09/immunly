import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, MODULE_GRADIENTS } from '../theme/colors';
import { RootStackParamList } from '../types';
import { MODULES } from '../data/modules';
import { useProgress } from '../data/ProgressContext';
import AnimatedRing from '../components/AnimatedRing';

type Nav = NativeStackNavigationProp<RootStackParamList>;

function xpToLevel(xp: number) {
  const level = Math.floor(xp / 200) + 1;
  const progress = (xp % 200) / 200;
  const nextXP = level * 200;
  return { level, progress, nextXP };
}

export default function ProgressScreen() {
  const nav = useNavigation<Nav>();
  const {
    stats, progress, overallPercent, completedLessons, totalLessons, completedFlashcardLessons,
  } = useProgress();

  const { level, progress: xpProg, nextXP } = xpToLevel(stats.xp);

  // Modules with weak quiz scores
  const weakModules = MODULES.filter(m => {
    const mp = progress[m.id];
    return mp?.quizScore !== null && mp?.quizScore !== undefined && (mp.quizScore ?? 0) < 75;
  });

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']}>
        <View style={styles.topBar}>
          <Text style={styles.screenTitle}>Progress</Text>
        </View>
      </SafeAreaView>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* ── Hero stats ──────────────────────────────────────────── */}
        <LinearGradient colors={['#1D4ED8', '#0891B2']} style={styles.heroCard}>
          <View style={styles.heroLeft}>
            <Text style={styles.heroXP}>{stats.xp} XP</Text>
            <Text style={styles.heroLevel}>Level {level}</Text>
            {/* XP bar */}
            <View style={styles.xpBarRow}>
              <View style={styles.xpBar}>
                <View style={[styles.xpFill, { width: `${xpProg * 100}%` }]} />
              </View>
              <Text style={styles.xpNext}>{nextXP} XP</Text>
            </View>
            <Text style={styles.xpSub}>{nextXP - stats.xp} XP to level {level + 1}</Text>
          </View>
          <View style={styles.heroRing}>
            <AnimatedRing
              size={90}
              strokeWidth={7}
              progress={xpProg}
              gradientColors={['#22D3EE', '#4F8EF7']}
              trackColor="#ffffff20"
            />
            <View style={styles.heroRingCenter}>
              <Text style={styles.heroRingText}>Lv{level}</Text>
            </View>
          </View>
        </LinearGradient>

        {/* ── Quick stat row ──────────────────────────────────────── */}
        <View style={styles.quickRow}>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>🔥</Text>
            <Text style={styles.quickVal}>{stats.streak}</Text>
            <Text style={styles.quickLabel}>Day Streak</Text>
          </View>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>📖</Text>
            <Text style={styles.quickVal}>{completedLessons}/{totalLessons}</Text>
            <Text style={styles.quickLabel}>Lessons</Text>
          </View>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>🃏</Text>
            <Text style={styles.quickVal}>{completedFlashcardLessons.size}</Text>
            <Text style={styles.quickLabel}>Flashcards</Text>
          </View>
          <View style={styles.quickCard}>
            <Text style={styles.quickEmoji}>🎯</Text>
            <Text style={styles.quickVal}>{overallPercent}%</Text>
            <Text style={styles.quickLabel}>Complete</Text>
          </View>
        </View>

        {/* ── Overall ring ────────────────────────────────────────── */}
        <View style={styles.overallCard}>
          <View style={styles.overallRingWrap}>
            <AnimatedRing
              size={120}
              strokeWidth={10}
              progress={overallPercent / 100}
              gradientColors={['#34D399', '#0891B2']}
            />
            <View style={styles.overallRingCenter}>
              <Text style={styles.overallPct}>{overallPercent}%</Text>
              <Text style={styles.overallSub}>Done</Text>
            </View>
          </View>
          <View style={styles.overallInfo}>
            <Text style={styles.overallTitle}>Overall Progress</Text>
            <Text style={styles.overallDesc}>
              {completedLessons} of {totalLessons} lessons complete across all 5 modules.
            </Text>
            {overallPercent === 100 && (
              <View style={styles.completionBadge}>
                <Text style={styles.completionBadgeText}>🏆 Curriculum complete!</Text>
              </View>
            )}
          </View>
        </View>

        {/* ── Per-module breakdown ─────────────────────────────────── */}
        <Text style={styles.sectionTitle}>Module Breakdown</Text>
        {MODULES.map(mod => {
          const mp = progress[mod.id];
          const done = mp?.completedLessonIds.length ?? 0;
          const total = mod.lessons.length;
          const pct = total > 0 ? done / total : 0;
          const score = mp?.quizScore ?? null;
          const colors = MODULE_GRADIENTS[mod.number] ?? ['#4F8EF7', '#2563EB'];

          return (
            <TouchableOpacity
              key={mod.id}
              style={styles.modCard}
              activeOpacity={0.75}
              onPress={() => nav.navigate('ModuleLessons', { moduleId: mod.id })}
            >
              <View style={styles.modCardHeader}>
                <LinearGradient colors={colors} style={styles.modIconGrad}>
                  <Text style={{ fontSize: 20 }}>{mod.emoji}</Text>
                </LinearGradient>
                <View style={{ flex: 1 }}>
                  <Text style={styles.modName}>{mod.title}</Text>
                  <Text style={styles.modSub}>Module {mod.number} · {total} lessons</Text>
                </View>
                {score !== null && (
                  <View style={[styles.scorePill, { backgroundColor: score >= 75 ? Colors.successBg : Colors.warningBg, borderColor: score >= 75 ? Colors.success : Colors.warning }]}>
                    <Text style={[styles.scorePillText, { color: score >= 75 ? Colors.success : Colors.warning }]}>
                      Quiz {score}%
                    </Text>
                  </View>
                )}
              </View>
              {/* Lesson progress bar */}
              <View style={styles.modBar}>
                <View style={[styles.modFill, { width: `${pct * 100}%`, backgroundColor: colors[0] }]} />
              </View>
              <View style={styles.modBarRow}>
                <Text style={styles.modBarLabel}>{done}/{total} lessons</Text>
                <Text style={[styles.modBarLabel, { color: colors[0] }]}>{Math.round(pct * 100)}%</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        {/* ── Weak areas ──────────────────────────────────────────── */}
        {weakModules.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>⚠️ Needs Improvement</Text>
            {weakModules.map(mod => (
              <TouchableOpacity
                key={mod.id}
                style={styles.weakCard}
                onPress={() => nav.navigate('Quiz', { moduleId: mod.id })}
                activeOpacity={0.8}
              >
                <Text style={styles.weakEmoji}>{mod.emoji}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.weakTitle}>{mod.title}</Text>
                  <Text style={styles.weakSub}>Quiz score: {progress[mod.id]?.quizScore}% — tap to retake</Text>
                </View>
                <Text style={styles.weakChevron}>›</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {/* ── Achievements ─────────────────────────────────────────── */}
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsGrid}>
          {[
            { emoji: '🎯', label: 'First Lesson', unlocked: completedLessons >= 1 },
            { emoji: '🔥', label: '3-Day Streak', unlocked: stats.streak >= 3 },
            { emoji: '📚', label: 'Module Done', unlocked: MODULES.some(m => (progress[m.id]?.completedLessonIds.length ?? 0) >= m.lessons.length) },
            { emoji: '🃏', label: 'Flashcard Fan', unlocked: completedFlashcardLessons.size >= 3 },
            { emoji: '💯', label: 'Perfect Quiz', unlocked: MODULES.some(m => (progress[m.id]?.quizScore ?? 0) === 100) },
            { emoji: '🏆', label: 'All Modules', unlocked: overallPercent === 100 },
          ].map((ach, i) => (
            <View key={i} style={[styles.achCard, !ach.unlocked && styles.achCardLocked]}>
              <Text style={[styles.achEmoji, !ach.unlocked && { opacity: 0.2 }]}>{ach.emoji}</Text>
              <Text style={[styles.achLabel, !ach.unlocked && { color: Colors.textMuted }]}>{ach.label}</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  topBar: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
  screenTitle: { color: Colors.text, fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20, gap: 16 },

  heroCard: {
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  heroLeft: { flex: 1, gap: 4 },
  heroXP: { color: '#fff', fontSize: 32, fontWeight: '900', letterSpacing: -1 },
  heroLevel: { color: '#ffffffcc', fontSize: 15, fontWeight: '700', marginBottom: 8 },
  xpBarRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  xpBar: { flex: 1, height: 6, backgroundColor: '#ffffff30', borderRadius: 3, overflow: 'hidden' },
  xpFill: { height: 6, backgroundColor: '#fff', borderRadius: 3 },
  xpNext: { color: '#ffffffcc', fontSize: 11, fontWeight: '700' },
  xpSub: { color: '#ffffff80', fontSize: 12, fontWeight: '500' },
  heroRing: { position: 'relative', width: 90, height: 90, justifyContent: 'center', alignItems: 'center' },
  heroRingCenter: { position: 'absolute' },
  heroRingText: { color: '#fff', fontSize: 14, fontWeight: '800' },

  quickRow: { flexDirection: 'row', gap: 10 },
  quickCard: {
    flex: 1,
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 12,
    alignItems: 'center',
    gap: 4,
  },
  quickEmoji: { fontSize: 22 },
  quickVal: { color: Colors.text, fontSize: 16, fontWeight: '800' },
  quickLabel: { color: Colors.textMuted, fontSize: 10, fontWeight: '500', textAlign: 'center' },

  overallCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  overallRingWrap: { width: 120, height: 120, justifyContent: 'center', alignItems: 'center' },
  overallRingCenter: { position: 'absolute', alignItems: 'center' },
  overallPct: { color: Colors.text, fontSize: 22, fontWeight: '900' },
  overallSub: { color: Colors.textSub, fontSize: 12, fontWeight: '600' },
  overallInfo: { flex: 1, gap: 8 },
  overallTitle: { color: Colors.text, fontSize: 17, fontWeight: '800' },
  overallDesc: { color: Colors.textSub, fontSize: 13, lineHeight: 20 },
  completionBadge: {
    backgroundColor: Colors.successBg,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: Colors.success,
  },
  completionBadgeText: { color: Colors.success, fontSize: 13, fontWeight: '700' },

  sectionTitle: { color: Colors.text, fontSize: 18, fontWeight: '800', letterSpacing: -0.3, marginTop: 8 },

  modCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
    gap: 12,
  },
  modCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  modIconGrad: { width: 44, height: 44, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  modName: { color: Colors.text, fontSize: 15, fontWeight: '700' },
  modSub: { color: Colors.textMuted, fontSize: 12 },
  scorePill: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
  },
  scorePillText: { fontSize: 11, fontWeight: '700' },
  modBar: { height: 4, backgroundColor: Colors.bgSurface, borderRadius: 2, overflow: 'hidden' },
  modFill: { height: 4, borderRadius: 2 },
  modBarRow: { flexDirection: 'row', justifyContent: 'space-between' },
  modBarLabel: { color: Colors.textMuted, fontSize: 12, fontWeight: '600' },

  weakCard: {
    backgroundColor: Colors.warningBg,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.warning + '80',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  weakEmoji: { fontSize: 24 },
  weakTitle: { color: Colors.text, fontSize: 15, fontWeight: '700' },
  weakSub: { color: Colors.warning, fontSize: 13 },
  weakChevron: { color: Colors.warning, fontSize: 22 },

  achievementsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  achCard: {
    width: '30%',
    flexGrow: 1,
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    alignItems: 'center',
    gap: 6,
  },
  achCardLocked: { borderColor: Colors.bgSurface },
  achEmoji: { fontSize: 28 },
  achLabel: { color: Colors.textSub, fontSize: 11, fontWeight: '700', textAlign: 'center' },
});
