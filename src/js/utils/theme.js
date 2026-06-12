// src/js/utils/theme.js

export function applyTheme(isDark) {
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  if (isDark) {
    document.documentElement.classList.add('dark');
    if (iconSun) iconSun.classList.remove('hidden');
    if (iconMoon) iconMoon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    if (iconSun) iconSun.classList.add('hidden');
    if (iconMoon) iconMoon.classList.remove('hidden');
  }
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  const nextIsDark = !isDark;
  localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
  applyTheme(nextIsDark);
}

export function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));
}
