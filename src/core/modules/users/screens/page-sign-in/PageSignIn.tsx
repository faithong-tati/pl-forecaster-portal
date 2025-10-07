import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { memo } from 'react';

import type { GoogleJwtPayload } from '@/core/lib/types';

function PageSignIn() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(cred) => {
          const token = cred.credential!;
          const profile = jwtDecode<GoogleJwtPayload>(token);

          console.log('✅ Google profile:', profile);

          localStorage.setItem('google_token', token);
          localStorage.setItem('google_user', JSON.stringify(profile));
        }}
        onError={() => console.error('❌ Login Failed')}
        // useOneTap
      />
    </div>
  );
}

export default memo(PageSignIn);
