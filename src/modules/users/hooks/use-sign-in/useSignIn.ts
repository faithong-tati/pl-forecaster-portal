import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from '@tanstack/react-router';
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
  const navigate = useNavigate();
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

      navigate({
        to: `/$locale${Routes.dashboard.path}`,
        params: { locale: i18n.language },
      });
    },
    [deviceUid, i18n.language, navigate, postUserApi, toast],
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
          'https://static.wixstatic.com/media/6dd24e_4e6cb95702e641efa5cf4a7e317a3dea~mv2.png/v1/fill/w_280,h_257,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TAMATiAN.png',
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
