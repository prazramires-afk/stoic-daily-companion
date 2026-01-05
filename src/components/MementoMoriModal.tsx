import { X } from 'lucide-react';

interface MementoMoriModalProps {
  onDismiss: () => void;
}

export function MementoMoriModal({ onDismiss }: MementoMoriModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm bg-card rounded-3xl p-8 text-center shadow-xl border border-border/50">
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mb-6">
          <span className="text-5xl">💀</span>
        </div>
        
        <h2 className="font-quote text-2xl font-medium text-foreground mb-4">
          Memento Mori
        </h2>
        
        <p className="text-body text-muted-foreground leading-relaxed mb-6">
          Remember that you will die. This is not meant to frighten, but to clarify—to remind you that your time is limited and precious.
        </p>
        
        <blockquote className="font-quote text-lg italic text-foreground/80 mb-4">
          "You could leave life right now. Let that determine what you do and say and think."
        </blockquote>
        
        <cite className="text-secondary text-muted-foreground">
          — Marcus Aurelius
        </cite>
        
        <button
          onClick={onDismiss}
          className="mt-8 w-full py-3 px-6 bg-primary text-primary-foreground rounded-xl font-medium text-base hover:bg-primary/90 transition-colors"
        >
          I understand
        </button>
      </div>
    </div>
  );
}
