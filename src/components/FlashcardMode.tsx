import React, { useState, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions,
  ScrollView,
} from 'react-native';
import { Colors } from '../theme/colors';

const { width: SCREEN_W } = Dimensions.get('window');

interface Card {
  front: string;
  back: string;
}

interface Props {
  cards: Card[];
  accentColor?: string;
  onComplete: () => void;
}

export default function FlashcardMode({ cards, accentColor = Colors.electric, onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ratings, setRatings] = useState<Record<number, 'got-it' | 'review'>>({});
  const flipAnim = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backInterpolate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });

  const flip = () => {
    Animated.spring(flipAnim, {
      toValue: flipped ? 0 : 1,
      friction: 6,
      tension: 80,
      useNativeDriver: true,
    }).start();
    setFlipped(f => !f);
  };

  const rate = (r: 'got-it' | 'review') => {
    setRatings(prev => ({ ...prev, [index]: r }));
    if (index < cards.length - 1) {
      // reset flip then advance
      Animated.timing(flipAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
        setFlipped(false);
        setIndex(i => i + 1);
      });
    } else {
      // all done
      Animated.timing(flipAnim, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
        setFlipped(false);
        onComplete();
      });
    }
  };

  const card = cards[index];
  const gotItCount = Object.values(ratings).filter(r => r === 'got-it').length;

  const frontStyle = { transform: [{ rotateY: frontInterpolate }] };
  const backStyle = { transform: [{ rotateY: backInterpolate }] };

  return (
    <View style={styles.container}>
      {/* Progress header */}
      <View style={styles.header}>
        <Text style={styles.counter}>{index + 1} / {cards.length}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${((index) / cards.length) * 100}%`, backgroundColor: accentColor }]} />
        </View>
        <Text style={styles.gotIt}>✓ {gotItCount}</Text>
      </View>

      {/* Card */}
      <TouchableOpacity activeOpacity={1} onPress={flip} style={styles.cardWrapper}>
        {/* Front */}
        <Animated.View style={[styles.card, frontStyle, { borderColor: accentColor + '60' }]}>
          <Text style={[styles.sideLabel, { color: accentColor }]}>CONCEPT</Text>
          <Text style={styles.cardText}>{card.front}</Text>
          <Text style={styles.tapHint}>Tap to reveal →</Text>
        </Animated.View>
        {/* Back */}
        <Animated.View style={[styles.card, styles.cardBack, backStyle, { borderColor: accentColor + '60' }]}>
          <Text style={[styles.sideLabel, { color: Colors.success }]}>ANSWER</Text>
          <Text style={styles.cardText}>{card.back}</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Rating buttons (only show when flipped) */}
      {flipped && (
        <View style={styles.ratingRow}>
          <TouchableOpacity
            style={[styles.ratingBtn, styles.reviewBtn]}
            onPress={() => rate('review')}
            activeOpacity={0.8}
          >
            <Text style={styles.ratingEmoji}>🔄</Text>
            <Text style={styles.ratingLabel}>Review Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.ratingBtn, styles.gotItBtn]}
            onPress={() => rate('got-it')}
            activeOpacity={0.8}
          >
            <Text style={styles.ratingEmoji}>✓</Text>
            <Text style={styles.ratingLabel}>Got It!</Text>
          </TouchableOpacity>
        </View>
      )}

      {!flipped && (
        <Text style={styles.flipPrompt}>Tap the card to see the answer</Text>
      )}
    </View>
  );
}

const CARD_W = SCREEN_W - 48;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  counter: { color: Colors.textSub, fontSize: 13, fontWeight: '600', minWidth: 42 },
  progressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: Colors.bgSurface,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: { height: 4, borderRadius: 2 },
  gotIt: { color: Colors.success, fontSize: 13, fontWeight: '700', minWidth: 32, textAlign: 'right' },
  cardWrapper: { height: 220, alignSelf: 'center', width: CARD_W },
  card: {
    position: 'absolute',
    width: CARD_W,
    height: 220,
    backgroundColor: Colors.bgElevated,
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    backgroundColor: '#0F2E1A',
  },
  sideLabel: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 14,
    position: 'absolute',
    top: 16,
    left: 20,
  },
  cardText: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 26,
  },
  tapHint: {
    position: 'absolute',
    bottom: 14,
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: '500',
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  ratingBtn: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    gap: 4,
    borderWidth: 1.5,
  },
  reviewBtn: {
    backgroundColor: Colors.warningBg,
    borderColor: Colors.warning,
  },
  gotItBtn: {
    backgroundColor: Colors.successBg,
    borderColor: Colors.success,
  },
  ratingEmoji: { fontSize: 20 },
  ratingLabel: { color: Colors.text, fontSize: 13, fontWeight: '700' },
  flipPrompt: {
    textAlign: 'center',
    color: Colors.textMuted,
    fontSize: 13,
    marginTop: 24,
  },
});
