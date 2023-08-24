import { createI18n } from "vue-i18n";

const locales = ["en", "ru"];

const messages = {} as any;
locales.forEach((v) => {
  messages[v] = require(`../locales/${v}`);
});

const currentLocale = "en";

const i18n = createI18n({
  fallbackLocale: "en",
  locale: currentLocale,
  silentTranslationWarn: true,
  messages,
});

export default i18n;
