/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        color60: '#ECECEC',
        color30: '#060606',
        color10: '#FFFCA8',
      },
      textColor: {
        h1: '#FFFCA8',
        h2: '#1F1F1F',
        h3: '#D2CF8A',
        h4: '#BCBA8A',
        textInDark: '#D8D6B6',
        textInLight: '#1F1F1F',
      },
      fontSize: { 
        h1: '2rem',
        h2: '1.750rem',
        h3: '1.5rem',
        h4: '1.25rem',
        content: '1rem',
      },
    },
  },
};
