import { useState, useEffect } from 'react';
import { StoicConceptCard, StoicConceptDetail } from '@/components/StoicConceptCard';
import { stoicConcepts } from '@/data/quotes';
import { useWisdomUnlock } from '@/hooks/useWisdomUnlock';
import { useHabits } from '@/hooks/useHabits';
import { X } from 'lucide-react';

export function WisdomScreen() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [showUnlockMessage, setShowUnlockMessage] = useState(false);
  
  const { streakData } = useHabits();
  const { 
    isUnlocked, 
    getUnlockRequirement, 
    newlyUnlockedId,
    totalUnlocked,
    totalWisdom 
  } = useWisdomUnlock(streakData.bestStreak);

  // Show unlock message when new wisdom is unlocked
  useEffect(() => {
    if (newlyUnlockedId) {
      setShowUnlockMessage(true);
      // Optional haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }
    }
  }, [newlyUnlockedId]);

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
      {/* Unlock notification */}
      {showUnlockMessage && (
        <div className="fixed inset-x-4 top-4 z-50 animate-fade-in">
          <div className="max-w-[430px] mx-auto bg-card rounded-2xl p-4 border border-stoic-sage/30 shadow-lg flex items-center justify-between gap-3">
            <p className="font-quote text-base text-foreground/90 italic">
              A new Stoic teaching has been revealed.
            </p>
            <button
              onClick={() => setShowUnlockMessage(false)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-screen-title text-foreground">Stoic Wisdom</h1>
        <p className="text-secondary text-muted-foreground mt-1">
          Wisdom reveals itself through steady practice
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          {totalUnlocked} of {totalWisdom} teachings unlocked
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
        {stoicConcepts.map((concept) => {
          const unlocked = isUnlocked(concept.id);
          return (
            <StoicConceptCard
              key={concept.id}
              title={concept.title}
              summary={concept.summary}
              isLocked={!unlocked}
              daysRequired={getUnlockRequirement(concept.unlockAtWeeks)}
              onClick={() => setSelectedConcept(concept.id)}
            />
          );
        })}
      </div>

      {/* Footer wisdom */}
      <div className="mt-8 text-center">
        <p className="text-secondary text-muted-foreground">
          Knowledge without practice is incomplete.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Complete all daily habits for 7 days to unlock each teaching.
        </p>
      </div>
    </div>
  );
}
