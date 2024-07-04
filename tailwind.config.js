/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', ".src/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }

    },

    gridTemplateColumns: {
      '70/30': '70% 28%',
      '30': '32% 32% 32%'
    }
  },

  varients: {
    extends: {

    }
  },
  plugins: [],
}

