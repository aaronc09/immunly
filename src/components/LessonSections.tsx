import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ScrollView,
  LayoutAnimation, UIManager, Platform,
} from 'react-native';
import {
  LessonSection, TextSection, HighlightSection, ComparisonSection,
  TimelineSection, TermsSection, FlipCardSection,
} from '../types';
import { Colors } from '../theme/colors';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ── Text Block ────────────────────────────────────────────────────────────────
function TextBlock({ section }: { section: TextSection }) {
  return (
    <View style={styles.textBlock}>
      {section.heading && <Text style={styles.heading}>{section.heading}</Text>}
      <Text style={styles.body}>{section.body}</Text>
    </View>
  );
}

// ── Highlight Block ───────────────────────────────────────────────────────────
const NAMED_HIGHLIGHTS: Record<string, { bg: string; border: string; dot: string }> = {
  blue:   { bg: '#1a2d4a', border: '#4F8EF7', dot: '#4F8EF7' },
  green:  { bg: '#0d2e1c', border: '#34D399', dot: '#34D399' },
  amber:  { bg: '#2a1a00', border: '#FBBF24', dot: '#FBBF24' },
  red:    { bg: '#2e0d0d', border: '#F87171', dot: '#F87171' },
  purple: { bg: '#1f1040', border: '#A78BFA', dot: '#A78BFA' },
  cyan:   { bg: '#0a2a30', border: '#22D3EE', dot: '#22D3EE' },
  // Hex values used in module data
  '#2563EB': { bg: '#1a2d4a', border: '#4F8EF7',  dot: '#4F8EF7'  },
  '#1D4ED8': { bg: '#1a2d4a', border: '#4F8EF7',  dot: '#4F8EF7'  },
  '#3B82F6': { bg: '#1a2d4a', border: '#4F8EF7',  dot: '#4F8EF7'  },
  '#059669': { bg: '#0d2e1c', border: '#34D399',  dot: '#34D399'  },
  '#10B981': { bg: '#0d2e1c', border: '#34D399',  dot: '#34D399'  },
  '#047857': { bg: '#0d2e1c', border: '#34D399',  dot: '#34D399'  },
  '#DC2626': { bg: '#2e0d0d', border: '#F87171',  dot: '#F87171'  },
  '#EF4444': { bg: '#2e0d0d', border: '#F87171',  dot: '#F87171'  },
  '#D97706': { bg: '#2a1a00', border: '#FBBF24',  dot: '#FBBF24'  },
  '#F59E0B': { bg: '#2a1a00', border: '#FBBF24',  dot: '#FBBF24'  },
  '#7C3AED': { bg: '#1f1040', border: '#A78BFA',  dot: '#A78BFA'  },
  '#6D28D9': { bg: '#1f1040', border: '#A78BFA',  dot: '#A78BFA'  },
  '#A78BFA': { bg: '#1f1040', border: '#A78BFA',  dot: '#A78BFA'  },
};

function resolveHighlight(color?: string) {
  if (!color) return NAMED_HIGHLIGHTS.blue;
  const found = NAMED_HIGHLIGHTS[color];
  if (found) return found;
  // Unknown hex — use the hex directly, generate dark tinted bg
  return { bg: color + '20', border: color, dot: color };
}

function HighlightBlock({ section }: { section: HighlightSection }) {
  const palette = resolveHighlight(section.color);
  return (
    <View style={[styles.highlightCard, { backgroundColor: palette.bg, borderColor: palette.border }]}>
      <View style={[styles.highlightDot, { backgroundColor: palette.dot }]} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.highlightLabel, { color: palette.dot }]}>{section.label}</Text>
        <Text style={styles.highlightText}>{section.text}</Text>
      </View>
    </View>
  );
}

