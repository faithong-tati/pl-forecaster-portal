import axios from 'axios';

import { Environment } from '@/core/constants';

import type { FetchParams } from './types';
import type { AxiosPromise } from 'axios';

export function fetchAPI<T = unknown>({
  url = Environment.API_ENDPOINT,
  path,
  ...options
}: FetchParams): AxiosPromise<T> {
  return axios({
    baseURL: url,
    url: path,
    ...options,
  });
}
