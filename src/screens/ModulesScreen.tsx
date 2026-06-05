import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, MODULE_GRADIENTS } from '../theme/colors';
import { RootStackParamList, Module } from '../types';
import { MODULES } from '../data/modules';
import { useProgress } from '../data/ProgressContext';

type Nav = NativeStackNavigationProp<RootStackParamList>;
const { width: SW } = Dimensions.get('window');

function ModuleCard({ mod, onPress }: { mod: Module; onPress: () => void }) {
  const { progress } = useProgress();
  const mp = progress[mod.id];
  const done = mp?.completedLessonIds.length ?? 0;
  const total = mod.lessons.length;
  const pct = total > 0 ? done / total : 0;
  const quizScore = mp?.quizScore;
  const gradColors = MODULE_GRADIENTS[mod.number] ?? ['#4F8EF7', '#2563EB'];

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <LinearGradient
        colors={gradColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Large bg number */}
        <Text style={styles.bgNum}>{mod.number}</Text>

        {/* Top row */}
        <View style={styles.cardTop}>
          <View style={styles.moduleBadge}>
            <Text style={styles.moduleBadgeText}>Module {mod.number}</Text>
          </View>
          {pct === 1 && <Text style={styles.completedBadge}>✓ Complete</Text>}
        </View>

        {/* Emoji + title */}
        <Text style={styles.cardEmoji}>{mod.emoji}</Text>
        <Text style={styles.cardTitle}>{mod.title}</Text>
        <Text style={styles.cardSubtitle}>{mod.subtitle}</Text>

        {/* Progress bar */}
        <View style={styles.progressRow}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${pct * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>{done}/{total} lessons</Text>
        </View>

        {/* Quiz score pill */}
        {quizScore !== null && quizScore !== undefined && (
          <View style={styles.quizPill}>
            <Text style={styles.quizPillText}>Quiz: {quizScore}%</Text>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default function ModulesScreen() {
  const nav = useNavigation<Nav>();

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.safeHeader}>
        <Text style={styles.screenTitle}>Modules</Text>
        <Text style={styles.screenSub}>5 units · Immunology curriculum</Text>
      </SafeAreaView>

      <FlatList
        data={MODULES}
        keyExtractor={m => m.id}
        renderItem={({ item }) => (
          <ModuleCard
            mod={item}
            onPress={() => nav.navigate('ModuleLessons', { moduleId: item.id })}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  safeHeader: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  screenTitle: { color: Colors.text, fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  screenSub: { color: Colors.textSub, fontSize: 14, marginTop: 2 },

  list: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 16,
  },
  card: {
    borderRadius: 24,
    padding: 24,
    overflow: 'hidden',
    minHeight: 200,
  },
  bgNum: {
    position: 'absolute',
    right: -12,
    bottom: -30,
    fontSize: 160,
    fontWeight: '900',
    color: '#ffffff12',
    lineHeight: 180,
    letterSpacing: -4,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  moduleBadge: {
    backgroundColor: '#ffffff20',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  moduleBadgeText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  completedBadge: { color: '#fff', fontSize: 12, fontWeight: '700', backgroundColor: '#ffffff30', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  cardEmoji: { fontSize: 36, marginBottom: 8 },
  cardTitle: { color: '#fff', fontSize: 22, fontWeight: '800', letterSpacing: -0.3, marginBottom: 4 },
  cardSubtitle: { color: '#ffffffbb', fontSize: 14, fontWeight: '500', marginBottom: 20 },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: '#ffffff30',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  progressText: { color: '#ffffffcc', fontSize: 12, fontWeight: '700' },
  quizPill: {
    marginTop: 10,
    backgroundColor: '#ffffff20',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  quizPillText: { color: '#fff', fontSize: 12, fontWeight: '700' },
});
