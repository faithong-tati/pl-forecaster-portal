import { createContext } from 'react';

import type { IToastContext } from './types';

const ToastContext = createContext<IToastContext>({
  onOpen: () => {},
});

export default ToastContext;
