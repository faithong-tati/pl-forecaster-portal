import { zodResolver } from '@hookform/resolvers/zod';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { memo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '@/core/components/button';
import FormGenerator from '@/core/components/form-generator';
import { GoogleIcon } from '@/core/components/icon';
import Image from '@/core/components/image';
import rem from '@/core/utils/rem';
import SignInLogoCard from '@/modules/users/components/sign-in-logo-card';
import useSignIn from '@/modules/users/hooks/use-sign-in';

import { Schema } from './schema';
import { Styles } from './styles';

import type { SchemaFormData } from './schema';

function SignInContainer() {
  const { t } = useTranslation('signIn');
  const { t: tCore } = useTranslation('core');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { onSignInWithGoogle, onSignInWithEmail } = useSignIn();
  // form
  const methods = useForm<SchemaFormData>({
    resolver: zodResolver(Schema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { email: '', password: '' },
  });

  const { control, handleSubmit, clearErrors } = methods;

  return (
    <Stack sx={Styles.primaryStack}>
      <Stack
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={Styles.backgroundStack}
      >
        <source src="/videos/coffee.mp4" type="video/mp4" />
      </Stack>

      <Paper elevation={3} sx={Styles.paper}>
        <Grid container>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack height="100%" alignItems="center" justifyContent="center">
              <Stack p={rem(64)} width="100%" maxWidth={rem(420)} spacing={2.5}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Image
                    alt="small-log"
                    src="/logo.svg"
                    sx={Styles.smallLogo}
                  />

                  <Typography variant="h6" fontWeight={700}>
                    {tCore('system')}
                  </Typography>
                </Stack>

                <Stack spacing={0.5}>
                  <Typography variant="h5" fontWeight={800}>
                    {t('form.title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('form.subtitle')}
                  </Typography>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    size="large"
                    onClick={() => onSignInWithGoogle()}
                  >
                    {t('form.fields.google')}
                  </Button>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Divider sx={{ flex: 1 }} />
                  <Typography variant="caption" color="text.secondary">
                    {t('form.orContinueWith')}
                  </Typography>
                  <Divider sx={{ flex: 1 }} />
                </Stack>

                <FormProvider {...methods}>
                  <form noValidate onSubmit={handleSubmit(onSignInWithEmail)}>
                    <Stack spacing={rem(24)}>
                      <FormGenerator<SchemaFormData>
                        control={control}
                        items={[
                          {
                            name: 'email',
                            component: 'input-text',
                            type: 'email',
                            label: t('form.fields.email'),
                            t,
                            onChange: () => clearErrors('email'),
                          },
                          {
                            name: 'password',
                            component: 'input-text',
                            type: showPassword ? 'text' : 'password',
                            label: t('form.fields.password'),
                            t,
                            onChange: () => clearErrors('password'),
                            slotProps: {
                              input: {
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      edge="end"
                                      onClick={() => setShowPassword((s) => !s)}
                                    >
                                      {showPassword ? (
                                        <VisibilityOff />
                                      ) : (
                                        <Visibility />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              },
                            },
                          },
                        ]}
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                      >
                        {t('form.buttons.submit')}
                      </Button>
                    </Stack>
                  </form>
                </FormProvider>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <SignInLogoCard />
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
}

export default memo(SignInContainer);
