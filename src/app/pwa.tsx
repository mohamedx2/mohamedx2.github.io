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
    if (typeof globalThis.window === 'undefined') return;

    try {
      // Register service worker only when running in production on the deployed host.
      // This avoids the service worker hijacking requests during local testing
      // (file:// or localhost) which can cause stale/cached assets to be served.
      try {
        const hostname = globalThis.location?.hostname || '';
        const isLocalhost = /(^localhost$)|(^127\.)/.test(hostname) || hostname === '';
        const isFileProtocol = globalThis.location?.protocol === 'file:';

        const shouldRegisterSW =
          process.env.NODE_ENV === 'production' &&
          !isLocalhost &&
          !isFileProtocol &&
          (hostname.includes('mohamedalihamroun.me') || hostname.includes('github.io'));

        if (shouldRegisterSW && 'serviceWorker' in navigator) {
          navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
              console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
              console.log('Service Worker registration failed:', error);
            });
        }
      } catch (error_) {
        console.log('Service Worker registration check failed:', error_);
      }

      // Handle install prompt
      let deferredPrompt: BeforeInstallPromptEvent | null = null;

      const handleBeforeInstall = (e: Event) => {
        try {
          e.preventDefault();
          deferredPrompt = e as BeforeInstallPromptEvent;
          
          // Show install button/prompt to user
          const installButton = globalThis.document?.getElementById('install-pwa-button');
          if (installButton) {
            installButton.style.display = 'block';
            installButton.addEventListener('click', async () => {
              if (deferredPrompt) {
                try {
                  await deferredPrompt.prompt();
                  const { outcome } = await deferredPrompt.userChoice;
                  console.log(`User response to the install prompt: ${outcome}`);
                  deferredPrompt = null;
                } catch (err) {
                  console.log('Install prompt error:', err);
                }
              }
            });
          }
        } catch (err) {
          console.log('beforeinstallprompt error:', err);
        }
      };

      const handleAppInstalled = () => {
        try {
          console.log('PWA was installed');
          const installButton = globalThis.document?.getElementById('install-pwa-button');
          if (installButton) {
            installButton.style.display = 'none';
          }
        } catch (err) {
          console.log('appinstalled error:', err);
        }
      };

      // Add event listeners with try-catch
      globalThis.addEventListener('beforeinstallprompt', handleBeforeInstall);
      globalThis.addEventListener('appinstalled', handleAppInstalled);

      // Check if app is running as PWA
      const isPWA = () => {
        try {
          const nav = navigator as NavigatorWithStandalone;
          return (
            globalThis.matchMedia('(display-mode: standalone)').matches ||
            nav.standalone === true ||
            globalThis.document?.referrer.includes('android-app://')
          );
        } catch {
          return false;
        }
      };

      if (isPWA()) {
        console.log('App is running as a PWA');
      }

      return () => {
        globalThis.removeEventListener('beforeinstallprompt', handleBeforeInstall);
        globalThis.removeEventListener('appinstalled', handleAppInstalled);
      };
    } catch (err) {
      console.log('PWA Handler error:', err);
    }
  }, []);

  return null;
}
