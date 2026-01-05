import { useCallback, useEffect } from 'react';
import { AppSettings } from '@/types/habits';
import { useLocalStorage, getTodayString } from './useLocalStorage';

const SETTINGS_KEY = 'stoic_app_settings';

const defaultSettings: AppSettings = {
  darkMode: false,
  showDailyQuote: true,
  showMementoMori: true,
  lastMementoMoriDate: null,
};

export function useSettings() {
  const [settings, setSettings] = useLocalStorage<AppSettings>(
    SETTINGS_KEY,
    defaultSettings
  );

  // Apply dark mode class to document
  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.darkMode]);

  const toggleDarkMode = useCallback(() => {
    setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  }, [setSettings]);

  const toggleDailyQuote = useCallback(() => {
    setSettings((prev) => ({ ...prev, showDailyQuote: !prev.showDailyQuote }));
  }, [setSettings]);

  const toggleMementoMori = useCallback(() => {
    setSettings((prev) => ({ ...prev, showMementoMori: !prev.showMementoMori }));
  }, [setSettings]);

  // Check if memento mori should be shown today
  const shouldShowMementoMori = useCallback((): boolean => {
    if (!settings.showMementoMori) return false;
    const today = getTodayString();
    return settings.lastMementoMoriDate !== today;
  }, [settings]);

  // Mark memento mori as shown for today
  const dismissMementoMori = useCallback(() => {
    const today = getTodayString();
    setSettings((prev) => ({ ...prev, lastMementoMoriDate: today }));
  }, [setSettings]);

  // Reset all data
  const resetAllData = useCallback(() => {
    localStorage.removeItem('stoic_daily_progress');
    localStorage.removeItem('stoic_streak_data');
    localStorage.removeItem('stoic_journal_entries');
    localStorage.removeItem('stoic_weekly_review');
    // Keep settings but reset memento mori
    setSettings((prev) => ({ ...prev, lastMementoMoriDate: null }));
    // Reload to apply changes
    window.location.reload();
  }, [setSettings]);

  return {
    settings,
    toggleDarkMode,
    toggleDailyQuote,
    toggleMementoMori,
    shouldShowMementoMori,
    dismissMementoMori,
    resetAllData,
  };
}
