export type Virtue = 'wisdom' | 'courage' | 'justice' | 'temperance';

export type ControlType = 'within' | 'outside';

export interface Habit {
  id: string;
  title: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  virtue: Virtue;
  controlType: ControlType;
}

export interface DailyHabitStatus {
  habitId: string;
  completed: boolean;
  completedAt?: string;
}

export interface DailyProgress {
  date: string; // YYYY-MM-DD
  habits: DailyHabitStatus[];
  allCompleted: boolean;
}

export interface JournalEntry {
  date: string; // YYYY-MM-DD
  didWell: string;
  canImprove: string;
  lessonLearned: string;
}

export interface VirtueStats {
  wisdom: number;
  courage: number;
  justice: number;
  temperance: number;
}

export interface StreakData {
  currentStreak: number;
  bestStreak: number;
  lastCompletedDate: string | null;
}

export interface WeeklyReview {
  weekEndDate: string;
  mostMissedHabit: string | null;
  strongestVirtue: Virtue | null;
  reflectionQuestion: string;
  dismissed: boolean;
}

export interface AppSettings {
  darkMode: boolean;
  showDailyQuote: boolean;
  showMementoMori: boolean;
  lastMementoMoriDate: string | null;
}

export interface Quote {
  text: string;
  author: string;
}
