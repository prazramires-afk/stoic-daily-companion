import { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalendarHeatmapProps {
  progressHistory: Record<string, { allCompleted: boolean; habits: { completed: boolean }[] }>;
  month: Date;
  onMonthChange: (date: Date) => void;
}

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export function CalendarHeatmap({ progressHistory, month, onMonthChange }: CalendarHeatmapProps) {
  const calendarData = useMemo(() => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    
    // Get first day of month and total days
    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);
    const totalDays = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    // Build calendar grid
    const days: { date: string | null; percentage: number; isToday: boolean }[] = [];
    
    // Empty cells before first day
    for (let i = 0; i < startingDay; i++) {
      days.push({ date: null, percentage: 0, isToday: false });
    }
    
    const today = new Date().toISOString().split('T')[0];
    
    // Actual days
    for (let day = 1; day <= totalDays; day++) {
      const dateString = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const progress = progressHistory[dateString];
      
      let percentage = 0;
      if (progress) {
        const completed = progress.habits.filter(h => h.completed).length;
        percentage = Math.round((completed / progress.habits.length) * 100);
      }
      
      days.push({
        date: dateString,
        percentage,
        isToday: dateString === today,
      });
    }
    
    return days;
  }, [progressHistory, month]);

  const handlePrevMonth = () => {
    const newDate = new Date(month.getFullYear(), month.getMonth() - 1, 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(month.getFullYear(), month.getMonth() + 1, 1);
    // Don't go past current month
    const now = new Date();
    if (newDate <= new Date(now.getFullYear(), now.getMonth(), 1)) {
      onMonthChange(newDate);
    }
  };

  const monthLabel = month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const isCurrentMonth = month.getMonth() === new Date().getMonth() && 
                         month.getFullYear() === new Date().getFullYear();

  const getHeatColor = (percentage: number, isToday: boolean) => {
    if (percentage === 0) {
      return isToday ? 'bg-primary/20 ring-2 ring-primary/50' : 'bg-muted/50';
    }
    if (percentage < 50) return 'bg-stoic-sage/30';
    if (percentage < 100) return 'bg-stoic-sage/60';
    return 'bg-stoic-sage';
  };

  return (
    <div className="bg-card rounded-2xl p-5 border border-border/50">
      <h3 className="text-habit-title font-semibold mb-4">Activity</h3>
      
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <span className="text-body font-medium text-foreground">{monthLabel}</span>
        <button
          onClick={handleNextMonth}
          disabled={isCurrentMonth}
          className={cn(
            "p-2 rounded-lg transition-colors",
            isCurrentMonth ? "opacity-30 cursor-not-allowed" : "hover:bg-muted"
          )}
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((day, i) => (
          <div key={i} className="text-center text-xs text-muted-foreground font-medium py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarData.map((day, i) => (
          <div key={i} className="aspect-square flex items-center justify-center">
            {day.date ? (
              <div
                className={cn(
                  "w-full h-full rounded-lg flex items-center justify-center text-xs transition-colors",
                  getHeatColor(day.percentage, day.isToday),
                  day.percentage === 100 && "text-primary-foreground font-medium"
                )}
                title={day.date ? `${day.percentage}% complete` : undefined}
              >
                {parseInt(day.date.split('-')[2])}
              </div>
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-border/50">
        <span className="text-xs text-muted-foreground">Less</span>
        <div className="flex gap-1">
          <div className="w-4 h-4 rounded bg-muted/50" />
          <div className="w-4 h-4 rounded bg-stoic-sage/30" />
          <div className="w-4 h-4 rounded bg-stoic-sage/60" />
          <div className="w-4 h-4 rounded bg-stoic-sage" />
        </div>
        <span className="text-xs text-muted-foreground">More</span>
      </div>
    </div>
  );
}
