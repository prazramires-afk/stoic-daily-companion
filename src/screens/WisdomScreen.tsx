import { useState } from 'react';
import { StoicConceptCard, StoicConceptDetail } from '@/components/StoicConceptCard';
import { stoicConcepts } from '@/data/quotes';

export function WisdomScreen() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const activeConcept = stoicConcepts.find((c) => c.id === selectedConcept);

  if (activeConcept) {
    return (
      <div className="screen-container">
        <StoicConceptDetail
          title={activeConcept.title}
          content={activeConcept.content}
          quote={activeConcept.quote}
          quoteAuthor={activeConcept.quoteAuthor}
          onClose={() => setSelectedConcept(null)}
        />
      </div>
    );
  }

  return (
    <div className="screen-container">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-screen-title text-foreground">Stoic Wisdom</h1>
        <p className="text-secondary text-muted-foreground mt-1">
          Core teachings from the ancient philosophers
        </p>
      </header>

      {/* Introduction */}
      <div className="bg-card rounded-2xl p-5 border border-border/50 mb-6 animate-fade-in">
        <p className="font-quote text-lg italic text-foreground/80 leading-relaxed text-center">
          "The happiness of your life depends upon the quality of your thoughts."
        </p>
        <cite className="block mt-2 text-secondary text-muted-foreground text-center not-italic">
          — Marcus Aurelius
        </cite>
      </div>

      {/* Concepts */}
      <div className="space-y-3 animate-fade-in">
        {stoicConcepts.map((concept) => (
          <StoicConceptCard
            key={concept.id}
            title={concept.title}
            summary={concept.summary}
            onClick={() => setSelectedConcept(concept.id)}
          />
        ))}
      </div>

      {/* Footer wisdom */}
      <div className="mt-8 text-center">
        <p className="text-secondary text-muted-foreground">
          Study these principles. Apply them daily.
        </p>
      </div>
    </div>
  );
}
