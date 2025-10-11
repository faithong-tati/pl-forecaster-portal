import { memo } from 'react';

import InfoCard from '@/core/components/info-card';

function SevenDaysForecastContainer() {
  return <InfoCard title="7-days Forecast">temp</InfoCard>;
}

export default memo(SevenDaysForecastContainer);
