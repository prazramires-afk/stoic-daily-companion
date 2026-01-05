import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Habit } from '@/types/habits';
import { cn } from '@/lib/utils';

interface HabitCardProps {
  habit: Habit;
  isCompleted: boolean;
  onToggle: () => void;
}

const virtueLabels: Record<string, string> = {
  wisdom: 'Wisdom',
  courage: 'Courage',
  justice: 'Justice',
  temperance: 'Temperance',
};

export function HabitCard({ habit, isCompleted, onToggle }: HabitCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        'habit-card animate-fade-in',
        isCompleted && 'completed'
      )}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={cn(
            'flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200',
            isCompleted
              ? 'bg-stoic-sage border-stoic-sage'
              : 'border-border hover:border-primary/50'
          )}
          aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {isCompleted && (
            <Check className="w-4 h-4 text-primary-foreground animate-checkmark" />
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              'text-habit-title text-foreground transition-colors',
              isCompleted && 'text-muted-foreground line-through'
            )}
          >
            {habit.title}
          </h3>
          
          <p className="text-secondary mt-1 line-clamp-2">
            {habit.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span className={cn('virtue-tag', `virtue-${habit.virtue}`)}>
              {virtueLabels[habit.virtue]}
            </span>
            <span
              className={cn(
                'control-tag',
                habit.controlType === 'within' ? 'control-within' : 'control-outside'
              )}
            >
              {habit.controlType === 'within' ? 'Within my control' : 'Outside my control'}
            </span>
          </div>

          {/* Expand button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 mt-3 text-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs">Read wisdom</span>
            {isExpanded ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>

          {/* Expanded quote */}
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
              <blockquote className="font-quote text-base italic text-foreground/80 leading-relaxed">
                "{habit.quote}"
              </blockquote>
              <cite className="block mt-2 text-secondary text-muted-foreground not-italic">
                — {habit.quoteAuthor}
              </cite>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
