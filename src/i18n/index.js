import { createI18n } from "vue-i18n";
import en from "./en";
import fr from "./fr";
import { getInitialLocale } from "@/composables/useLocale";

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: "en",
  messages: {
    en,
    fr,
  },
});

export default i18n;
