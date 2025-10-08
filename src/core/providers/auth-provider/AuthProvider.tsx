import { memo, useEffect } from 'react';
import { useImmer } from 'use-immer';

import AuthContext from '@/core/contexts/auth-context';
import { CookieAuth } from '@/core/lib/constants';
import { getCookie } from '@/core/lib/helpers';
import { useDeviceUid } from '@/core/lib/hooks/use-device-uid';

import type { AuthProviderState } from './types';
import type { PropsWithChildren } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useImmer<AuthProviderState>({
    isAuth: false,
    loading: false,
    username: null,
  });

  const { deviceUid } = useDeviceUid();
  const cookieDeviceUid = getCookie(CookieAuth);

  useEffect(() => {
    setAuthState((draft) => {
      draft.loading = true;
    });

    setAuthState((draft) => {
      draft.isAuth = !!deviceUid && deviceUid === cookieDeviceUid;
    });

    setAuthState((draft) => {
      draft.loading = false;
    });
  }, [cookieDeviceUid, deviceUid, setAuthState]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default memo(AuthProvider);
