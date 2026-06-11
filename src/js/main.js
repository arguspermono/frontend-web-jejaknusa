// src/js/main.js
import { initTheme, toggleTheme, applyTheme } from './utils/theme.js';
import { initNavbar } from './components/navbar.js';
import { initFooter } from './components/footer.js';
import { applyTranslations, setLang } from './utils/translations.js';

// Bind to window for global inline event handlers or components (like navbar.js)
window.toggleTheme = toggleTheme;
window.applyTheme = applyTheme;
window.setLang = (lang) => {
  setLang(lang);
  const langDropdown = document.getElementById('lang-dropdown');
  if (langDropdown) {
    langDropdown.classList.add('hidden');
  }
};

// Scroll Reveal Animation
function scrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme
  initTheme();

  // Inject Reusable Components
  initNavbar();
  initFooter();

  // Apply Language Translations
  const currentLang = localStorage.getItem('lang') || 'id';
  applyTranslations(currentLang);

  // Initialize Home Components
  if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('home.html') || window.location.pathname === '/' || window.location.pathname === '/web_frontend_jejaknusa/') {
    import('./modules/home.js').then(module => {
      module.initHomeComponents().then(() => {
        // Re-run scroll reveal after injecting content
        scrollReveal();
        // Re-apply translations for the injected content
        applyTranslations(currentLang);
      });
    });
  }

  // Initialize Destination Components
  if (window.location.pathname.endsWith('destinations.html') || window.location.pathname.endsWith('destination.html')) {
    import('./modules/destination.js').then(module => {
      module.initDestinationComponents().then(() => {
        scrollReveal();
        applyTranslations(currentLang);
      });
    });
  }

  // Initialize Article Components
  if (window.location.pathname.endsWith('article.html')) {
    import('./modules/article.js').then(module => {
      module.initArticleComponents().then(() => {
        scrollReveal();
        applyTranslations(currentLang);
      });
    });
  }

  // Initialize About Us Components
  if (window.location.pathname.endsWith('about_us.html') || window.location.pathname.endsWith('about.html')) {
    import('./modules/about.js').then(module => {
      module.initAboutComponents().then(() => {
        scrollReveal();
        applyTranslations(currentLang);
      });
    });
  }

  // Set active link in mobile menu (if applicable)
  const rawPath = window.location.pathname.split('/').pop();
  let currentPath = (!rawPath || rawPath === 'index.html') ? 'home.html' : rawPath;
  if (currentPath === 'about.html') {
    currentPath = 'about_us.html';
  }
  const mobileLinks = document.querySelectorAll('#mobile-menu .nav-link');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('text-brand-red');
      link.classList.remove('text-gray-600', 'dark:text-gray-300');
    } else {
      link.classList.remove('text-brand-red');
      link.classList.add('text-gray-600', 'dark:text-gray-300');
    }
  });

  // Scroll reveal on load & scroll
  window.addEventListener('scroll', scrollReveal, { passive: true });
  scrollReveal();

  // Contact Form Submission Handler (for About Us Page)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.classList.add('hidden');
      const successMsg = document.getElementById('success-msg');
      if (successMsg) {
        successMsg.classList.remove('hidden');
      }
    });
  }
});
