import { Stack, Tooltip, Typography } from '@mui/material';
import { memo, useEffect, useRef, useState } from 'react';

import rem from '@/core/utils/rem';

import type { TextTruncateProps } from './types';

function TextTruncate({ children, ...props }: TextTruncateProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);

  useEffect(() => {
    const el = textRef.current;

    if (!el) return;

    const hasOverflow = el.scrollWidth > el.clientWidth;

    setIsOverflowed(hasOverflow);
  }, [children, props.width]);

  const content = (
    <Stack>
      <Typography
        ref={textRef}
        sx={{
          display: 'block',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        variant="body2"
        {...props}
      >
        {children}
      </Typography>
    </Stack>
  );

  return isOverflowed ? (
    <Tooltip
      title={children}
      slotProps={{ tooltip: { sx: { fontSize: rem(12) } } }}
    >
      {content}
    </Tooltip>
  ) : (
    content
  );
}

export default memo(TextTruncate);
