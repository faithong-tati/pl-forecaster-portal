import { Typography } from '@mui/material';
import { memo } from 'react';

import { BorderStack } from '@/core/styles/common';

function TopMachineContainer() {
  return (
    <BorderStack>
      <Typography variant="h6" fontWeight={500}>
        Top 3 Machines
      </Typography>
    </BorderStack>
  );
}

export default memo(TopMachineContainer);
