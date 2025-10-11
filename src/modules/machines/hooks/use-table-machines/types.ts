import type { OptionT } from '@/core/types';
import type { Updater } from 'use-immer';

export interface UseTableMachinesState {
  currentId: string;
  isClone: boolean;
  isOpenCreateModal: boolean;
  isOpenDeleteModal: boolean;
  isOpenEditModal: boolean;
}

export interface UseColumnProps {
  locationTypeOptions: OptionT[];
  setModalState: Updater<UseTableMachinesState>;
}
