import { useState, useCallback } from 'react';
import { BottomNav, Screen } from '@/components/BottomNav';
import { SplashScreen } from '@/components/SplashScreen';
import { TodayScreen } from '@/screens/TodayScreen';
import { JournalScreen } from '@/screens/JournalScreen';
import { ProgressScreen } from '@/screens/ProgressScreen';
import { WisdomScreen } from '@/screens/WisdomScreen';
import { SettingsScreen } from '@/screens/SettingsScreen';

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('today');
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case 'today':
        return <TodayScreen />;
      case 'journal':
        return <JournalScreen />;
      case 'progress':
        return <ProgressScreen />;
      case 'wisdom':
        return <WisdomScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <TodayScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main Content */}
      <main className="pb-20">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </div>
  );
};

export default Index;
