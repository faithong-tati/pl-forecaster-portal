import { createFileRoute, redirect } from '@tanstack/react-router';

import { DefaultLocale } from '../core/constants';

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: `/${DefaultLocale}` });
  },
});
