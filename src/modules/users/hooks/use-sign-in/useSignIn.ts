import { useGoogleLogin } from '@react-oauth/google';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/core/constants';
import { getGoogleUser } from '@/core/lib/api/get-google-user';
import { CookieAuth } from '@/core/lib/constants';
import { setCookie } from '@/core/lib/helpers';
import { useDeviceUid } from '@/core/lib/hooks/use-device-uid';
import { useToast } from '@/core/providers/toast-provider/useToast';
import { getUserById } from '@/modules/users/api/get-user-by-id';
import { PostUserParams } from '@/modules/users/api/post-user/types';
import { usePostUser } from '@/modules/users/hooks/api/use-post-user';

import type { GoogleJwtPayload } from '@/core/lib/types';
import type { SchemaFormData } from '@/modules/users/containers/sign-in-container/schema';

export default function useSignIn() {
  const { i18n } = useTranslation();
  const toast = useToast();
  const { deviceUid } = useDeviceUid();
  // async hooks
  const { mutateAsync: postUserApi } = usePostUser({
    onError: () => {
      toast.onOpen('signIn.failed', 'error');
    },
  });

  // events
  const checkOrCreateUse = useCallback(
    async (payload: PostUserParams) => {
      const response = await getUserById({ providerRef: deviceUid });

      if (!response.providerRef) {
        await postUserApi(payload);
      }

      setCookie({ key: CookieAuth, value: deviceUid });

      toast.onOpen('signIn.success', 'success');

      location.replace(`/${i18n.language}${Routes.dashboard.path}`);
    },
    [deviceUid, i18n.language, postUserApi, toast],
  );

  const onSignInWithGoogle = useGoogleLogin({
    flow: 'implicit',
    scope: 'openid email profile',
    onSuccess: async (token) => {
      const response = await getGoogleUser({ token: token.access_token });
      const profile: GoogleJwtPayload = await response.json();

      await checkOrCreateUse({
        email: profile.email,
        providerRef: deviceUid,
        imageUrl: profile.picture,
        username: profile.sub,
        createdAt: dayjs().toISOString(),
      });
    },
    onError: () => {
      toast.onOpen('signIn.failed', 'error');
    },
  });

  const onSignInWithEmail = useCallback(
    async (data: SchemaFormData) => {
      await checkOrCreateUse({
        email: data.email,
        providerRef: deviceUid,
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftaobinsbm.com%2F&psig=AOvVaw0hSylujRhM3MxTmWOusSxQ&ust=1760366827089000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKjT0tTznpADFQAAAAAdAAAAABAE',
        username: data.email,
        createdAt: dayjs().toISOString(),
      });
    },
    [checkOrCreateUse, deviceUid],
  );

  return {
    onSignInWithGoogle,
    onSignInWithEmail,
  };
}
