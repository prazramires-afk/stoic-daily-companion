import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8a80b99f31d04bff830c1bf4bb8beebf',
  appName: 'Stoic Daily Habit',
  webDir: 'dist',
  server: {
    url: 'https://8a80b99f-31d0-4bff-830c-1bf4bb8beebf.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#F5F2ED'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#F5F2ED',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      spinnerColor: '#6B705C'
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#F5F2ED'
    }
  }
};

export default config;
