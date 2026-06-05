import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { ModuleProgress, UserStats } from '../types';
import { MODULES } from './modules';

interface ProgressContextType {
  // Module progress
  progress: Record<string, ModuleProgress>;
  markLessonComplete: (moduleId: string, lessonId: string) => void;
  saveQuizScore: (moduleId: string, score: number) => void;
  getModuleProgress: (moduleId: string) => ModuleProgress;

  // Aggregated stats
  totalLessons: number;
  completedLessons: number;
  overallPercent: number;

  // User stats (XP, streak, current lesson)
  stats: UserStats;
  addXP: (amount: number) => void;
  setCurrentLesson: (moduleId: string, lessonId: string) => void;

  // Flashcard progress
  markFlashcardsComplete: (lessonId: string) => void;
  completedFlashcardLessons: Set<string>;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

const TOTAL_LESSONS = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Record<string, ModuleProgress>>({});
  const [stats, setStats] = useState<UserStats>({
    xp: 0,
    streak: 0,
    lastStudyDate: null,
    currentLessonContext: null,
  });
  const [completedFlashcardLessons, setCompletedFlashcardLessons] = useState<Set<string>>(new Set());

  // ── Streak helper ──────────────────────────────────────────────────────────
  const touchStreak = useCallback(() => {
    const today = todayStr();
    setStats(prev => {
      if (prev.lastStudyDate === today) return prev;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const ystStr = yesterday.toISOString().slice(0, 10);
      const newStreak = prev.lastStudyDate === ystStr ? prev.streak + 1 : 1;
      return { ...prev, streak: newStreak, lastStudyDate: today };
    });
  }, []);

  // ── Lesson completion ──────────────────────────────────────────────────────
  const markLessonComplete = useCallback((moduleId: string, lessonId: string) => {
    setProgress(prev => {
      const existing = prev[moduleId] ?? { moduleId, completedLessonIds: [], quizScore: null };
      if (existing.completedLessonIds.includes(lessonId)) return prev;
      return {
        ...prev,
        [moduleId]: {
          ...existing,
          completedLessonIds: [...existing.completedLessonIds, lessonId],
        },
      };
    });
    // Award XP
    setStats(prev => ({ ...prev, xp: prev.xp + 50 }));
    touchStreak();
  }, [touchStreak]);

  // ── Quiz score ─────────────────────────────────────────────────────────────
  const saveQuizScore = useCallback((moduleId: string, score: number) => {
    setProgress(prev => {
      const existing = prev[moduleId] ?? { moduleId, completedLessonIds: [], quizScore: null };
      if (existing.quizScore !== null && score <= existing.quizScore) return prev;
      return { ...prev, [moduleId]: { ...existing, quizScore: score } };
    });
    const xpGained = score >= 100 ? 150 : score >= 75 ? 100 : 30;
    setStats(prev => ({ ...prev, xp: prev.xp + xpGained }));
    touchStreak();
  }, [touchStreak]);

  const getModuleProgress = useCallback((moduleId: string): ModuleProgress =>
    progress[moduleId] ?? { moduleId, completedLessonIds: [], quizScore: null },
    [progress]);

  const addXP = useCallback((amount: number) => {
    setStats(prev => ({ ...prev, xp: prev.xp + amount }));
  }, []);

  const setCurrentLesson = useCallback((moduleId: string, lessonId: string) => {
    setStats(prev => ({ ...prev, currentLessonContext: { moduleId, lessonId } }));
  }, []);

  const markFlashcardsComplete = useCallback((lessonId: string) => {
    setCompletedFlashcardLessons(prev => {
      if (prev.has(lessonId)) return prev;
      const next = new Set(prev);
      next.add(lessonId);
      setStats(s => ({ ...s, xp: s.xp + 30 }));
      return next;
    });
  }, []);

  // ── Derived ───────────────────────────────────────────────────────────────
  const completedLessons = Object.values(progress).reduce(
    (sum, mp) => sum + mp.completedLessonIds.length, 0);
  const overallPercent = TOTAL_LESSONS > 0
    ? Math.round((completedLessons / TOTAL_LESSONS) * 100) : 0;

  return (
    <ProgressContext.Provider value={{
      progress, markLessonComplete, saveQuizScore, getModuleProgress,
      totalLessons: TOTAL_LESSONS, completedLessons, overallPercent,
      stats, addXP, setCurrentLesson,
      markFlashcardsComplete, completedFlashcardLessons,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
