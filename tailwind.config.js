/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E53935',
        secondary: '#4CAF50',
        warning: '#FBC02D',
        error: '#D32F2F',
        'text-primary': '#333333',
        'text-secondary': '#777777',
        'border': '#E0E0E0',
        'background': '#F9F9F9',
      }
    },
  },
  plugins: [],
};