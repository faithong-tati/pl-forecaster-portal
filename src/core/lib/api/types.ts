import type { AxiosRequestConfig } from 'axios';

export interface FetchParams extends AxiosRequestConfig {
  path: string;
  url?: string;
}
