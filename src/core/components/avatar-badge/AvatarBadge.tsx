import { Avatar } from '@mui/material';
import { memo } from 'react';

import { Badge, Styles } from './styles';

import type { AvatarBadgeProps } from './types';

function AvatarBadge({ imageUrl }: AvatarBadgeProps) {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar src={imageUrl} sx={Styles.avatar} />
    </Badge>
  );
}

export default memo(AvatarBadge);
