export const LANGUAGES = {
  uz: {
    name: "O`zbekcha",
    flag: "/images/uzb-flag.png"
  },
  ru: {
    name: "Русский",
    flag: "/images/ru-flag.png"
  },
  en: {
    name: "English",
    flag: "/images/gb-flag.png"
  }
} as const

export type Language = keyof typeof LANGUAGES
