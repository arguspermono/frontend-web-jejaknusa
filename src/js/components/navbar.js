// src/js/components/navbar.js
import { toggleTheme, applyTheme } from '../utils/theme.js';

export function initNavbar() {
  const navbarContainer = document.getElementById('navbar-placeholder');
  if (!navbarContainer) return;

  // Render Navbar HTML
  navbarContainer.innerHTML = `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F0]/90 dark:bg-black/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo -->
          <a href="home.html" class="flex items-center gap-2 group">
            <div class="w-9 h-9 bg-brand-red rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-black tracking-tight text-gray-900 dark:text-white uppercase leading-none">JEJAKNUSA</span>
              <span class="text-[0.55rem] font-bold tracking-[0.3em] text-gray-900 dark:text-white mt-1 uppercase">Traveling</span>
            </div>
          </a>

          <!-- Desktop Nav Links -->
          <div class="hidden md:flex items-center gap-8">
            <a href="home.html" class="nav-link text-sm font-semibold text-gray-900 dark:text-white" data-i18n="nav_home">Beranda</a>
            <a href="destinations.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" data-i18n="nav_destination">Destinasi</a>
            <a href="about_us.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" data-i18n="nav_about">Tentang Kami</a>
          </div>

          <!-- Right Icons -->
          <div class="hidden md:flex items-center gap-6">
            
            <!-- Dark Mode Toggle -->
            <button id="theme-toggle" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" title="Toggle Dark Mode">
              <!-- Sun icon -->
              <svg id="icon-sun" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
              </svg>
              <!-- Moon icon -->
              <svg id="icon-moon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Language Switcher -->
            <div class="relative" id="lang-container">
              <button id="lang-btn" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" title="Switch Language">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <div id="lang-dropdown" class="hidden absolute right-0 top-full mt-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50 min-w-[120px]">
                <button id="lang-opt-id" class="w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium transition-colors">Bahasa ID</button>
                <button id="lang-opt-en" class="w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium transition-colors border-t border-gray-100 dark:border-gray-700">English</button>
              </div>
            </div>

            <!-- User Profile -->
            <button class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" title="Profile">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>

          <!-- Mobile Hamburger -->
          <button id="hamburger" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path id="ham-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="md:hidden bg-[#F8F6F0] dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div class="px-4 py-4 flex flex-col gap-4">
          <a href="home.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300" data-i18n="nav_home">Beranda</a>
          <a href="destinations.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300" data-i18n="nav_destination">Destinasi</a>
          <a href="about_us.html" class="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300" data-i18n="nav_about">Tentang Kami</a>
          <div class="flex items-center gap-4 pt-4 mt-2 border-t border-gray-200 dark:border-gray-800">
            <button id="mobile-lang-id" class="text-sm font-medium text-gray-600 dark:text-gray-300">🇮🇩 ID</button>
            <button id="mobile-lang-en" class="text-sm font-medium text-gray-600 dark:text-gray-300">🇬🇧 EN</button>
            <button id="mobile-theme-toggle" class="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2" data-i18n="toggle_mode">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg> Dark Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Set Active Link based on pathname
  const rawPath = window.location.pathname.split('/').pop();
  let currentPath = (!rawPath || rawPath === 'index.html') ? 'home.html' : rawPath;
  if (currentPath === 'about.html') {
    currentPath = 'about_us.html';
  }
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
