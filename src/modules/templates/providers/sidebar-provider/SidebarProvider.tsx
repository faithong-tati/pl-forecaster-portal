import { memo } from 'react';
import { useImmer } from 'use-immer';

import SidebarContext from '@/modules/templates/contexts/auth-context';

import type { SidebarProviderState } from './types';
import type { PropsWithChildren } from 'react';

function SidebarProvider({ children }: PropsWithChildren) {
  const [state, setState] = useImmer<SidebarProviderState>({
    isOpenSideBar: false,
    isOpenConfirmSignOutModal: false,
  });

  return (
    <SidebarContext.Provider value={{ state, setState }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default memo(SidebarProvider);
