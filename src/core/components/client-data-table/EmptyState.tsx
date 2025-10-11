import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import Image from '@/core/components/image';
import rem from '@/core/utils/rem';

import type { EmptyStateProps } from './types';

function EmptyState({ title, table }: EmptyStateProps) {
  const colSpan = table.getAllLeafColumns().length || 1;

  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colSpan} sx={{ p: 0, border: 0 }}>
          <Stack
            alignItems="center"
            justifyContent="center"
            gap={rem(16)}
            sx={{ minHeight: 320, py: rem(32), color: 'text.secondary' }}
          >
            <Image
              alt="vending-machine"
              src="/vending-machine.png"
              sx={{ width: rem(50) }}
            />
            <Typography variant="caption">{title}</Typography>
          </Stack>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default EmptyState;
