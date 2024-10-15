/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ajoute tous tes fichiers React ici
  ],
  theme: {
    extend: {
      screens: {
        'xmd': '960px',
        'xsm': '720px',
        'xs': '450px',
        'xxs': '370px',
      },

      fontFamily: {
        poppins: 'Poppins',
        kanit: 'Kanit',
      },
    },
  },
  plugins: [],
}

