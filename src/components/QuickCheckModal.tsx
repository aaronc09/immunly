import React, { useState } from 'react';
import {
  Modal, View, Text, TouchableOpacity, StyleSheet, Animated,
} from 'react-native';
import { QuickCheck } from '../types';
import { Colors } from '../theme/colors';

interface Props {
  visible: boolean;
  quickCheck: QuickCheck;
  onDismiss: () => void;
}

export default function QuickCheckModal({ visible, quickCheck, onDismiss }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleOption = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  const handleClose = () => {
    setSelected(null);
    setRevealed(false);
    onDismiss();
  };

  const correct = selected === quickCheck.correctIndex;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={handleClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>⚡  Quick Check</Text>
          </View>

          <Text style={styles.question}>{quickCheck.question}</Text>

          {/* Options */}
          <View style={styles.options}>
            {quickCheck.options.map((opt, idx) => {
              let bg = styles.optionDefault;
              let textStyle = styles.optionTextDefault;
              if (revealed) {
                if (idx === quickCheck.correctIndex) {
                  bg = styles.optionCorrect;
                  textStyle = styles.optionTextCorrect;
                } else if (idx === selected) {
                  bg = styles.optionWrong;
                  textStyle = styles.optionTextWrong;
                }
              } else if (idx === selected) {
                bg = styles.optionSelected;
              }
              return (
                <TouchableOpacity
                  key={idx}
                  style={[styles.option, bg]}
                  onPress={() => handleOption(idx)}
                  activeOpacity={0.75}
                >
                  <Text style={[styles.optionText, textStyle]}>
                    {String.fromCharCode(65 + idx)}.  {opt}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Explanation */}
          {revealed && (
            <View style={[styles.explanation, correct ? styles.explanationCorrect : styles.explanationWrong]}>
              <Text style={styles.resultEmoji}>{correct ? '✅' : '❌'}</Text>
              <Text style={styles.explanationText}>{quickCheck.explanation}</Text>
            </View>
          )}

          {/* Continue button */}
          {revealed && (
            <TouchableOpacity style={styles.continueBtn} onPress={handleClose} activeOpacity={0.8}>
              <Text style={styles.continueBtnText}>Continue Lesson →</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: Colors.bgElevated,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  badge: {
    backgroundColor: '#4F8EF720',
    borderWidth: 1,
    borderColor: Colors.electric,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 14,
  },
  badgeText: {
    color: Colors.electric,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  question: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 18,
  },
  options: { gap: 10 },
  option: {
    borderRadius: 12,
    padding: 14,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  optionDefault: { backgroundColor: Colors.bgSurface },
  optionSelected: { backgroundColor: '#4F8EF720', borderColor: Colors.electric },
  optionCorrect: { backgroundColor: Colors.successBg, borderColor: Colors.success },
  optionWrong: { backgroundColor: Colors.errorBg, borderColor: Colors.error },
  optionText: { fontSize: 14, lineHeight: 20 },
  optionTextDefault: { color: Colors.text },
  optionTextCorrect: { color: Colors.success, fontWeight: '600' },
  optionTextWrong: { color: Colors.error, fontWeight: '600' },
  explanation: {
    marginTop: 16,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
  },
  explanationCorrect: { backgroundColor: Colors.successBg, borderColor: Colors.success },
  explanationWrong: { backgroundColor: Colors.errorBg, borderColor: Colors.error },
  resultEmoji: { fontSize: 20 },
  explanationText: { color: Colors.text, fontSize: 14, lineHeight: 20, flex: 1 },
  continueBtn: {
    marginTop: 16,
    backgroundColor: Colors.electric,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  continueBtnText: { color: Colors.white, fontSize: 15, fontWeight: '700' },
});
