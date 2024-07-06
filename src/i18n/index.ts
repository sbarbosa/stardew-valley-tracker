import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import es from "./es.json";
import { readLocalStorageValue } from "@mantine/hooks";

// Currently supported language
const SUPPORTED_LANGUAGES = ["es", "en"] as const;
type Lang = (typeof SUPPORTED_LANGUAGES)[number];

// Read user Browser's language (ignore region for now)
let userLang = navigator.language;
if (userLang?.indexOf("-") >= 0) {
  userLang = userLang.split("-")[0];
}

if (!SUPPORTED_LANGUAGES.find((lang) => lang === userLang)) {
  userLang = "es";
}

const lang = readLocalStorageValue({ key: "lang", defaultValue: userLang });

// Initializing Internationalization
i18n.use(initReactI18next).init({
  lng: lang,
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  debug: import.meta.env.DEV,

  resources: {
    en,
    es,
  },
  interpolation: {
    escapeValue: false,
  },
});

export const useLang = () => {
  return i18n.language as Lang;
}

export default i18n;
