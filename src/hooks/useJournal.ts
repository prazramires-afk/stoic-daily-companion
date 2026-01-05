import { useCallback, useMemo } from 'react';
import { JournalEntry } from '@/types/habits';
import { useLocalStorage, getTodayString } from './useLocalStorage';

const JOURNAL_KEY = 'stoic_journal_entries';

export function useJournal() {
  const [entries, setEntries] = useLocalStorage<Record<string, JournalEntry>>(
    JOURNAL_KEY,
    {}
  );

  const today = getTodayString();

  // Get today's entry or create empty one
  const todayEntry = useMemo((): JournalEntry => {
    if (entries[today]) {
      return entries[today];
    }
    return {
      date: today,
      didWell: '',
      canImprove: '',
      lessonLearned: '',
    };
  }, [entries, today]);

  // Update today's entry (auto-save)
  const updateEntry = useCallback(
    (field: keyof Omit<JournalEntry, 'date'>, value: string) => {
      setEntries((prev) => ({
        ...prev,
        [today]: {
          ...prev[today],
          date: today,
          didWell: prev[today]?.didWell || '',
          canImprove: prev[today]?.canImprove || '',
          lessonLearned: prev[today]?.lessonLearned || '',
          [field]: value,
        },
      }));
    },
    [today, setEntries]
  );

  // Get all past entries sorted by date
  const pastEntries = useMemo(() => {
    return Object.values(entries)
      .filter((entry) => entry.date !== today && (entry.didWell || entry.canImprove || entry.lessonLearned))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [entries, today]);

  // Get all lessons learned
  const allLessons = useMemo(() => {
    return Object.values(entries)
      .filter((entry) => entry.lessonLearned)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((entry) => ({
        date: entry.date,
        lesson: entry.lessonLearned,
      }));
  }, [entries]);

  // Export journal as text
  const exportJournal = useCallback(() => {
    const sortedEntries = Object.values(entries)
      .filter((e) => e.didWell || e.canImprove || e.lessonLearned)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    let text = '# Stoic Daily Journal\n\n';

    sortedEntries.forEach((entry) => {
      text += `## ${entry.date}\n\n`;
      if (entry.didWell) {
        text += `### What I did well\n${entry.didWell}\n\n`;
      }
      if (entry.canImprove) {
        text += `### What I can improve\n${entry.canImprove}\n\n`;
      }
      if (entry.lessonLearned) {
        text += `### Lesson learned\n${entry.lessonLearned}\n\n`;
      }
      text += '---\n\n';
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stoic-journal-${today}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [entries, today]);

  return {
    todayEntry,
    updateEntry,
    pastEntries,
    allLessons,
    exportJournal,
  };
}
