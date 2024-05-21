const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        seashell: "#f9f1ec",
        "brown--secondary": "#957f72",
        brown: "#4c4037",
        linen: "#e5d9cf",
        "light-brown": "#b6a497",
        "dark-brown": "#261b11",
      },
      fontSize: {
        "mobile-lg": "56px", // Used for screens smaller than 375px
        xxl: "112px", // Used for screens 375px and larger
      },
      screens: {
        "custom-breakpoint": "375px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
  plugins: [],
};
