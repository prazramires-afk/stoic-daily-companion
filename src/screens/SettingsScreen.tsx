import { useState } from 'react';
import { Moon, Sun, MessageSquare, Skull, VolumeX, Trash2, AlertTriangle } from 'lucide-react';
import { useSettings } from '@/hooks/useSettings';
import { Switch } from '@/components/ui/switch';

export function SettingsScreen() {
  const {
    settings,
    toggleDarkMode,
    toggleDailyQuote,
    toggleMementoMori,
    resetAllData,
  } = useSettings();

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    resetAllData();
    setShowResetConfirm(false);
  };

  return (
    <div className="screen-container">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-screen-title text-foreground">Settings</h1>
        <p className="text-secondary text-muted-foreground mt-1">
          Customize your practice
        </p>
      </header>

      {/* Settings List */}
      <div className="space-y-3">
        {/* Dark Mode */}
        <div className="bg-card rounded-2xl p-4 border border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {settings.darkMode ? (
              <Moon className="w-5 h-5 text-stoic-olive" />
            ) : (
              <Sun className="w-5 h-5 text-stoic-olive" />
            )}
            <div>
              <p className="text-habit-title text-foreground">Dark Mode</p>
              <p className="text-secondary text-muted-foreground">
                {settings.darkMode ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </div>
          <Switch
            checked={settings.darkMode}
            onCheckedChange={toggleDarkMode}
          />
        </div>

        {/* Daily Quote */}
        <div className="bg-card rounded-2xl p-4 border border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-stoic-olive" />
            <div>
              <p className="text-habit-title text-foreground">Daily Quote</p>
              <p className="text-secondary text-muted-foreground">
                Show Marcus Aurelius quote
              </p>
            </div>
          </div>
          <Switch
            checked={settings.showDailyQuote}
            onCheckedChange={toggleDailyQuote}
          />
        </div>

        {/* Memento Mori */}
        <div className="bg-card rounded-2xl p-4 border border-border/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skull className="w-5 h-5 text-stoic-olive" />
            <div>
              <p className="text-habit-title text-foreground">Memento Mori</p>
              <p className="text-secondary text-muted-foreground">
                Daily mortality reminder
              </p>
            </div>
          </div>
          <Switch
            checked={settings.showMementoMori}
            onCheckedChange={toggleMementoMori}
          />
        </div>

        {/* Silent Mode Info */}
        <div className="bg-card rounded-2xl p-4 border border-border/50 flex items-center gap-3">
          <VolumeX className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-habit-title text-foreground">Silent Mode</p>
            <p className="text-secondary text-muted-foreground">
              App is silent by default. Gentle haptic on completion.
            </p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="mt-8">
        <p className="text-secondary text-muted-foreground mb-3">Danger Zone</p>
        
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full bg-card rounded-2xl p-4 border border-destructive/30 flex items-center gap-3 text-left hover:border-destructive/50 transition-colors"
          >
            <Trash2 className="w-5 h-5 text-destructive" />
            <div>
              <p className="text-habit-title text-foreground">Reset All Data</p>
              <p className="text-secondary text-muted-foreground">
                Delete all habits, journal entries, and streaks
              </p>
            </div>
          </button>
        ) : (
          <div className="bg-card rounded-2xl p-5 border border-destructive/50 animate-scale-in">
            <div className="flex items-center gap-2 text-destructive mb-3">
              <AlertTriangle className="w-5 h-5" />
              <p className="font-medium">Are you sure?</p>
            </div>
            <p className="text-body text-muted-foreground mb-4">
              This will permanently delete all your progress, journal entries, and settings. This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 px-4 bg-muted text-foreground rounded-xl font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 px-4 bg-destructive text-destructive-foreground rounded-xl font-medium"
              >
                Delete All
              </button>
            </div>
          </div>
        )}
      </div>

      {/* About */}
      <div className="mt-8 text-center">
        <p className="font-quote text-lg text-foreground/70">
          Stoic Daily Habit
        </p>
        <p className="text-secondary text-muted-foreground mt-1">
          Cultivate virtue. Practice daily.
        </p>
      </div>
    </div>
  );
}
