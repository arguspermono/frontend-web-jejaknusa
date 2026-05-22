/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#E53935',
          darkred: '#B71C1C',
        },
      },
      fontSize: {
        'display': ['6rem', { lineHeight: '1', fontWeight: '900', letterSpacing: '-0.05em' }],
        'display-sm': ['4.5rem', { lineHeight: '1', fontWeight: '900', letterSpacing: '-0.04em' }],
      },
      maxWidth: {
        'content': '80rem', // 1280px — main content wrapper
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      borderRadius: {
        DEFAULT: '0.5rem',   // rounded-lg equivalent
      },
    },
  },
  plugins: [],
};
