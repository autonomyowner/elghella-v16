'use client';

import { useEffect } from 'react';

const ServiceWorkerRegistration = () => {
  useEffect(() => {
    const manageSW = async () => {
      if (!('serviceWorker' in navigator)) return;

      try {
        if (process.env.NODE_ENV === 'development') {
          const regs = await navigator.serviceWorker.getRegistrations();
          await Promise.all(regs.map((r) => r.unregister()));
          console.log('Service workers unregistered (development)');
          return;
        }

        // Production: register and auto-update
        const registration = await navigator.serviceWorker.register('/sw.js');

        // If there's a waiting worker, tell it to activate
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        // When an update is found, force the new SW to take control
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && registration.waiting) {
              registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });

        // When controller changes, reload once to pick up fresh assets
        let reloaded = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (reloaded) return;
          reloaded = true;
          window.location.reload();
        });
      } catch (err) {
        console.warn('Service Worker registration issue:', err);
      }
    };

    manageSW();
  }, []);

  return null;
};

export default ServiceWorkerRegistration;
