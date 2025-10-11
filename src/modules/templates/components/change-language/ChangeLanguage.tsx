import { Stack, Typography } from '@mui/material';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { RegexRouterLocale } from '@/core/lib/constants';
import rem from '@/core/utils/rem';

import type { Locale } from '@/core/types';

function ChangeLanguage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { location } = useRouterState();
  // const
  const onChangeLanguage = useCallback(
    (locale: Locale) => {
      i18n.changeLanguage(locale);

      const nextPathname = location.pathname.replace(
        RegexRouterLocale,
        `/${locale}`,
      );

      navigate({
        to: nextPathname,
        search: location.search,
        hash: location.hash,
        replace: true,
      });
    },
    [i18n, location, navigate],
  );

  const getFontWeight = useCallback(
    (locale: Locale) => {
      return i18n.language === locale ? 700 : 400;
    },
    [i18n.language],
  );

  return (
    <Stack
      ml="auto"
      direction="row"
      gap={rem(8)}
      sx={{ cursor: 'pointer', pointerEvents: 'auto' }}
    >
      <Typography
        fontWeight={getFontWeight('en')}
        onClick={() => onChangeLanguage('en')}
      >
        en
      </Typography>

      <Typography>|</Typography>

      <Typography
        fontWeight={getFontWeight('th')}
        onClick={() => onChangeLanguage('th')}
      >
        th
      </Typography>
    </Stack>
  );
}

export default memo(ChangeLanguage);
