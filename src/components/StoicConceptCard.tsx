import { ChevronRight, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StoicConceptCardProps {
  title: string;
  summary: string;
  isLocked: boolean;
  daysRequired?: number;
  onClick: () => void;
}

export function StoicConceptCard({ 
  title, 
  summary, 
  isLocked, 
  daysRequired,
  onClick 
}: StoicConceptCardProps) {
  return (
    <button
      onClick={isLocked ? undefined : onClick}
      disabled={isLocked}
      className={cn(
        "w-full text-left bg-card rounded-2xl p-5 border border-border/50 transition-colors",
        isLocked 
          ? "opacity-75 cursor-default" 
          : "hover:border-border"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {isLocked && (
              <Lock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
            <h3 className={cn(
              "text-habit-title font-semibold",
              isLocked ? "text-muted-foreground" : "text-foreground"
            )}>
              {title}
            </h3>
          </div>
          {isLocked ? (
            <p className="text-secondary text-muted-foreground/70 italic">
              Unlocks after {daysRequired} days of consistent practice
            </p>
          ) : (
            <p className="text-secondary text-muted-foreground line-clamp-2">
              {summary}
            </p>
          )}
        </div>
        {!isLocked && (
          <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
        )}
      </div>
    </button>
  );
}

interface StoicConceptDetailProps {
  title: string;
  content: string;
  quote: string;
  quoteAuthor: string;
  onClose: () => void;
}

export function StoicConceptDetail({
  title,
  content,
  quote,
  quoteAuthor,
  onClose,
}: StoicConceptDetailProps) {
  return (
    <div className="animate-fade-in">
      <button
        onClick={onClose}
        className="flex items-center gap-1 text-secondary text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
        <span>Back to wisdom</span>
      </button>

      <h2 className="text-screen-title text-foreground mb-4">{title}</h2>

      <div className="prose prose-stone dark:prose-invert max-w-none">
        {content.split('\n\n').map((paragraph, i) => (
          <p key={i} className="text-body text-foreground/90 mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border/50">
        <blockquote className="font-quote text-xl italic text-foreground/80 leading-relaxed">
          "{quote}"
        </blockquote>
        <cite className="block mt-3 text-secondary text-muted-foreground not-italic">
          — {quoteAuthor}
        </cite>
      </div>
    </div>
  );
}
