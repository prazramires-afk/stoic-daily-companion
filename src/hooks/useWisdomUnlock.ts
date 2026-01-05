import { useMemo, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { stoicConcepts } from '@/data/quotes';

const UNLOCKED_WISDOM_KEY = 'stoic_unlocked_wisdom';
const LAST_UNLOCK_COUNT_KEY = 'stoic_last_unlock_count';

interface WisdomUnlockState {
  unlockedIds: string[];
  newlyUnlockedId: string | null;
}

export function useWisdomUnlock(bestStreak: number) {
  const [permanentlyUnlocked, setPermanentlyUnlocked] = useLocalStorage<string[]>(
    UNLOCKED_WISDOM_KEY,
    []
  );
  
  const [lastUnlockCount, setLastUnlockCount] = useLocalStorage<number>(
    LAST_UNLOCK_COUNT_KEY,
    0
  );

  // Calculate how many wisdom entries should be unlocked based on best streak
  const unlocksEarned = useMemo(() => {
    return Math.floor(bestStreak / 7);
  }, [bestStreak]);

  // Get all wisdom that should be unlocked (by weeks) up to the earned count
  const { unlockedIds, newlyUnlockedId } = useMemo((): WisdomUnlockState => {
    // Sort concepts by unlock requirement
    const sortedConcepts = [...stoicConcepts].sort(
      (a, b) => a.unlockAtWeeks - b.unlockAtWeeks
    );

    // Get IDs that should be unlocked based on current best streak
    const earnedUnlockIds = sortedConcepts
      .filter((c) => c.unlockAtWeeks <= unlocksEarned)
      .map((c) => c.id);

    // Merge with permanently unlocked (to prevent re-locking)
    const allUnlocked = [...new Set([...permanentlyUnlocked, ...earnedUnlockIds])];

    // Check for newly unlocked
    let newId: string | null = null;
    if (unlocksEarned > lastUnlockCount) {
      const newlyEarned = earnedUnlockIds.filter(
        (id) => !permanentlyUnlocked.includes(id)
      );
      if (newlyEarned.length > 0) {
        newId = newlyEarned[newlyEarned.length - 1];
      }
    }

    return {
      unlockedIds: allUnlocked,
      newlyUnlockedId: newId,
    };
  }, [unlocksEarned, permanentlyUnlocked, lastUnlockCount]);

  // Update permanently unlocked when new unlocks are earned
  useEffect(() => {
    if (unlockedIds.length > permanentlyUnlocked.length) {
      setPermanentlyUnlocked(unlockedIds);
    }
  }, [unlockedIds, permanentlyUnlocked.length, setPermanentlyUnlocked]);

  // Update last unlock count after processing
  useEffect(() => {
    if (unlocksEarned > lastUnlockCount) {
      setLastUnlockCount(unlocksEarned);
    }
  }, [unlocksEarned, lastUnlockCount, setLastUnlockCount]);

  const isUnlocked = (conceptId: string): boolean => {
    return unlockedIds.includes(conceptId);
  };

  const getUnlockRequirement = (unlockAtWeeks: number): number => {
    return unlockAtWeeks * 7;
  };

  const dismissNewUnlock = () => {
    // This is handled by the lastUnlockCount update
  };

  return {
    unlockedIds,
    isUnlocked,
    getUnlockRequirement,
    newlyUnlockedId,
    dismissNewUnlock,
    totalUnlocked: unlockedIds.length,
    totalWisdom: stoicConcepts.length,
  };
}
