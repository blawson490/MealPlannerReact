'use client'
import { useEffect } from 'react';

const ClientSideServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered: ', registration);
        })
        .catch(registrationError => {
          console.log('Service Worker registration failed: ', registrationError);
        });
    }
  }, []);

  return null; // This component does not render anything
};

export default ClientSideServiceWorker;