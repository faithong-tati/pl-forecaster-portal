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
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
}

export type ICriteria = `${Criteria}`;
