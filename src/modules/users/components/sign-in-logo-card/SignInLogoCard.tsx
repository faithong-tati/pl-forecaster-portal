import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '@/core/components/image';
import rem from '@/core/utils/rem';

import { Styles } from './styles';

function SignInLogoCard() {
  const { t } = useTranslation('signIn');

  return (
    <Stack sx={Styles.primaryStack}>
      <Stack sx={Styles.radialStack} />
      <Stack spacing={2} alignItems="center" position="relative" zIndex={1}>
        <Image alt="Logo" src="/logo.svg" sx={{ width: rem(200) }} />

        <Stack spacing={0.5} textAlign="center">
          <Typography variant="h6" sx={Styles.title}>
            {t('logo.title')}
          </Typography>
          <Typography variant="body2" sx={Styles.subtitle}>
            {t('logo.subtitle')}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default memo(SignInLogoCard);
