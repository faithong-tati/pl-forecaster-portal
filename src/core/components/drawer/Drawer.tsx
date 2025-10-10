import { Drawer as MuiDrawer } from '@mui/material';
import { memo } from 'react';

import rem from '@/core/utils/rem';
import {
  CollapsedWidth,
  ExpandedWidth,
} from '@/modules/templates/components/sidebar/constants';

import type { DrawerProps } from './types';

function Drawer({ open, children, ...props }: DrawerProps) {
  const width = open ? ExpandedWidth : CollapsedWidth;

  return (
    <MuiDrawer
      {...props}
      open={open}
      variant="permanent"
      slotProps={{
        paper: {
          sx: {
            width,
            overflow: 'hidden',
            border: 0,
            borderTopRightRadius: rem(16),
            borderBottomRightRadius: rem(16),
            boxShadow: `${rem(0)} ${rem(16)} ${rem(32)} rgba(0,0,0,0.2)`,
            bgcolor: (theme) => theme.palette.background.default,
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.standard,
                easing: theme.transitions.easing.easeInOut,
              }),
          },
        },
      }}
    >
      {children}
    </MuiDrawer>
  );
}

export default memo(Drawer);
