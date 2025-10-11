import { keyframes } from '@emotion/react';

import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKeys = 'imageStack' | 'image' | 'textStack';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Styles: SxInlineStyles<SxKeys> = {
  imageStack: {
    backgroundColor: (theme) => theme.palette.error.light,
    boxShadow: (theme) => theme.shadows[8],
    animation: `${fadeIn} 0.8s ease forwards`,
  },
  image: {
    width: rem(200),
  },
  textStack: {
    animation: `${fadeIn} 0.8s ease 0.2s forwards`,
    opacity: 0,
  },
};
