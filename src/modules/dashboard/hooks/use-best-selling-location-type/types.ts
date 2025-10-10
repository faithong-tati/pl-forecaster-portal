import type { ILocationType } from '@/core/types/models/machine.model';

export type InitialSummary = Record<
  string,
  { totalCount: number; totalExpectedSalesPerDay: number }
>;

export interface SummarizeMachine {
  locationType: ILocationType;
  rank: number;
  totalCount: number;
  totalExpectedSalesPerDay: number;
}

export enum Criteria {
  ALL_TIME = 'all-time',
  LAST_SEVEN_DAYS = 'last-7',
}

export type ICriteria = `${Criteria}`;
