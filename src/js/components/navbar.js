// src/js/components/navbar.js
import { toggleTheme, applyTheme } from '../utils/theme.js';

export function initNavbar() {
  const navbarContainer = document.getElementById('navbar-placeholder');
  if (!navbarContainer) return;

  // Render Navbar HTML
  navbarContainer.innerHTML = `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- Logo -->
          <a href="home.html" class="flex items-center gap-2 group">
            <div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span class="text-xl font-black tracking-tight text-gray-900 dark:text-white uppercase">JEJAKNUSA</span>
          </a>

          <!-- Desktop Nav Links -->
          <div class="hidden md:flex items-center gap-8">
            <a href="home.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" data-i18n="nav_home">Beranda</a>
            <a href="destination.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" data-i18n="nav_destination">Destinasi</a>
            <a href="about_us.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" data-i18n="nav_about">Hubungi Kami</a>
          </div>

          <!-- Right Icons -->
          <div class="hidden md:flex items-center gap-2">
            
            <!-- Language Switcher -->
            <div class="relative" id="lang-container">
              <button id="lang-btn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium transition-all" title="Switch Language">
                <svg class="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span id="current-lang" class="text-gray-700 dark:text-gray-300">ID</span>
                <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div id="lang-dropdown" class="hidden absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50 min-w-[90px]">
                <button id="lang-opt-id" class="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium flex items-center gap-2">
                  🇮🇩 <span>Bahasa ID</span>
                </button>
                <button id="lang-opt-en" class="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium flex items-center gap-2">
                  🇬🇧 <span>English</span>
                </button>
              </div>
            </div>

            <!-- Dark Mode Toggle -->
            <button id="theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" title="Toggle Dark Mode">
              <!-- Sun icon -->
              <svg id="icon-sun" class="w-5 h-5 text-yellow-500 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
              </svg>
              <!-- Moon icon -->
              <svg id="icon-moon" class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- User Profile -->
            <button class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" title="Profile">
              <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          <!-- Mobile Hamburger -->
          <button id="hamburger" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path id="ham-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div class="px-4 py-4 flex flex-col gap-4">
          <a href="home.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300" data-i18n="nav_home">Beranda</a>
          <a href="destination.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300" data-i18n="nav_destination">Destinasi</a>
          <a href="about_us.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300" data-i18n="nav_about">Hubungi Kami</a>
          <div class="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-800">
            <button id="mobile-lang-id" class="px-3 py-1.5 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 font-medium">🇮🇩 ID</button>
            <button id="mobile-lang-en" class="px-3 py-1.5 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 font-medium">🇬🇧 EN</button>
            <button id="mobile-theme-toggle" class="px-3 py-1.5 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 font-medium" data-i18n="toggle_mode">Dark Mode</button>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Set Active Link based on pathname
  const rawPath = window.location.pathname.split('/').pop();
  const currentPath = (!rawPath || rawPath === 'index.html') ? 'home.html' : rawPath;
  const navLinks = navbarContainer.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active', 'text-gray-900', 'dark:text-white');
      link.classList.remove('text-gray-600', 'dark:text-gray-300');
    } else {
      link.classList.remove('active', 'text-gray-900', 'dark:text-white');
      link.classList.add('text-gray-600', 'dark:text-gray-300');
    }
  });

  // Event Listeners for Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

  // Initial Theme Icon Setup
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

  // Event Listeners for Language Dropdown
  const langBtn = document.getElementById('lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!document.getElementById('lang-container').contains(e.target)) {
        langDropdown.classList.add('hidden');
      }
    });

    document.getElementById('lang-opt-id').addEventListener('click', () => window.setLang('id'));
    document.getElementById('lang-opt-en').addEventListener('click', () => window.setLang('en'));
  }

  // Mobile Lang Switchers
  const mobileLangId = document.getElementById('mobile-lang-id');
  if (mobileLangId) mobileLangId.addEventListener('click', () => window.setLang('id'));

  const mobileLangEn = document.getElementById('mobile-lang-en');
  if (mobileLangEn) mobileLangEn.addEventListener('click', () => window.setLang('en'));

  // Mobile Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Scroll Shadow Effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
      } else {
        navbar.classList.remove('shadow-md');
      }
    }
  }, { passive: true });
}
