import { useState, useMemo, useEffect } from 'react';
import { Sun, Moon, Filter } from 'lucide-react';
import { ProgressRing } from '@/components/ProgressRing';
import { HabitCard } from '@/components/HabitCard';
import { MementoMoriModal } from '@/components/MementoMoriModal';
import { useHabits } from '@/hooks/useHabits';
import { useSettings } from '@/hooks/useSettings';
import { getDailyQuote } from '@/data/quotes';
import { formatDate, getTimeOfDay } from '@/hooks/useLocalStorage';
import { cn } from '@/lib/utils';

export function TodayScreen() {
  const {
    habits,
    todayProgress,
    toggleHabit,
    getHabitStatus,
    completionPercentage,
  } = useHabits();

  const { settings, shouldShowMementoMori, dismissMementoMori } = useSettings();

  const [showMementoMori, setShowMementoMori] = useState(false);
  const [filterControlOnly, setFilterControlOnly] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const timeOfDay = getTimeOfDay();
  const todayDate = new Date();
  const dailyQuote = getDailyQuote(todayDate);

  // Check memento mori on mount
  useEffect(() => {
    if (shouldShowMementoMori()) {
      setShowMementoMori(true);
    }
  }, [shouldShowMementoMori]);

  // Celebration effect when all completed
  useEffect(() => {
    if (todayProgress.allCompleted && !showCelebration) {
      setShowCelebration(true);
      // Trigger haptic if supported
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
      // Reset after animation
      setTimeout(() => setShowCelebration(false), 1500);
    }
  }, [todayProgress.allCompleted, showCelebration]);

  const handleDismissMementoMori = () => {
    setShowMementoMori(false);
    dismissMementoMori();
  };

  // Filter habits based on control type
  const filteredHabits = useMemo(() => {
    if (!filterControlOnly) return habits;
    return habits.filter((h) => h.controlType === 'within');
  }, [habits, filterControlOnly]);

  return (
    <div className="screen-container">
      {/* Memento Mori Modal */}
      {showMementoMori && (
        <MementoMoriModal onDismiss={handleDismissMementoMori} />
      )}

      {/* Header */}
      <header className="mb-6">
        <p className="text-secondary text-muted-foreground">
          {formatDate(todayDate.toISOString().split('T')[0])}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {timeOfDay === 'morning' ? (
            <Sun className="w-5 h-5 text-stoic-olive" />
          ) : (
            <Moon className="w-5 h-5 text-stoic-olive" />
          )}
          <h1 className="text-screen-title text-foreground">
            {timeOfDay === 'morning'
              ? 'Prepare your mind for the day'
              : 'Review your actions today'}
          </h1>
        </div>
      </header>

      {/* Daily Quote */}
      {settings.showDailyQuote && (
        <div className="bg-card rounded-2xl p-5 border border-border/50 mb-6 animate-fade-in">
          <blockquote className="font-quote text-quote text-foreground/90 leading-relaxed">
            "{dailyQuote.text}"
          </blockquote>
          <cite className="block mt-3 text-secondary text-muted-foreground not-italic">
            — {dailyQuote.author}
          </cite>
        </div>
      )}

      {/* Progress Ring */}
      <div
        className={cn(
          'flex justify-center mb-6',
          showCelebration && 'celebrate-glow rounded-full'
        )}
      >
        <ProgressRing percentage={completionPercentage} />
      </div>

      {/* Dichotomy Filter */}
      <button
        onClick={() => setFilterControlOnly(!filterControlOnly)}
        className={cn(
          'flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-secondary transition-colors',
          filterControlOnly
            ? 'bg-primary text-primary-foreground'
            : 'bg-card border border-border/50 text-muted-foreground hover:text-foreground'
        )}
      >
        <Filter className="w-4 h-4" />
        <span>Show only what I control</span>
      </button>

      {/* Habits List */}
      <div className="space-y-3">
        {filteredHabits.map((habit) => {
          const status = getHabitStatus(habit.id);
          return (
            <HabitCard
              key={habit.id}
              habit={habit}
              isCompleted={status?.completed || false}
              onToggle={() => toggleHabit(habit.id)}
            />
          );
        })}
      </div>

      {/* Completion message */}
      {todayProgress.allCompleted && (
        <div className="mt-6 text-center animate-fade-in">
          <p className="font-quote text-lg text-stoic-moss">
            Well done. You have lived today with virtue.
          </p>
        </div>
      )}
    </div>
  );
}
