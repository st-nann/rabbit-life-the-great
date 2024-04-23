import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Roboto as FontRoboto
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontRoboto = FontRoboto({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
})

