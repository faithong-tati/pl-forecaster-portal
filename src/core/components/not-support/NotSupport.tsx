import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '@/core/components/image';
import rem from '@/core/utils/rem';

import { Styles } from './styles';

function NotSupport() {
  const { t } = useTranslation('core');

  return (
    <Stack
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gap={rem(40)}
    >
      <Stack borderRadius="50%" p={rem(24)} sx={Styles.imageStack}>
        <Image alt="smartphone" src="/smartphone.png" sx={Styles.image} />
      </Stack>

      <Stack gap={rem(12)} sx={Styles.textStack}>
        <Typography variant="h4" fontWeight={600}>
          {t('notSupport.title')}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: 'pre-wrap' }}
        >
          {t('notSupport.subtitle')}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default memo(NotSupport);
