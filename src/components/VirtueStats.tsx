import { Virtue } from '@/types/habits';
import { cn } from '@/lib/utils';

interface VirtueBarProps {
  virtue: Virtue;
  percentage: number;
}

const virtueConfig: Record<Virtue, { label: string; className: string }> = {
  wisdom: { label: 'Wisdom', className: 'bg-virtue-wisdom' },
  courage: { label: 'Courage', className: 'bg-virtue-courage' },
  justice: { label: 'Justice', className: 'bg-virtue-justice' },
  temperance: { label: 'Temperance', className: 'bg-virtue-temperance' },
};

export function VirtueBar({ virtue, percentage }: VirtueBarProps) {
  const config = virtueConfig[virtue];

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-secondary font-medium">{config.label}</span>
        <span className="text-secondary text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-500 ease-out', config.className)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface VirtueStatsProps {
  stats: Record<Virtue, number>;
}

export function VirtueStats({ stats }: VirtueStatsProps) {
  const virtues: Virtue[] = ['wisdom', 'courage', 'justice', 'temperance'];

  return (
    <div className="bg-card rounded-2xl p-5 border border-border/50">
      <h3 className="text-habit-title font-semibold mb-4">Virtue Balance</h3>
      <p className="text-secondary text-muted-foreground mb-4">
        Your practice over the last 7 days
      </p>
      <div className="space-y-4">
        {virtues.map((virtue) => (
          <VirtueBar key={virtue} virtue={virtue} percentage={stats[virtue]} />
        ))}
      </div>
    </div>
  );
}
