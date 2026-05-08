import { watchEffect } from "vue";
import { useI18n } from "vue-i18n";

const STORAGE_KEY = "locale";
const SUPPORTED = ["en", "fr"];

export function getInitialLocale() {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED.includes(stored)) return stored;

  const browser = window.navigator.language?.slice(0, 2);
  return SUPPORTED.includes(browser) ? browser : "en";
}

export function useLocale() {
  const { locale } = useI18n({ useScope: "global" });

  watchEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", locale.value);
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale.value);
    }
  });

  function toggle() {
    locale.value = locale.value === "en" ? "fr" : "en";
  }

  return { locale, toggle, supported: SUPPORTED };
}
