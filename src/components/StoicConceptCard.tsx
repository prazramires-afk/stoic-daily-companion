import { ChevronRight } from 'lucide-react';

interface StoicConceptCardProps {
  title: string;
  summary: string;
  onClick: () => void;
}

export function StoicConceptCard({ title, summary, onClick }: StoicConceptCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-card rounded-2xl p-5 border border-border/50 hover:border-border transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-habit-title font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-secondary text-muted-foreground line-clamp-2">
            {summary}
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
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
