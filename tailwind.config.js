/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#047857',
          dark: '#065f46',
          light: '#d1fae5',
        },
        accent: {
          DEFAULT: '#b45309',
          light: '#fef3c7',
        },
      },
    },
  },
  plugins: [],
};
