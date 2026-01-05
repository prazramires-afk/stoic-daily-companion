import { useState } from 'react';
import { Download, BookOpen, Lightbulb } from 'lucide-react';
import { JournalPrompt, PastJournalEntry, LessonCard } from '@/components/JournalPrompt';
import { useJournal } from '@/hooks/useJournal';

type Tab = 'today' | 'past' | 'lessons';

export function JournalScreen() {
  const { todayEntry, updateEntry, pastEntries, allLessons, exportJournal } = useJournal();
  const [activeTab, setActiveTab] = useState<Tab>('today');

  return (
    <div className="screen-container">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-screen-title text-foreground">Reflection Journal</h1>
        <button
          onClick={exportJournal}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Export journal"
        >
          <Download className="w-5 h-5" />
        </button>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('today')}
          className={`flex-1 py-2 px-3 rounded-xl text-secondary font-medium transition-colors ${
            activeTab === 'today'
              ? 'bg-primary text-primary-foreground'
              : 'bg-card border border-border/50 text-muted-foreground'
          }`}
        >
          <BookOpen className="w-4 h-4 inline mr-1.5" />
          Today
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`flex-1 py-2 px-3 rounded-xl text-secondary font-medium transition-colors ${
            activeTab === 'past'
              ? 'bg-primary text-primary-foreground'
              : 'bg-card border border-border/50 text-muted-foreground'
          }`}
        >
          Past
        </button>
        <button
          onClick={() => setActiveTab('lessons')}
          className={`flex-1 py-2 px-3 rounded-xl text-secondary font-medium transition-colors ${
            activeTab === 'lessons'
              ? 'bg-primary text-primary-foreground'
              : 'bg-card border border-border/50 text-muted-foreground'
          }`}
        >
          <Lightbulb className="w-4 h-4 inline mr-1.5" />
          Lessons
        </button>
      </div>

      {/* Today's Entry */}
      {activeTab === 'today' && (
        <div className="space-y-4 animate-fade-in">
          <JournalPrompt
            label="What did I do well today?"
            placeholder="Reflect on your virtuous actions..."
            value={todayEntry.didWell}
            onChange={(value) => updateEntry('didWell', value)}
          />
          <JournalPrompt
            label="What can I improve tomorrow?"
            placeholder="Consider where you fell short..."
            value={todayEntry.canImprove}
            onChange={(value) => updateEntry('canImprove', value)}
          />
          <JournalPrompt
            label="What did today teach you?"
            placeholder="Save a lesson for your future self..."
            value={todayEntry.lessonLearned}
            onChange={(value) => updateEntry('lessonLearned', value)}
          />
          <p className="text-secondary text-muted-foreground text-center">
            Auto-saved as you type
          </p>
        </div>
      )}

      {/* Past Entries */}
      {activeTab === 'past' && (
        <div className="space-y-4 animate-fade-in">
          {pastEntries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No past entries yet.</p>
              <p className="text-secondary text-muted-foreground mt-1">
                Your reflections will appear here.
              </p>
            </div>
          ) : (
            pastEntries.map((entry) => (
              <PastJournalEntry
                key={entry.date}
                date={entry.date}
                didWell={entry.didWell}
                canImprove={entry.canImprove}
                lessonLearned={entry.lessonLearned}
              />
            ))
          )}
        </div>
      )}

      {/* Lessons */}
      {activeTab === 'lessons' && (
        <div className="space-y-4 animate-fade-in">
          {allLessons.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No lessons saved yet.</p>
              <p className="text-secondary text-muted-foreground mt-1">
                Your daily wisdom will appear here.
              </p>
            </div>
          ) : (
            allLessons.map((lesson) => (
              <LessonCard
                key={lesson.date}
                date={lesson.date}
                lesson={lesson.lesson}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
