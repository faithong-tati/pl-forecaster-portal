import { createContext } from 'react';

import type { IAuthContext } from './types';

const AuthContext = createContext<IAuthContext>({
  authState: {
    isAuth: false,
    username: null,
  },
  setAuthState: () => {},
});

export default AuthContext;
