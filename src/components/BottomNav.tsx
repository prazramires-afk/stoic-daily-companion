import { Home, BookOpen, BarChart3, BookMarked, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

type Screen = 'today' | 'journal' | 'progress' | 'wisdom' | 'settings';

interface BottomNavProps {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems: { id: Screen; label: string; icon: typeof Home }[] = [
  { id: 'today', label: 'Today', icon: Home },
  { id: 'journal', label: 'Journal', icon: BookOpen },
  { id: 'progress', label: 'Progress', icon: BarChart3 },
  { id: 'wisdom', label: 'Wisdom', icon: BookMarked },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border bottom-nav-safe z-50">
      <div className="max-w-[430px] mx-auto flex justify-around items-center h-16">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={cn(
              'flex flex-col items-center justify-center w-16 h-full transition-colors',
              activeScreen === id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
            aria-label={label}
            aria-current={activeScreen === id ? 'page' : undefined}
          >
            <Icon
              className={cn(
                'w-5 h-5 mb-1 transition-transform',
                activeScreen === id && 'scale-110'
              )}
            />
            <span className="text-nav">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export type { Screen };
