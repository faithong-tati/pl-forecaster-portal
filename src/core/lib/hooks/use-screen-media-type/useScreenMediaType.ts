import type { MediaType } from './types';

export function useScreenMediaType() {
  const isMobile = window.matchMedia('(max-width: 810px)').matches;

  return {
    mediaType: isMobile ? 'mobile' : ('desktop' as MediaType),
  };
}
