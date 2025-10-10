import { Grid, Typography } from '@mui/material';
import { Fragment, isValidElement, memo } from 'react';

import rem from '@/core/utils/rem';

import type { InfoGridProps } from './types';

function InfoGrid({ datasource }: InfoGridProps) {
  return (
    <Grid container spacing={rem(16)}>
      {datasource.map((datum, index) => {
        const isNode = isValidElement(datum.value);
        const styleConfig = {
          gridKeySize: datum.styleConfig?.gridKeySize || 3,
          gridValueSize: datum.styleConfig?.gridValueSize || 9,
          textKeyFontColor:
            datum.styleConfig?.textKeyFontColor || 'text.primary',
          textKeyFontWeight: datum.styleConfig?.textKeyFontWeight || 700,
          textValueFontColor:
            datum.styleConfig?.textValueFontColor || 'primary.main',
          textValueFontWeight: datum.styleConfig?.textValueFontWeight || 400,
        };

        return (
          <Fragment key={index}>
            <Grid
              alignContent={datum.centerKey ? 'center' : undefined}
              size={{ xs: styleConfig.gridKeySize }}
            >
              <Typography
                variant="body1"
                fontWeight={styleConfig.textKeyFontWeight}
                color={styleConfig.textKeyFontColor}
              >
                {datum.key}
              </Typography>
            </Grid>

            <Grid size={{ xs: styleConfig.gridValueSize }}>
              {isNode ? (
                <Fragment>{datum.value}</Fragment>
              ) : (
                <Typography
                  sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                  variant="body1"
                  fontWeight={styleConfig.textValueFontWeight}
                  color={styleConfig.textValueFontColor}
                >
                  {datum.value || '-'}
                </Typography>
              )}
            </Grid>
          </Fragment>
        );
      })}
    </Grid>
  );
}

export default memo(InfoGrid);
