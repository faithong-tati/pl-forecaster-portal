import { keyframes } from '@emotion/react';

import rem from '@/core/utils/rem';

import type { SxInlineStyles } from '@/core/types';

type SxKeys = 'primaryStack' | 'radialStack' | 'title' | 'subtitle';

const animationStyles = {
  typing: keyframes`
    from { width: 0 }
    to   { width: 100% }
  `,
  blink: keyframes`
    0%,100% { opacity: 0 }
    50%     { opacity: 1 }
  `,
};

export const Styles: SxInlineStyles<SxKeys> = {
  primaryStack: {
    position: 'relative',
    height: { xs: rem(240), sm: rem(300), md: '100%' },
    bgcolor: 'primary.main',
    color: 'primary.contrastText',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radialStack: {
    position: 'absolute',
    inset: 0,
    background:
      'radial-gradient(60% 60% at 70% 40%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)',
  },
  title: {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'width': 0,
    'position': 'relative',
    'animation': `${animationStyles.typing} 3s steps(40, end) 0s forwards`,
    '&::after': {
      content: '""',
      position: 'absolute',
      right: -3,
      top: '0.2em',
      height: '1em',
      width: '2px',
      backgroundColor: 'currentColor',
      opacity: 0,
      animation: `${animationStyles.blink} 0.75s step-end 3s 4 forwards`,
    },
  },
  subtitle: {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'overflow': 'hidden',
    'width': 0,
    'position': 'relative',
    'animation': `${animationStyles.typing} 3s steps(40, end) 4s forwards`,
    '&::after': {
      content: '""',
      position: 'absolute',
      right: -3,
      top: '0.2em',
      height: '1em',
      width: '2px',
      backgroundColor: 'currentColor',
      opacity: 0,
      animation: `${animationStyles.blink} 0.75s step-end 7s 4 forwards`,
    },
  },
};
