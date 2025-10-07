import { createFileRoute } from '@tanstack/react-router';
import { memo } from 'react';

export const Route = createFileRoute('/')({
  component: memo(Index),
});

function Index() {
  return <div>Temp Index</div>;
}
