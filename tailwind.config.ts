import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        blue: "rgb(5,28,44)",
        slate: "rgb(91,103,112)",
        moss: "rgb(165, 175, 136)",
        amber: "rgb(211, 130, 53)",
        white: "rgb(255, 255, 255)",
        black: "rgb(0, 0, 0)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config
