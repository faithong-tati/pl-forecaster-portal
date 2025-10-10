import { SearchOffRounded } from '@mui/icons-material';
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

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
            gap={rem(4)}
            sx={{ minHeight: 320, py: rem(32), color: 'text.secondary' }}
          >
            <SearchOffRounded sx={{ fontSize: 40 }} />
            <Typography>{title}</Typography>
          </Stack>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default EmptyState;
