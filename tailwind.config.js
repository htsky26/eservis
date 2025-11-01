/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF6B00',
          'orange-light': '#FF8534',
          'orange-dark': '#CC5500',
        },
        dark: {
          bg: '#0A0A0A',
          'bg-secondary': '#141414',
          'bg-tertiary': '#1E1E1E',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Comic Sans MS', 'Comic Sans', 'cursive'],
      },
    },
  },
  plugins: [],
};
