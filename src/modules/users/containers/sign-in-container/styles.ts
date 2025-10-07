import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKeys = 'primaryStack' | 'backgroundStack' | 'paper' | 'smallLogo';

export const Styles: SxInlineStyles<SxKeys> = {
  primaryStack: {
    minHeight: '100dvh',
    bgcolor: 'background.default',
    display: 'grid',
    placeItems: 'center',
  },
  backgroundStack: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.8) saturate(1.05)',
  },
  paper: {
    width: '100%',
    maxWidth: rem(1100),
    borderRadius: rem(16),
    overflow: 'hidden',
    bgcolor: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(16px) saturate(160%)',
    border: '1px solid rgba(255,255,255,0.35)',
    boxShadow: `
      0 8px 32px rgba(0,0,0,0.25),
      0 0 40px 8px rgba(240, 227, 221, 0.35)
    `,
  },
  smallLogo: {
    width: rem(32),
    paddingBottom: rem(4),
  },
};
