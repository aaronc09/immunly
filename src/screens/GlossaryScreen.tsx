import React, { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, SectionList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, MODULE_COLORS } from '../theme/colors';
import { GLOSSARY } from '../data/glossary';

const MODULE_NAMES: Record<number, string> = {
  1: 'Foundations',
  2: 'The Immune System',
  3: 'When It Goes Wrong',
  4: 'Treatments',
  5: 'Research Skills',
};

const ALL_TAGS = Array.from(new Set(GLOSSARY.map(g => g.tag).filter(Boolean))) as string[];

export default function GlossaryScreen() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return GLOSSARY.filter(g => {
      const matchSearch = !q || g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q);
      const matchTag = !activeTag || g.tag === activeTag;
      return matchSearch && matchTag;
    });
  }, [search, activeTag]);

  // Group by module
  const sections = useMemo(() => {
    const byModule: Record<number, typeof filtered> = {};
    filtered.forEach(g => {
      if (!byModule[g.module]) byModule[g.module] = [];
      byModule[g.module].push(g);
    });
    return Object.entries(byModule)
      .sort(([a], [b]) => Number(a) - Number(b))
      .map(([mod, data]) => ({
        title: `Module ${mod}: ${MODULE_NAMES[Number(mod)]}`,
        moduleNum: Number(mod),
        data: data.sort((a, b) => a.term.localeCompare(b.term)),
      }));
  }, [filtered]);

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']}>
        <View style={styles.topBar}>
          <Text style={styles.screenTitle}>Glossary</Text>
          <Text style={styles.screenSub}>{GLOSSARY.length} terms · All modules</Text>
        </View>
        {/* Search */}
        <View style={styles.searchRow}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            placeholder="Search terms or definitions..."
            placeholderTextColor={Colors.textMuted}
            clearButtonMode="while-editing"
            autoCorrect={false}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')} style={styles.clearBtn}>
              <Text style={styles.clearBtnText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
        {/* Tag filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagsRow}
        >
          <TouchableOpacity
            style={[styles.tagChip, !activeTag && styles.tagChipActive]}
            onPress={() => setActiveTag(null)}
            activeOpacity={0.7}
          >
            <Text style={[styles.tagText, !activeTag && styles.tagTextActive]}>All</Text>
          </TouchableOpacity>
          {ALL_TAGS.map(tag => (
            <TouchableOpacity
              key={tag}
              style={[styles.tagChip, activeTag === tag && styles.tagChipActive]}
              onPress={() => setActiveTag(prev => prev === tag ? null : tag)}
              activeOpacity={0.7}
            >
              <Text style={[styles.tagText, activeTag === tag && styles.tagTextActive]}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>

      {filtered.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>🔭</Text>
          <Text style={styles.emptyText}>No terms match "{search}"</Text>
          <TouchableOpacity onPress={() => { setSearch(''); setActiveTag(null); }}>
            <Text style={styles.emptyReset}>Reset filters</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={item => item.term}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <View style={[styles.sectionDot, { backgroundColor: MODULE_COLORS[section.moduleNum] }]} />
              <Text style={[styles.sectionTitle, { color: MODULE_COLORS[section.moduleNum] }]}>
                {section.title}
              </Text>
            </View>
          )}
          renderItem={({ item }) => {
            const isOpen = expandedTerm === item.term;
            return (
              <TouchableOpacity
                style={[styles.termCard, isOpen && styles.termCardOpen]}
                onPress={() => setExpandedTerm(prev => prev === item.term ? null : item.term)}
                activeOpacity={0.75}
              >
                <View style={styles.termRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.termText}>{item.term}</Text>
                    {item.tag && (
                      <View style={styles.termTagPill}>
                        <Text style={styles.termTagText}>{item.tag}</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.termChevron}>{isOpen ? '▲' : '▼'}</Text>
                </View>
                {isOpen && (
                  <Text style={styles.termDef}>{item.definition}</Text>
                )}
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bg },
  topBar: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12 },
  screenTitle: { color: Colors.text, fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  screenSub: { color: Colors.textSub, fontSize: 13, marginTop: 2 },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    marginHorizontal: 20,
    paddingHorizontal: 14,
    marginBottom: 12,
    height: 46,
    gap: 8,
  },
  searchIcon: { fontSize: 16 },
  searchInput: {
    flex: 1,
    color: Colors.text,
    fontSize: 15,
    height: 46,
  },
  clearBtn: { padding: 4 },
  clearBtnText: { color: Colors.textMuted, fontSize: 14 },

  tagsRow: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    gap: 8,
    flexDirection: 'row',
  },
  tagChip: {
    backgroundColor: Colors.bgCard,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tagChipActive: {
    backgroundColor: Colors.electric,
    borderColor: Colors.electric,
  },
  tagText: { color: Colors.textSub, fontSize: 13, fontWeight: '600' },
  tagTextActive: { color: Colors.white },

  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionDot: { width: 8, height: 8, borderRadius: 4 },
  sectionTitle: { fontSize: 13, fontWeight: '800', letterSpacing: 0.5, textTransform: 'uppercase' },

  termCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 14,
  },
  termCardOpen: { borderColor: Colors.electric + '80', backgroundColor: '#4F8EF710' },
  termRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  termText: { color: Colors.text, fontSize: 15, fontWeight: '700', marginBottom: 4 },
  termTagPill: {
    backgroundColor: Colors.bgSurface,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  termTagText: { color: Colors.textMuted, fontSize: 11, fontWeight: '600' },
  termChevron: { color: Colors.textMuted, fontSize: 10, marginTop: 4 },
  termDef: {
    color: Colors.textSub,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 60,
  },
  emptyEmoji: { fontSize: 48 },
  emptyText: { color: Colors.textSub, fontSize: 16, fontWeight: '600' },
  emptyReset: { color: Colors.electric, fontSize: 14, fontWeight: '700' },
});
