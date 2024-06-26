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
      },
      spacing: {
        ...defaultTheme.spacing,
        "16": "4rem",
        "18": "4.5rem"
      },
      maxWidth: {
        '75': '19rem',
      }
    },
    screens: {
      xs: "475px",
      ssm: "620px",
      ...defaultTheme.screens,
    },
    fontSize: {
      ...defaultTheme.fontSize,
      "4xl": ["4rem", { lineHeight: "4rem" }],
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
