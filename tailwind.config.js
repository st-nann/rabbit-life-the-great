import { nextui } from "@nextui-org/react"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"]
      }
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FB5E3F",
            },
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#FB5E3F",
            },
          },
        }
      },
    })
  ],
}
