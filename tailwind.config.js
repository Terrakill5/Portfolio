/** @type {import('tailwindcss').Config} */
/*const plugin = require('tailwindcss/plugin')
 plugin(function({ addBase, theme }) {
  addBase({
    'button': { width: theme('width.') },
  })
}) */
module.exports = {
  important: '#app',
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
    },
    colors: {
      'primario': "#191d2b",
      'white':'#fff',
      'black':'#000000',
      'secundario': "#27AE60",
      'gris': "#f8f8f8",
      'gris1': "#dbe1e8",
      'gris2': "#b2becd",
      'gris3': "#6c7983",
      'gris4': "#454e56",
      'gris5': "#2a2e35",
      'gris6': "#12181b",
    },
  },
  plugins: [],
};
