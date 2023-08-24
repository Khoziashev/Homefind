import { createI18n } from "vue-i18n";

import en from "../locales/en/index";
import ru from "../locales/ru/index";

import cookie from "@/lib/cookie";

const messages = { en, ru };
const currentLocale = cookie.get("lang") || "en";

const i18n = createI18n({
  fallbackLocale: "en",
  locale: currentLocale,
  silentTranslationWarn: true,
  messages,
});

const locales = ["en", "ru"];
const languages = [
  { locale: "en", name: "English" },
  { locale: "ru", name: "Русский" },
];

export default i18n;
export { locales, languages };
