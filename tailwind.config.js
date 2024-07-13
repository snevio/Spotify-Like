/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      gotham: ["Gotham", "sans-serif"],
      gothamBold: ["Gotham-Bold", "sans-serif"]
    },


    extend: {
      colors: {
        'main-color': 'rgb(15 23 42);'
      },
      margin: {
        'defaultMargin': '0.5rem'
      },
      content: {
        'gif': 'url("src\assets\icons8-audio-wave.gif")'
      }

    },
  },
  plugins: [],
}