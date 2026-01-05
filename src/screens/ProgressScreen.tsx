import { useState, useMemo } from 'react';
import { StreakDisplay } from '@/components/StreakDisplay';
import { VirtueStats } from '@/components/VirtueStats';
import { WeeklyReviewCard } from '@/components/WeeklyReviewCard';
import { CalendarHeatmap } from '@/components/CalendarHeatmap';
import { useHabits } from '@/hooks/useHabits';
import { useLocalStorage, getWeekNumber } from '@/hooks/useLocalStorage';

export function ProgressScreen() {
  const {
    streakData,
    completionPercentage,
    virtueStats,
    getMostMissedHabit,
    getStrongestVirtue,
    progressHistory,
  } = useHabits();

  const [dismissedWeeks, setDismissedWeeks] = useLocalStorage<string[]>(
    'stoic_dismissed_reviews',
    []
  );

  const [calendarMonth, setCalendarMonth] = useState(() => new Date());

  // Check if we should show weekly review (every 7 days)
  const today = new Date();
  const currentWeek = `${today.getFullYear()}-W${getWeekNumber(today)}`;
  const dayOfWeek = today.getDay(); // 0 = Sunday

  // Show review on Sundays if not dismissed this week
  const showWeeklyReview = useMemo(() => {
    return dayOfWeek === 0 && !dismissedWeeks.includes(currentWeek);
  }, [dayOfWeek, dismissedWeeks, currentWeek]);

  const handleDismissReview = () => {
    setDismissedWeeks((prev) => [...prev, currentWeek]);
  };

  const mostMissedHabit = getMostMissedHabit();
  const strongestVirtue = getStrongestVirtue();

  return (
    <div className="screen-container">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-screen-title text-foreground">Your Progress</h1>
        <p className="text-secondary text-muted-foreground mt-1">
          Track your Stoic discipline over time
        </p>
      </header>

      {/* Streak Display */}
      <div className="mb-6 animate-fade-in">
        <StreakDisplay
          streakData={streakData}
          completionPercentage={completionPercentage}
        />
      </div>

      {/* Calendar Heatmap */}
      <div className="mb-6 animate-fade-in">
        <CalendarHeatmap
          progressHistory={progressHistory}
          month={calendarMonth}
          onMonthChange={setCalendarMonth}
        />
      </div>

      {/* Weekly Review */}
      {showWeeklyReview && (
        <div className="mb-6">
          <WeeklyReviewCard
            mostMissedHabit={mostMissedHabit}
            strongestVirtue={strongestVirtue}
            onDismiss={handleDismissReview}
          />
        </div>
      )}

      {/* Virtue Stats */}
      <div className="animate-fade-in">
        <VirtueStats stats={virtueStats} />
      </div>

      {/* Encouragement */}
      <div className="mt-6 bg-card rounded-2xl p-5 border border-border/50">
        <p className="font-quote text-lg italic text-foreground/80 text-center leading-relaxed">
          {streakData.currentStreak > 0
            ? `"${streakData.currentStreak} days of practice. The obstacle has become the way."`
            : '"Every moment is a fresh beginning. Start now."'}
        </p>
      </div>
    </div>
  );
}
