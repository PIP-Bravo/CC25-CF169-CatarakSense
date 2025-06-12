import './main.js';
import '../scripts/script.js';
import 'moment';
import 'jquery';

// Jika ada logic service worker:
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.log('SW registration failed:', err));
  });
};
