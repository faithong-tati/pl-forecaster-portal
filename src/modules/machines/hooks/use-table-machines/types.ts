import type { Updater } from 'use-immer';

export interface UseTableMachinesState {
  currentId: string;
  isOpenCreateModal: boolean;
  isOpenDeleteModal: boolean;
  isOpenEditModal: boolean;
}

export interface UseColumnProps {
  setModalState: Updater<UseTableMachinesState>;
}
