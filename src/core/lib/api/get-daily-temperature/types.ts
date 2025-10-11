import type {
  UseCustomQueryOptions,
  UseCustomQueryResult,
} from '@/core/types/api';

type Daily = {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
};

type DailyUnits = {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
};

export interface GetDailyTemperatureResponse {
  daily: Daily;
  daily_units: DailyUnits;
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
