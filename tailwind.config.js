/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("keep-react/preset")],
  theme: {
    extend: {
      colors:{
        ciberBluedark: '#272760',
        ciberBluelight: '#0CFFE1',
        ciberBluemedium: '#586AE2',
        ciberPurple: '#442768',
        ciberWhite: '#E0D9F6',
        ciberPink: '#ED1E79',
        ciberYelow: '#f8ef02'
      },
      fontFamily:{
        blackOpsOne: [ 'Black Ops One', 'cursive' ],
        kanit: [ 'Kanit', 'sans-serif' ],
        teko: [ 'Teko', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}
