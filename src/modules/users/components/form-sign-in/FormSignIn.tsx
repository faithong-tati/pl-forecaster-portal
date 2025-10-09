import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, Stack } from '@mui/material';
import { memo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '@/core/components/button';
import FormGenerator from '@/core/components/form-generator';
import rem from '@/core/utils/rem';

function FormSignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { t } = useTranslation('signIn');
  const { clearErrors } = useFormContext();

  return (
    <Stack spacing={rem(24)}>
      <FormGenerator
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            },
          },
        ]}
      />

      <Button type="submit" fullWidth variant="contained" size="large">
        {t('form.buttons.submit')}
      </Button>
    </Stack>
  );
}

export default memo(FormSignIn);
