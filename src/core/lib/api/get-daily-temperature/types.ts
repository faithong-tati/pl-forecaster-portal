import type {
  UseCustomQueryOptions,
  UseCustomQueryResult,
} from '@/core/types/api';

export interface TemperatureDaily {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
}

interface TemperatureDailyUnits {
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
}

export interface GetDailyTemperatureResponse {
  daily: TemperatureDaily;
  daily_units: TemperatureDailyUnits;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export type QueryOptionsGetDailyTemperature =
  UseCustomQueryOptions<GetDailyTemperatureResponse>;

export type QueryResultsGetDailyTemperature =
  UseCustomQueryResult<GetDailyTemperatureResponse>;
