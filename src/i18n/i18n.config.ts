import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/messages/en';
import th from '@/messages/th';

i18n.use(initReactI18next).init({
  resources: { en, th },
  lng: 'en',
  fallbackLng: 'en',
  ns: Object.keys(en),
  defaultNS: 'core',
  interpolation: { escapeValue: false },
});

export default i18n;
