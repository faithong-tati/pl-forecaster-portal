import dayjs from 'dayjs';
import { useCallback, useContext } from 'react';
import { useImmer } from 'use-immer';

import AuthContext from '@/core/contexts/auth-context';
import { useDeviceUid } from '@/core/lib/hooks/use-device-uid';
import { useToast } from '@/core/providers/toast-provider/useToast';
import { useDeleteMachine } from '@/modules/machines/hooks/api/use-delete-machine';
import { useGetMachineById } from '@/modules/machines/hooks/api/use-get-machine-by-id';
import { useGetMachines } from '@/modules/machines/hooks/api/use-get-machines';
import { usePatchMachine } from '@/modules/machines/hooks/api/use-patch-machine';
import { usePostMachine } from '@/modules/machines/hooks/api/use-post-machine';

import type { UseTableMachinesState } from './types';
import type { UpsertSchemaFormData } from '@/modules/machines/containers/table-machines-container/schema';

export function useSubmitEvent() {
  const { user } = useContext(AuthContext);
  const { deviceUid } = useDeviceUid();
  const toast = useToast();
  // state
  const [modalState, setModalState] = useImmer<UseTableMachinesState>({
    isOpenCreateModal: false,
    isOpenEditModal: false,
    isOpenDeleteModal: false,
    currentId: '',
  });

  const onCloseModal = useCallback(() => {
    setModalState((draft) => {
      draft.currentId = '';
      draft.isOpenCreateModal = false;
      draft.isOpenEditModal = false;
      draft.isOpenDeleteModal = false;
    });
  }, [setModalState]);

  // async hooks
  const { data, refetch } = useGetMachines();
  const { data: getMachine } = useGetMachineById(
    // * to prevent stale and ensure accurate data
    { id: modalState.currentId },
    { enabled: !!modalState.currentId },
  );

  const { mutateAsync: postMachineApi } = usePostMachine({
    onSuccess: () => {
      onCloseModal();
      refetch();

      toast.onOpen('createMachine.success', 'success');
    },
    onError: () => {
      toast.onOpen('createMachine.failed', 'error');
    },
  });

  const { mutateAsync: patchMachineApi } = usePatchMachine({
    onSuccess: () => {
      onCloseModal();
      refetch();

      toast.onOpen('editMachine.success', 'success');
    },
    onError: () => {
      toast.onOpen('editMachine.failed', 'error');
    },
  });

  const { mutateAsync: deleteMachineApi } = useDeleteMachine({
    onSuccess: () => {
      onCloseModal();
      refetch();

      toast.onOpen('deleteMachine.success', 'success');
    },
    onError: () => {
      toast.onOpen('deleteMachine.failed', 'error');
    },
  });

  // event
  const checkDuplicate = useCallback(
    (machineName: string) => {
      return data?.find((datum) => datum.name === machineName);
    },
    [data],
  );

  const onSubmitCreate = useCallback(
    async (formData: UpsertSchemaFormData) => {
      const found = checkDuplicate(formData.name);

      if (found) {
        toast.onOpen('duplicateMachine.failed', 'error');

        return;
      }

      await postMachineApi({
        ...formData,
        createdAt: dayjs().toISOString(),
        updatedAt: dayjs().toISOString(),
        createdBy: user?.username ?? deviceUid,
        updatedBy: user?.username ?? deviceUid,
        createdByUserId: user?.id ?? '',
        updatedByUserId: user?.id ?? '',
      });
    },
    [
      checkDuplicate,
      deviceUid,
      postMachineApi,
      toast,
      user?.id,
      user?.username,
    ],
  );

  const onSubmitUpdate = useCallback(
    async (formData: UpsertSchemaFormData) => {
      if (!getMachine?.id) {
        toast.onOpen('editMachine.failed', 'error');

        return;
      }

      const existingMachine = checkDuplicate(formData.name);
      const found =
        existingMachine && existingMachine.id !== modalState.currentId;

      if (found) {
        toast.onOpen('duplicateMachine.failed', 'error');

        return;
      }

      await patchMachineApi({
        ...formData,
        id: getMachine?.id ?? '',
        updatedAt: dayjs().toISOString(),
        updatedBy: user?.username ?? deviceUid,
        updatedByUserId: user?.id ?? '',
      });
    },
    [
      checkDuplicate,
      deviceUid,
      getMachine?.id,
      modalState.currentId,
      patchMachineApi,
      toast,
      user?.id,
      user?.username,
    ],
  );

  const onSubmitDelete = useCallback(async () => {
    if (!getMachine?.id) {
      toast.onOpen('deleteMachine.failed', 'error');

      return;
    }

    await deleteMachineApi({ id: getMachine?.id ?? '' });
  }, [deleteMachineApi, getMachine?.id, toast]);

  return {
    data,
    getMachine,
    modalState,
    setModalState,
    onSubmitCreate,
    onSubmitUpdate,
    onSubmitDelete,
    onCloseModal,
  };
}
