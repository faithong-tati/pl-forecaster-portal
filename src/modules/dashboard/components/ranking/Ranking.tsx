import { Divider, Grid, Stack, Typography } from '@mui/material';
import { memo } from 'react';

import Image from '@/core/components/image';
import { generateId } from '@/core/lib/helpers';
import { Panel } from '@/core/styles/common';
import rem from '@/core/utils/rem';
import useOptions from '@/modules/machines/hooks/use-options';

import { rankingConfig, swapItems } from './helpers';
import { Styles } from './styles';

import type { RankingProps } from './types';

function Ranking({ items }: RankingProps) {
  const { locationTypeOptions } = useOptions();

  return (
    <Stack direction="row" width="100%" mt={rem(40)}>
      <Grid container spacing={rem(32)} width="100%">
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
                >
                  {locationType}
                </Typography>

                <Divider />

                <Grid container>
                  {config.stat.map((sc) => (
                    <Grid key={sc.label} size={{ xs: 6 }}>
                      <Stack alignItems={sc.alignItems} gap={rem(4)}>
                        <Typography variant="body2">{sc.label}</Typography>
                        <Typography fontWeight={700}>{sc.value}</Typography>
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

export default memo(Ranking);
