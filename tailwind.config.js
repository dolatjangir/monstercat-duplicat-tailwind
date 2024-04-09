/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      rubic:["Rubik Scribble"],
      fira:["Fira Sans"],
      roboto:["Roboto"]
    },
  },
  colors:{
    "red":"#b91c1c"
  },
  plugins: [],
}
