import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: 'label',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: enLang,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
