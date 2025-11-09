'use client';

import { useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export default function PWAHandler() {
  useEffect(() => {
    // Check if we're in the browser
    if (typeof globalThis === 'undefined') return;

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Handle install prompt
    let deferredPrompt: BeforeInstallPromptEvent | null = null;

    globalThis.addEventListener('beforeinstallprompt', (e: Event) => {
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      
      // Show install button/prompt to user
      const installButton = document.getElementById('install-pwa-button');
      if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', async () => {
          if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
          }
        });
      }
    });

    // Handle app installed event
    globalThis.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      const installButton = document.getElementById('install-pwa-button');
      if (installButton) {
        installButton.style.display = 'none';
      }
    });

    // Check if app is running as PWA
    const isPWA = () => {
      const nav = globalThis.navigator as NavigatorWithStandalone;
      return (
        globalThis.matchMedia('(display-mode: standalone)').matches ||
        nav.standalone === true ||
        document.referrer.includes('android-app://')
      );
    };

    if (isPWA()) {
      console.log('App is running as a PWA');
    }
  }, []);

  return null;
}
