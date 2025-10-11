import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKeys = 'panel' | 'medalIcon' | 'grid';

export const Styles: SxInlineStyles<SxKeys> = {
  panel: {
    'position': 'relative',
    'gap': rem(16),
    'transition': 'height 0.8s ease, box-shadow 0.8s ease, transform 0.8s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: (theme) => theme.shadows[4],
    },
    'padding': rem(16),
  },
  medalIcon: {
    width: rem(60),
    mx: 'auto',
    position: 'absolute',
    top: -40,
    left: `50%`,
    right: `50%`,
    transform: 'translateX(-50%)',
  },
  grid: {
    transition: 'all 0.8s ease',
    opacity: 0,
    transform: 'translateY(10px)',
    animation: 'fadeInCard 0.8s ease forwards',
  },
};
