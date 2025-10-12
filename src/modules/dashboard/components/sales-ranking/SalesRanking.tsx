import { Grid, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Image from '@/core/components/image';
import useOptions from '@/core/hooks/use-options';
import { generateId } from '@/core/lib/helpers';
import { Panel } from '@/core/styles/common';
import { formatMetricNumber } from '@/core/utils/format';
import rem from '@/core/utils/rem';

import { rankingConfig, swapItems } from './helpers';
import { Styles } from './styles';

import type { SalesRankingProps } from './types';

function SalesRanking({ items }: SalesRankingProps) {
  const { locationTypeOptions } = useOptions();
  const { t } = useTranslation('dashboard');

  return (
    <Stack direction="row" width="100%" mt={rem(50)}>
      <Grid container spacing={rem(16)} width="100%">
        {swapItems(items).map((item) => {
          const locationType = locationTypeOptions.find(
            (option) => option.value === item.locationType,
          )?.label;

          const config = rankingConfig(item);

          return (
            <Grid
              key={generateId(8)}
              size={{ xs: 4 }}
              mt="auto"
              sx={Styles.grid}
            >
              <Panel
                sx={{
                  ...Styles.panel,
                  height: config.height,
                  background: config.bgColor,
                }}
              >
                <Image
                  alt="medal-icon"
                  src={config.iconPath}
                  sx={Styles.medalIcon}
                />

                <Typography
                  variant="h6"
                  textAlign="center"
                  mt={rem(10)}
                  color="primary"
                  sx={{ textShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)' }}
                >
                  {locationType}
                </Typography>

                <Grid container mt="auto">
                  {config.stat.map((sc) => (
                    <Grid key={sc.label} size={{ xs: 12 }}>
                      <Stack
                        direction="row"
                        gap={rem(8)}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography fontWeight={700}>
                          {formatMetricNumber(sc.value)}
                        </Typography>
                        <Typography variant="body2">{t(sc.label)}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Panel>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default memo(SalesRanking);
