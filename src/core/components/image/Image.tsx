import { Box } from '@mui/material';

import type { ImageProps } from './types';

function Image({ sx, alt, src }: ImageProps) {
  return <Box component="img" alt={alt} src={src} sx={sx} />;
}

export default Image;
