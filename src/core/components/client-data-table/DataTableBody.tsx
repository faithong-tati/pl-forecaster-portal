import { SearchOffRounded } from '@mui/icons-material';
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { flexRender } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

import rem from '@/core/utils/rem';

import type { DataTableBodyProps } from './types';

function DataTableBody({ table }: DataTableBodyProps) {
  const { t } = useTranslation('machine');
  const rows = table.getRowModel().rows;
  const colSpan = table.getAllLeafColumns().length || 1;

  if (!rows.length) {
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
              <Typography>{t('table.notFound')}</Typography>
            </Stack>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          hover
          sx={{
            '&:nth-of-type(even)': {
              bgcolor: (theme) => theme.palette.action.hover,
            },
          }}
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(
                cell.column.columnDef.cell ?? ((info) => info.getValue()),
                cell.getContext(),
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default DataTableBody;
