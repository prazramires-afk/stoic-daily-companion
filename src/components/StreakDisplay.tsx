import { Flame, Trophy, Calendar } from 'lucide-react';
import { StreakData } from '@/types/habits';

interface StreakDisplayProps {
  streakData: StreakData;
  completionPercentage: number;
}

export function StreakDisplay({ streakData, completionPercentage }: StreakDisplayProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {/* Today's completion */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 text-center">
        <Calendar className="w-5 h-5 mx-auto text-stoic-olive mb-2" />
        <span className="block text-2xl font-semibold text-foreground">
          {completionPercentage}%
        </span>
        <span className="text-secondary text-muted-foreground">Today</span>
      </div>

      {/* Current streak */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 text-center">
        <Flame className="w-5 h-5 mx-auto text-stoic-earth mb-2" />
        <span className="block text-2xl font-semibold text-foreground">
          {streakData.currentStreak}
        </span>
        <span className="text-secondary text-muted-foreground">Streak</span>
      </div>

      {/* Best streak */}
      <div className="bg-card rounded-2xl p-4 border border-border/50 text-center">
        <Trophy className="w-5 h-5 mx-auto text-stoic-moss mb-2" />
        <span className="block text-2xl font-semibold text-foreground">
          {streakData.bestStreak}
        </span>
        <span className="text-secondary text-muted-foreground">Best</span>
      </div>
    </div>
  );
}
