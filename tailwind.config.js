/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#231F20', // WSO2 black 
        secondary: '#FF7300', // WSO2 orange 
        'text-secondary': '#D1D5DB', // Light gray for secondary text/icons
        'text-tertiary': '#9CA3AF', // Muted gray for tertiary text
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Elegant, modern font
      },
      fontSize: {
        '2xl': '1.5rem', // Increased heading size (was 1.25rem for xl)
        base: '1rem', // Increased body text size (was 0.875rem for sm)
      },
    },
  },
  plugins: [],
};