// ── Comparison Block ──────────────────────────────────────────────────────────
function ComparisonBlock({ section }: { section: ComparisonSection }) {
  return (
    <View style={styles.comparisonCard}>
      <Text style={styles.heading}>{section.heading}</Text>
      {/* Headers */}
      <View style={styles.compRow}>
        <View style={[styles.compCell, styles.compHeaderCell, { backgroundColor: '#1a2d4a' }]}>
          <Text style={[styles.compHeaderText, { color: Colors.electric }]}>{section.leftHeader}</Text>
        </View>
        <View style={[styles.compCell, styles.compHeaderCell, { backgroundColor: '#0d2e1c' }]}>
          <Text style={[styles.compHeaderText, { color: Colors.success }]}>{section.rightHeader}</Text>
        </View>
      </View>
      {/* Rows */}
      {section.rows.map((row, i) => (
        <View key={i} style={[styles.compRow, i % 2 === 1 && styles.compRowAlt]}>
          <View style={styles.compCell}>
            <Text style={styles.compCellText}>{row.left}</Text>
          </View>
          <View style={[styles.compCell, styles.compCellRight]}>
            <Text style={styles.compCellText}>{row.right}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

// ── Timeline Block ────────────────────────────────────────────────────────────
function TimelineBlock({ section }: { section: TimelineSection }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(prev => (prev === i ? null : i));
  };

  return (
    <View style={styles.timelineCard}>
      <Text style={styles.heading}>{section.heading}</Text>
      {section.steps.map((step, i) => {
        const isOpen = expanded === i;
        const isLast = i === section.steps.length - 1;
        return (
          <View key={i} style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View style={styles.timelineCircle}>
                <Text style={styles.timelineNum}>{i + 1}</Text>
              </View>
              {!isLast && <View style={styles.timelineLine} />}
            </View>
            <TouchableOpacity
              style={styles.timelineContent}
              onPress={() => toggle(i)}
              activeOpacity={0.7}
            >
              <View style={styles.timelineHeader}>
                <Text style={styles.timelineLabel}>{step.label}</Text>
                <Text style={styles.timelineChevron}>{isOpen ? '▲' : '▼'}</Text>
              </View>
              {isOpen && <Text style={styles.timelineDetail}>{step.detail}</Text>}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

// ── Terms Block ───────────────────────────────────────────────────────────────
function TermsBlock({ section }: { section: TermsSection }) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(prev => (prev === i ? null : i));
  };

  return (
    <View style={styles.termsCard}>
      <Text style={styles.heading}>{section.heading}</Text>
      {section.terms.map((t, i) => (
        <TouchableOpacity key={i} style={styles.termRow} onPress={() => toggle(i)} activeOpacity={0.7}>
          <View style={styles.termHeader}>
            <View style={styles.termDot} />
            <Text style={styles.termTerm}>{t.term}</Text>
            <Text style={styles.termChevron}>{open === i ? '▲' : '▼'}</Text>
          </View>
          {open === i && <Text style={styles.termDef}>{t.definition}</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
}

// ── Flip Card Block ───────────────────────────────────────────────────────────
function FlipCardBlock({ section }: { section: FlipCardSection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = section.cards[currentIndex];

  const next = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIndex(i => Math.min(i + 1, section.cards.length - 1)), 50);
  };
  const prev = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIndex(i => Math.max(i - 1, 0)), 50);
  };

  return (
    <View style={styles.flipCard}>
      <Text style={styles.heading}>{section.heading}</Text>
      <Text style={styles.flipInstruction}>{section.instruction}</Text>
      <TouchableOpacity
        style={[styles.flipFace, flipped && styles.flipFaceBack]}
        onPress={() => setFlipped(f => !f)}
        activeOpacity={0.85}
      >
        <Text style={styles.flipFaceLabel}>{flipped ? 'BACK' : 'FRONT'}</Text>
        <Text style={styles.flipFaceText}>{flipped ? card.back : card.front}</Text>
        <Text style={styles.flipHint}>{flipped ? 'Tap to flip back' : 'Tap to reveal'}</Text>
      </TouchableOpacity>
      <View style={styles.flipNav}>
        <TouchableOpacity
          onPress={prev}
          disabled={currentIndex === 0}
          style={[styles.flipNavBtn, currentIndex === 0 && styles.flipNavBtnDisabled]}
        >
          <Text style={styles.flipNavText}>← Prev</Text>
        </TouchableOpacity>
        <View style={styles.flipDots}>
          {section.cards.map((_, i) => (
            <View key={i} style={[styles.flipDot, i === currentIndex && styles.flipDotActive]} />
          ))}
        </View>
        <TouchableOpacity
          onPress={next}
          disabled={currentIndex === section.cards.length - 1}
          style={[styles.flipNavBtn, currentIndex === section.cards.length - 1 && styles.flipNavBtnDisabled]}
        >
          <Text style={styles.flipNavText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ── Renderer ─────────────────────────────────────────────────────────────────
export default function LessonSections({ sections }: { sections: LessonSection[] }) {
  return (
    <View style={styles.container}>
      {sections.map((s, i) => {
        switch (s.type) {
          case 'text':       return <TextBlock key={i} section={s} />;
          case 'highlight':  return <HighlightBlock key={i} section={s} />;
          case 'comparison': return <ComparisonBlock key={i} section={s} />;
          case 'timeline':   return <TimelineBlock key={i} section={s} />;
          case 'terms':      return <TermsBlock key={i} section={s} />;
          case 'flipcard':   return <FlipCardBlock key={i} section={s} />;
          default:           return null;
        }
      })}
    </View>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { gap: 16 },

  textBlock: {},
  heading: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
    lineHeight: 24,
  },
  body: {
    color: Colors.textSub,
    fontSize: 15,
    lineHeight: 24,
  },

  highlightCard: {
    borderRadius: 14,
    borderLeftWidth: 4,
    borderWidth: 1,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
  },
  highlightDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
  },
  highlightLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  highlightText: {
    color: Colors.text,
    fontSize: 14,
    lineHeight: 22,
  },

  comparisonCard: {
    borderRadius: 14,
    backgroundColor: Colors.bgCard,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  compRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  compRowAlt: { backgroundColor: '#ffffff06' },
  compCell: {
    flex: 1,
    padding: 12,
  },
  compCellRight: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.border,
  },
  compHeaderCell: { paddingVertical: 10 },
  compHeaderText: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  compCellText: {
    color: Colors.textSub,
    fontSize: 13,
    lineHeight: 20,
  },

  timelineCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
  },
  timelineItem: { flexDirection: 'row', marginBottom: 4 },
  timelineLeft: { alignItems: 'center', width: 32 },
  timelineCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.electric,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineNum: { color: Colors.white, fontSize: 12, fontWeight: '800' },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.border,
    marginVertical: 4,
  },
  timelineContent: { flex: 1, marginLeft: 10, paddingBottom: 12 },
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  timelineLabel: { color: Colors.text, fontSize: 14, fontWeight: '700', flex: 1 },
  timelineChevron: { color: Colors.textMuted, fontSize: 10 },
  timelineDetail: {
    color: Colors.textSub,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
    backgroundColor: Colors.bgSurface,
    borderRadius: 8,
    padding: 10,
  },

  termsCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
  },
  termRow: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingVertical: 10,
  },
  termHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  termDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: Colors.cyan },
  termTerm: { color: Colors.text, fontSize: 14, fontWeight: '700', flex: 1 },
  termChevron: { color: Colors.textMuted, fontSize: 10 },
  termDef: { color: Colors.textSub, fontSize: 13, lineHeight: 20, marginTop: 8, paddingLeft: 16 },

  flipCard: {
    backgroundColor: Colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
  },
  flipInstruction: { color: Colors.textMuted, fontSize: 12, marginBottom: 12, fontStyle: 'italic' },
  flipFace: {
    backgroundColor: Colors.bgSurface,
    borderRadius: 14,
    padding: 24,
    minHeight: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Colors.electric,
    gap: 8,
  },
  flipFaceBack: { backgroundColor: '#0F2E1A', borderColor: Colors.success },
  flipFaceLabel: {
    color: Colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    position: 'absolute',
    top: 10,
    left: 14,
  },
  flipFaceText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
  flipHint: { color: Colors.textMuted, fontSize: 11, position: 'absolute', bottom: 10 },
  flipNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  flipNavBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: Colors.bgSurface,
  },
  flipNavBtnDisabled: { opacity: 0.3 },
  flipNavText: { color: Colors.electric, fontSize: 13, fontWeight: '700' },
  flipDots: { flexDirection: 'row', gap: 6 },
  flipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.bgSurface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  flipDotActive: { backgroundColor: Colors.electric, borderColor: Colors.electric },
});
