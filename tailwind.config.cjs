/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueLigth: '#8074A7',
        blueDark: '#312769',
        lightGray: '#EDEEF3',
      },
      keyframes: {
        growIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        growOut: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
      },
      animation: {
        growIn: 'growIn 0.25s ease-in-out',
        growOut: 'growOut 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
