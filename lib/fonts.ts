import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
  Mulish as FontSansSerif,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const fontSansSerif = FontSansSerif({
  subsets: ["latin"],
  variable: "--font-sans-serif",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
