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
    },
  },
  plugins: [],
}
