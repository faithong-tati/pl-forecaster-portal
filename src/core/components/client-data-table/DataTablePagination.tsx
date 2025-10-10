import {
  Box,
  Pagination,
  Stack,
  TablePagination,
  Typography,
} from '@mui/material';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { formatNumber } from '@/core/utils/format';
import rem from '@/core/utils/rem';

import { RowsPerPageOptions } from './constants';

import type { DataTablePaginationProps } from './types';

function DataTablePagination({
  table,
  rows,
  pageIndex,
  pageSize,
}: DataTablePaginationProps) {
  const { t } = useTranslation('core');
  // const
  const totalItems = useMemo(() => rows.length, [rows.length]);
  const from = useMemo(() => pageIndex * pageSize + 1, [pageIndex, pageSize]);
  const to = useMemo(
    () => Math.min((pageIndex + 1) * pageSize, totalItems),
    [pageIndex, pageSize, totalItems],
  );

  const displayItems = useMemo(() => {
    return t('table.displayItems', {
      from: formatNumber(from),
      to: formatNumber(to),
      total: formatNumber(totalItems),
    });
  }, [from, t, to, totalItems]);

  return (
    <Box
      sx={{
        px: rem(16),
        py: rem(8),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: (theme) => theme.palette.grey[50],
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2">{displayItems}</Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <TablePagination
          component="div"
          count={totalItems}
          page={pageIndex}
          onPageChange={(_, page) => table.setPageIndex(page)}
          rowsPerPage={pageSize}
          rowsPerPageOptions={RowsPerPageOptions}
          onRowsPerPageChange={(e) => {
            table.setPageSize(Number(e.target.value));
            table.setPageIndex(0);
          }}
          labelDisplayedRows={() => ''}
          labelRowsPerPage={t('table.itemsPerPage')}
          sx={{ '& .MuiTablePagination-actions': { display: 'none' } }}
        />

        <Pagination
          color="primary"
          shape="rounded"
          page={pageIndex + 1}
          count={table.getPageCount()}
          showFirstButton
          showLastButton
          onChange={(_, p) => table.setPageIndex(p - 1)}
        />
      </Stack>
    </Box>
  );
}

export default memo(DataTablePagination);
