/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-mona-sans)', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          light: '#0de8af',
          DEFAULT: '#06D7A0',
          dark: '#04c08f',
        },
        secondary: {
          light: '#1572da',
          DEFAULT: '#0D5FBC',
          dark: '#0e54a2',
        },
        darkblue: '#010512',
        backdrop: 'var(--color-backdrop)',
      },
    },
  },
  plugins: [],
};
