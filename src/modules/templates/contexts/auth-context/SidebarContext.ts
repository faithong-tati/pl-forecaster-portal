import { createContext } from 'react';

import type { ISidebarContext } from './types';

const SidebarContext = createContext<ISidebarContext>({
  state: {
    isOpenSideBar: false,
    isOpenConfirmSignOutModal: false,
  },
  setState: () => {},
});

export default SidebarContext;
