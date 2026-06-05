// ─── Section types for interactive lesson content ────────────────────────────

export interface TextSection {
  type: 'text';
  heading?: string;
  body: string;
}

export interface HighlightSection {
  type: 'highlight';
  label: string;
  text: string;
  color?: string;
}

export interface ComparisonSection {
  type: 'comparison';
  heading: string;
  leftHeader: string;
  rightHeader: string;
  rows: { left: string; right: string }[];
}

export interface TimelineSection {
  type: 'timeline';
  heading: string;
  steps: { label: string; detail: string }[];
}

export interface TermsSection {
  type: 'terms';
  heading: string;
  terms: { term: string; definition: string }[];
}

export interface FlipCardSection {
  type: 'flipcard';
  heading: string;
  instruction: string;
  cards: { front: string; back: string }[];
}

export type LessonSection =
  | TextSection
  | HighlightSection
  | ComparisonSection
  | TimelineSection
  | TermsSection
  | FlipCardSection;

// ─── Quick check (mid-lesson pop-up) ─────────────────────────────────────────

export interface QuickCheck {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// ─── Lesson & Module ─────────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  title: string;
  emoji: string;
  duration: string;
  sections: LessonSection[];
  takeaways?: string[];          // shown at end of lesson
  quickCheck?: QuickCheck;       // mid-lesson modal
  flashcards?: { front: string; back: string }[];  // dedicated flashcard mode
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

// ─── Glossary ─────────────────────────────────────────────────────────────────

export interface GlossaryTerm {
  term: string;
  definition: string;
  module: number;
  tag?: string;
}

// ─── Progress ────────────────────────────────────────────────────────────────

export interface ModuleProgress {
  moduleId: string;
  completedLessonIds: string[];
  quizScore: number | null;
}

export interface UserStats {
  xp: number;
  streak: number;
  lastStudyDate: string | null;   // ISO date string (YYYY-MM-DD)
  currentLessonContext: { moduleId: string; lessonId: string } | null;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export type RootStackParamList = {
  Main: undefined;
  ModuleLessons: { moduleId: string };
  Lesson: { moduleId: string; lessonId: string };
  Quiz: { moduleId: string };
  Flashcards: { moduleId: string; lessonId: string };
};

export type MainTabParamList = {
  Home: undefined;
  Modules: undefined;
  Progress: undefined;
  Glossary: undefined;
  Chat: undefined;
};
