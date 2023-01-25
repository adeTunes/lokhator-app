/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      backgroundImage: {
          "hero-pattern": "url('/img/hero-pattern.svg')",
          "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
          light: {
              black: "#000000",
              white: "#FFFFFF",
              "GO-Green": "#00AC5A",
          },
          dark: {
              "charleston-green": "#252735",
              gainsboro: "#DADADD",
              " Black Coral": "#5E606A",
              "spanish-gray": "#8F9198",
              "peach-orange": "#F2CC9D",
              "carrot-orange": "#E1891C",
              "philippine-gray": "#948E8E",
              "light-silver": "#DBD9D9",
              "ghost-white": "#F9FAFB",
              "mountain-meadow": "#38CB89",
              "go-green": "#0DBF66",
              "light-red": "#F8CBC9",
              "charleston-green": "#252735",
              "dark-gunmetal": "#1F2130",
              gunmetal: "#2C2F3C",
              "medium-sea-green": "#30AD74",
              "black-coffee": "#352929",
              argent: "#C4C0C0",
              quartz: "#4A4C58",
              "eerie-black": "#1E1E1E",
              "shadow-blue": "#778CA2",
              "davy-grey": "#54565B",
          },
      },
      extend: {},
  },
  darkMode: ["class"],
  plugins: [],
};