// import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';
// import { memo } from 'react';

// import type { GoogleJwtPayload } from '@/core/lib/types';
// import { getCookie, setCookie } from '@/core/lib/helpers';
// import { CookieAuth } from '@/core/lib/constants';
// import { Button } from '@mui/material';

// function PageSignIn() {
//   const login = useGoogleLogin({
//     flow: 'implicit', // ได้ access_token ทันที
//     scope: 'openid email profile',
//     onSuccess: async (token) => {
//       // ดึงโปรไฟล์ผู้ใช้ด้วย access_token
//       const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
//         headers: { Authorization: `Bearer ${token.access_token}` },
//       });

//       const profile = (await res.json()) as GoogleJwtPayload;

//       // เก็บไว้เหมือนเดิมตามโค้ดเดิมของหนู
//       setCookie({
//         key: CookieAuth,
//         value: JSON.stringify({
//           accessToken: token.access_token,
//           profile,
//         }),
//       });
//       localStorage.setItem('google_access_token', token.access_token);
//       localStorage.setItem('google_user', JSON.stringify(profile));

//       console.log('✅ Google profile:', profile);
//     },
//     onError: () => console.error('❌ Login Failed'),
//   });

//   return (
//     // <div>

//     //   <GoogleLogin
//     //     onSuccess={(cred) => {
//     //       const token = cred.credential!;
//     //       const profile = jwtDecode<GoogleJwtPayload>(token);

//     //       console.log('✅ Google profile:', profile);

//     //       setCookie({
//     //         key: CookieAuth,
//     //         value: JSON.stringify({ token, profile }),
//     //       });

//     //       localStorage.setItem('google_token', token);
//     //       localStorage.setItem('google_user', JSON.stringify(profile));

//     //       console.log(getCookie(CookieAuth))
//     //     }}
//     //     onError={() => console.error('❌ Login Failed')}
//     //     // useOneTap
//     //   />
//     // </div>
//     <Button onClick={() => login()}>Login</Button>
//   );
// }

// export default memo(PageSignIn);

// import { memo } from 'react';

// import SignInContainer from '@/modules/users/containers/sign-in-container';

// function PageSignIn() {
//   return <SignInContainer />;
// }

// export default memo(PageSignIn);

// import GoogleIcon from '@mui/icons-material/Google';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import {
//   Box,
//   Divider,
//   IconButton,
//   InputAdornment,
//   Stack,
//   Typography,
// } from '@mui/material';
// import { useState } from 'react';

// import Button from '@/core/components/button';
// import InputText from '@/core/components/input-text';
// import { Panel } from '@/core/styles/common';
// import rem from '@/core/utils/rem';

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <Stack
//       sx={{
//         flexDirection: { xs: 'column-reverse', lg: 'row' },
//         margin: { xs: rem(32), lg: rem(200) },
//         height: { xs: `calc(100vh - 64px)`, lg: `calc(100vh - 400px)` },
//       }}
//       bgcolor="wheat"
//       borderRadius={rem(16)}
//     >
//       <Panel
//         sx={{
//           padding: {xs: rem(32), lg: rem(72)},
//           position: 'relative',
//           width: { xs: 'calc(100% - 64px)' },
//         }}
//       >
//         <Box
//           component="img"
//           alt="Integration preview"
//           src="/logo.svg"
//           sx={{
//             top: 16,
//             right: 16,
//             width: rem(100),
//             position: 'absolute',
//             boxShadow: rem(24),
//           }}
//         />

//         <Stack gap={rem(8)}>
//           <Typography variant="h4">Sign In</Typography>
//           <Typography variant="body2">Welcome back! </Typography>
//         </Stack>

//         <Button
//           fullWidth
//           variant="outlined"
//           startIcon={<GoogleIcon />}
//           sx={{ textTransform: 'none', py: 1.25 }}
//         >
//           Google
//         </Button>

//         <Stack direction="row" alignItems="center" spacing={1}>
//           <Divider sx={{ flex: 1 }} />
//           <Typography variant="caption" color="text.secondary">
//             or continue with email
//           </Typography>
//           <Divider sx={{ flex: 1 }} />
//         </Stack>

//         <InputText fullWidth label="Email" type="email" autoComplete="email" />

//         <InputText
//           fullWidth
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           autoComplete="current-password"
//           slotProps={{
//             input: {
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     edge="end"
//                     aria-label="toggle password visibility"
//                     onClick={() => setShowPassword((s) => !s)}
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             },
//           }}
//         />

//         <Button
//           fullWidth
//           variant="contained"
//           size="large"
//           sx={{ py: 1.25, fontWeight: 700 }}
//         >
//           Sign In
//         </Button>
//       </Panel>

//       <Stack padding={rem(32)} width="100%" height="100%">
//         Right
//       </Stack>
//     </Stack>
//   );
// }

import { memo } from 'react';

import SignInContainer from '@/modules/users/containers/sign-in-container';

function LoginPage() {
  return <SignInContainer />;
}

export default memo(LoginPage);
