import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];

i18n
  .use(Backend) // used to load data from othe directory
  .use(LanguageDetector) // detects the current language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
      // resources: {
      //   en: {
      //     translation: {
      //       battleHControls: 'img/battleHeights/BattelheightsControlesENG.png',
      //       projecyLoControls: 'img/projectLo/Ry18F4.gif',
      //     },
      //   },
      //   fr: {
      //     translation: {
      //       battleHControls: 'img/battleHeights/BattelheightsControlesFR.png',
      //       projecyLoControls: 'img/projectLo/ProjectL0ControlesFR.png',          
      //     },
      //   },
      // },
    fallbackLng, // default language
    detection: {
      checkWhitelist: true,
    },
    debug: true,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;