/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF4790',
        dark: {
          100: '#000000',
          200: '#111111',
          300: '#222222',
        },
      },
    },
  },
  plugins: [],
};