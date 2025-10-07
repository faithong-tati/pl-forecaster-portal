import { createFileRoute, redirect } from '@tanstack/react-router';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { DefaultLocale, SupportedLocale } from '@/core/constants';

import type { Locale } from '@/core/types';

export const Route = createFileRoute('/$locale/')({
  beforeLoad: ({ params }) => {
    const { locale } = params;

    if (!SupportedLocale.includes(locale as Locale)) {
      throw redirect({ to: `/${DefaultLocale}` });
    }
  },
  component: memo(LocaleHome),
});

function LocaleHome() {
  const { locale } = Route.useParams();
  const { t, i18n } = useTranslation('core');

  useEffect(() => {
    i18n.changeLanguage(locale);

    document.documentElement.lang = locale;
  }, [i18n, locale]);

  return <div>{t('title')}</div>;
}
