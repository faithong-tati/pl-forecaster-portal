export enum LocationType {
  HOSPITAL = 'HOSPITAL',
  SCHOOL = 'SCHOOL',
  SHOPPING_MALL = 'SHOPPING_MALL',
}

export type ILocationType = `${LocationType}`;

export interface MachineModel {
  averageProfitMarginPercentage: string;
  createdAt: string;
  createdBy: string;
  createdByUserId: string;
  electricCostPerTempPerDay: string;
  expectedSalesPerDay: string;
  id: string;
  locationType: string;
  name: string;
  rentCostPerDay: string;
  updatedAt: string;
  updatedBy: string;
  updatedByUserId: string;
}
