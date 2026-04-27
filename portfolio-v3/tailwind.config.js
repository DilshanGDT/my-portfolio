/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#282C33',
          text: '#FFFFFF',
          secondary: '#ABB2BF',
          accent: '#C778DD',
        },
        light: {
          bg: '#FFFFFF',
          text: '#000000',
          secondary: '#ABB2BF',
          accent: '#C778DD',
        },
      },
    },
  },
  plugins: [],
}
