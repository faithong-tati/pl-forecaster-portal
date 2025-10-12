import { fetchAPI } from '@/core/lib/api/fetcher';

import type { GetDailyTemperatureResponse } from './types';

export async function getDailyTemperature(): Promise<GetDailyTemperatureResponse> {
  const url = 'https://api.open-meteo.com';
  const path =
    '/v1/forecast?latitude=13.754&longitude=100.5014&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok';

  const { data } = await fetchAPI<GetDailyTemperatureResponse>({
    url,
    method: 'GET',
    path,
  });

  return data;
}
