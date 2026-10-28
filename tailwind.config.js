/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        slateDark: '#0B0F19',
        cardDark: '#111827',
        bioTeal: {
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
        },
        bioIndigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
      },
    },
  },
  plugins: [],
};
