import { memo, useEffect } from 'react';
import { useImmer } from 'use-immer';

import NotSupport from '@/core/components/not-support';
import AuthContext from '@/core/contexts/auth-context';
import { CookieAuth } from '@/core/lib/constants';
import { getCookie } from '@/core/lib/helpers';
import { useDeviceUid } from '@/core/lib/hooks/use-device-uid';
import { useScreenMediaType } from '@/core/lib/hooks/use-screen-media-type';
import { useGetUserById } from '@/modules/users/hooks/api/use-get-user-by-id';

import type { AuthProviderState } from './types';
import type { PropsWithChildren } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useImmer<AuthProviderState>({
    isAuth: false,
    loading: false,
    username: null,
  });

  // hook
  const { deviceUid } = useDeviceUid();
  const cookieDeviceUid = getCookie(CookieAuth);
  const { mediaType } = useScreenMediaType();
  // async hook
  const { data } = useGetUserById({ providerRef: deviceUid });

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

  if (mediaType === 'mobile') {
    return <NotSupport />;
  }

  return (
    <AuthContext.Provider
      value={{ authState, setAuthState, user: data ?? null }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default memo(AuthProvider);
