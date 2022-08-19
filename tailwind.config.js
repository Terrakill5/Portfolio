/** @type {import('tailwindcss').Config} */
/*const plugin = require('tailwindcss/plugin')
 plugin(function({ addBase, theme }) {
  addBase({
    'button': { width: theme('width.') },
  })
}) */
module.exports = {
  important: '#app',
  darkMode: 'class',
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{html,js,vue}",
    "./public/index.html",
    "./index.html",
  ],
  theme: {
    extend: {transitionDelay: {
      '0': '0ms',
      '4000': '4000ms',
    },spacing: {
      '3%': '3%',
      '28%':'28%',
    },borderRadius: {
      '1/2':'50%',
      '30':'30px',
    },boxShadow: {
      'especial': '0 3px 60px 15px rgba(0, 0, 0, 0.3)',
      'especial1':'1px 2px 15px rgba(0,0,0,.1)',
      'especial2':'1px 1px 20px rgba(0,0,0,.3)',
      'especial3':'1px 4px 20px rgba(0,0,0,.8)',
      'especial4':'0 3px 15px rgba(0,0,0,.2)',
    },height: {
      '90': '90%',
    },width: {
      '68': '68%',
    },translate: {
      'mitad': '-50%,-50%',
    }},
    fontFamily: {
      Roboto: "Roboto,sans-serif",
      Poppins: "Poppins, sans-serif",
    },
    colors: {
      'primario': 'var(--color-primario)',
      'white':'var(--color-white)',
      'black':'var(--color-black)',
      'secundario': "var(--color-secundario)",
      'gris': "var(--color-gris)",
      'gris1': "var(--color-gris1)",
      'gris2': "var(--color-gris2)",
      'gris3': "var(--color-gris3)",
      'gris4': "var(--color-gris4)",
      'gris5': "var(--color-gris5)",
      'gris6': "var(--color-gris6)",
      'primario1': 'var(--color-primario1)',
      'secundario1': 'var(--color-secundario1)',
    },
  },
  plugins: [],
};
