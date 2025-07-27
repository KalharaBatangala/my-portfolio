/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#231F20', // WSO2 black
        secondary: '#FF7300', // WSO2 orange
        'text-secondary': '#D1D5DB', // Light gray for secondary text (e.g., nav links)
        'text-tertiary': '#9CA3AF', // Muted gray for tertiary text (e.g., copyright)
      },
    },
  },
  plugins: [],
};