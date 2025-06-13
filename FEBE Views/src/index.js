import "../components/footer.js";
import './scripts/index.js';
import './scripts/deteksi.js';
import './scripts/kontak.js';
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
