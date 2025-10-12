import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { memo } from 'react';

import { CoreSx } from '@/core/styles/common';
import rem from '@/core/utils/rem';

import type { ListItemProps } from './types';

function ListItem({ icon, label, open, isActive, onClick }: ListItemProps) {
  return (
    <Tooltip title={open ? '' : label} placement="right">
      <ListItemButton
        selected={isActive}
        sx={{
          'pl': rem(18),
          'borderRadius': 2,
          'height': rem(50),
          '&.Mui-selected': {
            'color': (theme) => theme.palette.primary.main,
            '& .MuiListItemIcon-root': {
              color: (theme) => theme.palette.primary.main,
            },
            '& .MuiTypography-root': {
              color: (theme) => theme.palette.primary.main,
              fontWeight: 600,
            },
          },
          '&:hover': {
            '& .MuiListItemIcon-root': {
              transition: 'transform 0.1s ease',
              transform: 'scale(1.2)',
              color: (theme) => theme.palette.primary.main,
            },
            '& .MuiTypography-root': {
              color: (theme) => theme.palette.primary.main,
              fontWeight: 600,
            },
          },
        }}
        onClick={onClick}
      >
        <ListItemIcon sx={{ minWidth: 40, ...CoreSx.hoverIcon }}>
          {icon}
        </ListItemIcon>

        <Collapse
          in={open}
          orientation="horizontal"
          timeout={300}
          unmountOnExit
        >
          <Typography sx={{ width: rem(200) }}>{label}</Typography>
        </Collapse>
      </ListItemButton>
    </Tooltip>
  );
}

export default memo(ListItem);
