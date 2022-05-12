const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": {
        "darker": "#201B36",
        "medium": "#616794",
        "light": '#A9ACC7',
      },
      "secondary": "#439A86",
      "text": "#ffffff",
      black: colors.black,
      red: colors.red,
      green: colors.green
    },
    extend: {},
  },
  plugins: [],
}
