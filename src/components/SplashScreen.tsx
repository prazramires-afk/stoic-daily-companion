import { useEffect, useState } from 'react';
import splashImage from '@/assets/splash-logo.svg';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

export function SplashScreen({ onComplete, duration = 1500 }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, duration - 500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="w-24 h-24 mb-6 animate-fade-in">
        <svg
          viewBox="0 0 512 512"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="512" height="512" fill="hsl(var(--background))" />
          <g fill="hsl(var(--stoic-olive))">
            {/* Main pillar */}
            <rect x="216" y="160" width="80" height="240" rx="4" />
            {/* Top capital */}
            <rect x="180" y="140" width="152" height="30" rx="6" />
            <rect x="196" y="130" width="120" height="20" rx="4" />
            {/* Base */}
            <rect x="180" y="400" width="152" height="20" rx="4" />
            <rect x="196" y="420" width="120" height="12" rx="3" />
            {/* Fluting lines */}
            <rect x="232" y="180" width="8" height="200" rx="2" opacity="0.3" />
            <rect x="252" y="180" width="8" height="200" rx="2" opacity="0.3" />
            <rect x="272" y="180" width="8" height="200" rx="2" opacity="0.3" />
          </g>
        </svg>
      </div>

      {/* App name */}
      <h1 className="font-quote text-2xl text-foreground mb-2 animate-fade-in">
        Stoic Daily Habit
      </h1>
      
      {/* Tagline */}
      <p className="text-secondary text-muted-foreground animate-fade-in">
        Cultivate virtue through daily practice
      </p>
    </div>
  );
}
