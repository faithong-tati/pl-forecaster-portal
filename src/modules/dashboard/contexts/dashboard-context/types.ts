import type { MachineModel } from '@/core/types/models';

export interface IDashboardContext {
  isLoading: boolean;
  lastUpdated: string;
  machines: MachineModel[];
}
