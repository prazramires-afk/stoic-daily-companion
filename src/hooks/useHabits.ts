import { useCallback, useMemo } from 'react';
import { DailyProgress, DailyHabitStatus, StreakData, VirtueStats, Virtue } from '@/types/habits';
import { defaultHabits } from '@/data/habits';
import { useLocalStorage, getTodayString } from './useLocalStorage';

const PROGRESS_KEY = 'stoic_daily_progress';
const STREAK_KEY = 'stoic_streak_data';

export function useHabits() {
  const [progressHistory, setProgressHistory] = useLocalStorage<Record<string, DailyProgress>>(
    PROGRESS_KEY,
    {}
  );
  
  const [streakData, setStreakData] = useLocalStorage<StreakData>(STREAK_KEY, {
    currentStreak: 0,
    bestStreak: 0,
    lastCompletedDate: null,
  });

  const today = getTodayString();

  // Get or initialize today's progress
  const todayProgress = useMemo((): DailyProgress => {
    if (progressHistory[today]) {
      return progressHistory[today];
    }
    return {
      date: today,
      habits: defaultHabits.map((h) => ({
        habitId: h.id,
        completed: false,
      })),
      allCompleted: false,
    };
  }, [progressHistory, today]);

  // Toggle a habit's completion status
  const toggleHabit = useCallback((habitId: string) => {
    setProgressHistory((prev) => {
      const currentProgress = prev[today] || {
        date: today,
        habits: defaultHabits.map((h) => ({
          habitId: h.id,
          completed: false,
        })),
        allCompleted: false,
      };

      const updatedHabits = currentProgress.habits.map((h) =>
        h.habitId === habitId
          ? {
              ...h,
              completed: !h.completed,
              completedAt: !h.completed ? new Date().toISOString() : undefined,
            }
          : h
      );

      const allCompleted = updatedHabits.every((h) => h.completed);

      // Update streak if all completed
      if (allCompleted && !currentProgress.allCompleted) {
        updateStreak(today);
      }

      return {
        ...prev,
        [today]: {
          ...currentProgress,
          habits: updatedHabits,
          allCompleted,
        },
      };
    });
  }, [today, setProgressHistory]);

  // Update streak data
  const updateStreak = useCallback((completedDate: string) => {
    setStreakData((prev) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split('T')[0];

      let newStreak = 1;
      
      if (prev.lastCompletedDate === yesterdayString) {
        newStreak = prev.currentStreak + 1;
      } else if (prev.lastCompletedDate === completedDate) {
        // Already counted today
        return prev;
      }

      return {
        currentStreak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak),
        lastCompletedDate: completedDate,
      };
    });
  }, [setStreakData]);

  // Calculate completion percentage for today
  const completionPercentage = useMemo(() => {
    const completed = todayProgress.habits.filter((h) => h.completed).length;
    return Math.round((completed / todayProgress.habits.length) * 100);
  }, [todayProgress]);

  // Get habit status by ID
  const getHabitStatus = useCallback(
    (habitId: string): DailyHabitStatus | undefined => {
      return todayProgress.habits.find((h) => h.habitId === habitId);
    },
    [todayProgress]
  );

  // Calculate virtue stats from last 7 days
  const virtueStats = useMemo((): VirtueStats => {
    const stats: VirtueStats = { wisdom: 0, courage: 0, justice: 0, temperance: 0 };
    const last7Days: string[] = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      last7Days.push(date.toISOString().split('T')[0]);
    }

    let totalPossible = 0;

    last7Days.forEach((day) => {
      const progress = progressHistory[day];
      if (progress) {
        progress.habits.forEach((h) => {
          const habit = defaultHabits.find((dh) => dh.id === h.habitId);
          if (habit && h.completed) {
            stats[habit.virtue]++;
          }
        });
        totalPossible += defaultHabits.length;
      }
    });

    // Normalize to percentages
    const virtueCount: Record<Virtue, number> = { wisdom: 0, courage: 0, justice: 0, temperance: 0 };
    defaultHabits.forEach((h) => {
      virtueCount[h.virtue]++;
    });

    if (totalPossible > 0) {
      const maxPerVirtue = last7Days.filter(d => progressHistory[d]).length;
      (Object.keys(stats) as Virtue[]).forEach((virtue) => {
        const possible = virtueCount[virtue] * maxPerVirtue;
        stats[virtue] = possible > 0 ? Math.round((stats[virtue] / possible) * 100) : 0;
      });
    }

    return stats;
  }, [progressHistory]);

  // Get most missed habit from last 7 days
  const getMostMissedHabit = useCallback((): string | null => {
    const missedCount: Record<string, number> = {};
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split('T')[0];
      const progress = progressHistory[dateString];
      
      if (progress) {
        progress.habits.forEach((h) => {
          if (!h.completed) {
            missedCount[h.habitId] = (missedCount[h.habitId] || 0) + 1;
          }
        });
      }
    }

    const entries = Object.entries(missedCount);
    if (entries.length === 0) return null;

    const [mostMissedId] = entries.reduce((a, b) => (a[1] > b[1] ? a : b));
    const habit = defaultHabits.find((h) => h.id === mostMissedId);
    return habit?.title || null;
  }, [progressHistory]);

  // Get strongest virtue from last 7 days
  const getStrongestVirtue = useCallback((): Virtue | null => {
    const entries = Object.entries(virtueStats) as [Virtue, number][];
    if (entries.length === 0) return null;
    
    const [strongest] = entries.reduce((a, b) => (a[1] > b[1] ? a : b));
    return virtueStats[strongest] > 0 ? strongest : null;
  }, [virtueStats]);

  return {
    habits: defaultHabits,
    todayProgress,
    toggleHabit,
    getHabitStatus,
    completionPercentage,
    streakData,
    virtueStats,
    getMostMissedHabit,
    getStrongestVirtue,
    progressHistory,
  };
}
