import { Virtue } from '@/types/habits';
import { getRandomReflectionQuestion } from '@/data/quotes';
import { useMemo } from 'react';

interface WeeklyReviewCardProps {
  mostMissedHabit: string | null;
  strongestVirtue: Virtue | null;
  onDismiss: () => void;
}

const virtueEmojis: Record<Virtue, string> = {
  wisdom: '🦉',
  courage: '🦁',
  justice: '⚖️',
  temperance: '🧘',
};

const virtueLabels: Record<Virtue, string> = {
  wisdom: 'Wisdom',
  courage: 'Courage',
  justice: 'Justice',
  temperance: 'Temperance',
};

export function WeeklyReviewCard({
  mostMissedHabit,
  strongestVirtue,
  onDismiss,
}: WeeklyReviewCardProps) {
  const reflectionQuestion = useMemo(() => getRandomReflectionQuestion(), []);

  return (
    <div className="bg-card rounded-2xl p-5 border border-primary/30 animate-scale-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-habit-title font-semibold text-foreground">
          Weekly Review
        </h3>
        <button
          onClick={onDismiss}
          className="text-secondary text-muted-foreground hover:text-foreground"
        >
          Dismiss
        </button>
      </div>

      <div className="space-y-4">
        {strongestVirtue && (
          <div className="flex items-start gap-3">
            <span className="text-2xl">{virtueEmojis[strongestVirtue]}</span>
            <div>
              <p className="text-secondary text-muted-foreground">Strongest virtue</p>
              <p className="text-body text-foreground font-medium">
                {virtueLabels[strongestVirtue]}
              </p>
            </div>
          </div>
        )}

        {mostMissedHabit && (
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="text-secondary text-muted-foreground">Needs attention</p>
              <p className="text-body text-foreground font-medium">
                {mostMissedHabit}
              </p>
            </div>
          </div>
        )}

        <div className="pt-3 border-t border-border/50">
          <p className="text-secondary text-muted-foreground mb-1">
            Reflect on this question:
          </p>
          <p className="font-quote text-lg italic text-foreground/80">
            "{reflectionQuestion}"
          </p>
        </div>
      </div>
    </div>
  );
}
