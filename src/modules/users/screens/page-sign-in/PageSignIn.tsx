import { memo } from 'react';

import SignInContainer from '@/modules/users/containers/sign-in-container';

function LoginPage() {
  return <SignInContainer />;
}

export default memo(LoginPage);
