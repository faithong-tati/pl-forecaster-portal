export interface LineChartProps {
  series: Array<{
    key: string;
    name: string;
    data: number[];
    offset0: string;
    offset1: string;
  }>;
  xAxisData: string[];
}
