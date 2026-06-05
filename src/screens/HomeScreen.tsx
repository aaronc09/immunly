import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, MODULE_GRADIENTS } from '../theme/colors';
import { RootStackParamList } from '../types';
import { useProgress } from '../data/ProgressContext';
import { MODULES } from '../data/modules';
import AnimatedRing from '../components/AnimatedRing';

type Nav = NativeStackNavigationProp<RootStackParamList>;
const { width: SW } = Dimensions.get('window');

function xpToLevel(xp: number) {
  const level = Math.floor(xp / 200) + 1;
  const progress = (xp % 200) / 200;
  return { level, progress };
}

export default function HomeScreen() {
  const nav = useNavigation<Nav>();
  const { stats, overallPercent, progress, totalLessons, completedLessons } = useProgress();
  const { level, progress: xpProgress } = xpToLevel(stats.xp);

  // Find current or next module
  const currentModule = MODULES.find(m => {
    const mp = progress[m.id];
    if (!mp) return true;
    return mp.completedLessonIds.length < m.lessons.length;
  }) ?? MODULES[MODULES.length - 1];

  const modNum = currentModule.number;
  const gradColors = MODULE_GRADIENTS[modNum] ?? ['#4F8EF7', '#2563EB'];

  const mp = progress[currentModule.id];
  const lessonsComplete = mp?.completedLessonIds.length ?? 0;
  const lessonsTotal = currentModule.lessons.length;
  const modPercent = lessonsTotal > 0 ? lessonsComplete / lessonsTotal : 0;

  // Next unfinished lesson
  const nextLesson = currentModule.lessons.find(l => !mp?.completedLessonIds.includes(l.id))
    ?? currentModule.lessons[0];

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* ── Header ─────────────────────────────────────────────── */}
        <SafeAreaView edges={['top']}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Good {getTimeOfDay()} 👋</Text>
              <Text style={styles.appName}>ImmunoLearn</Text>
            </View>
            <View style={styles.streakPill}>
              <Text style={styles.streakEmoji}>🔥</Text>
              <Text style={styles.streakCount}>{stats.streak}</Text>
              <Text style={styles.streakLabel}> day streak</Text>
            </View>
          </View>
        </SafeAreaView>

        {/* ── Stats row ──────────────────────────────────────────── */}
        <View style={styles.statsRow}>
          {/* XP Ring */}
          <View style={styles.statCard}>
            <View style={styles.ringWrap}>
              <AnimatedRing
                size={72}
                strokeWidth={6}
                progress={xpProgress}
                gradientColors={['#4F8EF7', '#22D3EE']}
              />
              <View style={styles.ringCenter}>
                <Text style={styles.ringLevel}>Lv{level}</Text>
              </View>
            </View>
            <Text style={styles.statValue}>{stats.xp} XP</Text>
            <Text style={styles.statLabel}>Experience</Text>
          </View>

          {/* Overall ring */}
          <View style={styles.statCard}>
            <View style={styles.ringWrap}>
              <AnimatedRing
                size={72}
                strokeWidth={6}
                progress={overallPercent / 100}
                gradientColors={['#34D399', '#0891B2']}
              />
              <View style={styles.ringCenter}>
                <Text style={styles.ringPct}>{overallPercent}%</Text>
              </View>
            </View>
            <Text style={styles.statValue}>{completedLessons}/{totalLessons}</Text>
            <Text style={styles.statLabel}>Lessons Done</Text>
          </View>

          {/* Modules */}
          <View style={styles.statCard}>
            <View style={[styles.statIcon, { backgroundColor: '#1a2d4a' }]}>
              <Text style={styles.statIconText}>📚</Text>
            </View>
            <Text style={styles.statValue}>
              {MODULES.filter(m => {
                const mp2 = progress[m.id];
                return mp2 && mp2.completedLessonIds.length === m.lessons.length;
              }).length}/{MODULES.length}
            </Text>
            <Text style={styles.statLabel}>Modules</Text>
          </View>
        </View>

        {/* ── Continue card ──────────────────────────────────────── */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => nav.navigate('Lesson', { moduleId: currentModule.id, lessonId: nextLesson.id })}
        >
          <LinearGradient colors={gradColors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.continueCard}>
            {/* Large background number */}
            <Text style={styles.continueBgNum}>{modNum}</Text>
            <View style={styles.continueContent}>
              <Text style={styles.continueEyebrow}>
                {lessonsComplete === 0 ? 'Start Learning' : lessonsComplete < lessonsTotal ? 'Continue' : 'Review'}
              </Text>
              <Text style={styles.continueModule}>{currentModule.title}</Text>
              <Text style={styles.continueLesson}>{nextLesson.emoji} {nextLesson.title}</Text>
              <View style={styles.continueProgressRow}>
                <View style={styles.continuePBar}>
                  <View style={[styles.continuePFill, { width: `${modPercent * 100}%` }]} />
                </View>
                <Text style={styles.continuePText}>{lessonsComplete}/{lessonsTotal}</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* ── Module overview ────────────────────────────────────── */}
        <Text style={styles.sectionTitle}>All Modules</Text>
        {MODULES.map(mod => {
          const mp2 = progress[mod.id];
          const done = mp2?.completedLessonIds.length ?? 0;
          const total = mod.lessons.length;
          const pct = total > 0 ? done / total : 0;
          const colors = MODULE_GRADIENTS[mod.number] ?? ['#4F8EF7', '#2563EB'];

          return (
            <TouchableOpacity
              key={mod.id}
              style={styles.moduleRow}
              activeOpacity={0.75}
              onPress={() => nav.navigate('ModuleLessons', { moduleId: mod.id })}
            >
              <LinearGradient colors={colors} style={styles.moduleIconGrad}>
                <Text style={styles.moduleIconText}>{mod.emoji}</Text>
              </LinearGradient>
              <View style={styles.moduleRowInfo}>
                <Text style={styles.moduleRowTitle}>{mod.title}</Text>
                <View style={styles.moduleRowBar}>
                  <View style={[styles.moduleRowFill, { width: `${pct * 100}%`, backgroundColor: colors[0] }]} />
                </View>
              </View>
              <Text style={styles.moduleRowPct}>{Math.round(pct * 100)}%</Text>
            </TouchableOpacity>
          );
        })}

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
}

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h < 12) return 'morning';
  if (h < 17) return 'afternoon';
  return 'evening';
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingBottom: 20,
  },
  greeting: { color: Colors.textSub, fontSize: 14, fontWeight: '500' },
  appName: { color: Colors.text, fontSize: 26, fontWeight: '800', letterSpacing: -0.5, marginTop: 2 },
  streakPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a1a00',
    borderWidth: 1,
    borderColor: Colors.warning,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  streakEmoji: { fontSize: 16 },
  streakCount: { color: Colors.warning, fontWeight: '800', fontSize: 15, marginLeft: 4 },
  streakLabel: { color: Colors.warning, fontSize: 12, fontWeight: '500' },

  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    alignItems: 'center',
    gap: 6,
  },
  ringWrap: { position: 'relative', width: 72, height: 72, alignItems: 'center', justifyContent: 'center' },
  ringCenter: { position: 'absolute' },
  ringLevel: { color: Colors.text, fontSize: 12, fontWeight: '800' },
  ringPct: { color: Colors.text, fontSize: 11, fontWeight: '800' },
  statIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statIconText: { fontSize: 28 },
  statValue: { color: Colors.text, fontSize: 15, fontWeight: '800' },
  statLabel: { color: Colors.textMuted, fontSize: 11, fontWeight: '500' },

  continueCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    overflow: 'hidden',
    minHeight: 160,
    justifyContent: 'flex-end',
  },
  continueBgNum: {
    position: 'absolute',
    right: -10,
    top: -20,
    fontSize: 140,
    fontWeight: '900',
    color: '#ffffff12',
    lineHeight: 160,
  },
  continueContent: { gap: 4 },
  continueEyebrow: { color: '#ffffff99', fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  continueModule: { color: '#fff', fontSize: 22, fontWeight: '800', letterSpacing: -0.3 },
  continueLesson: { color: '#ffffffcc', fontSize: 14, fontWeight: '500', marginTop: 2 },
  continueProgressRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 12 },
  continuePBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#ffffff30',
    borderRadius: 2,
    overflow: 'hidden',
  },
  continuePFill: { height: 4, backgroundColor: '#fff', borderRadius: 2 },
  continuePText: { color: '#ffffffcc', fontSize: 12, fontWeight: '700' },

  sectionTitle: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  moduleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
    marginBottom: 10,
    gap: 14,
  },
  moduleIconGrad: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moduleIconText: { fontSize: 22 },
  moduleRowInfo: { flex: 1, gap: 6 },
  moduleRowTitle: { color: Colors.text, fontSize: 14, fontWeight: '700' },
  moduleRowBar: {
    height: 3,
    backgroundColor: Colors.bgSurface,
    borderRadius: 2,
    overflow: 'hidden',
  },
  moduleRowFill: { height: 3, borderRadius: 2 },
  moduleRowPct: { color: Colors.textSub, fontSize: 13, fontWeight: '700', minWidth: 36, textAlign: 'right' },
});
