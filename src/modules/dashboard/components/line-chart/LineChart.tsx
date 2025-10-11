import { graphic, init } from 'echarts';
import { memo } from 'react';
import { useEffect, useRef } from 'react';

import { formatNumber } from '@/core/utils';

import type { LineChartProps } from './types';
import type { EChartsOption } from 'echarts';

function LineChart({ series, xAxisData }: LineChartProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = init(ref.current);
    const option = {
      textStyle: {
        fontFamily: 'IBM Plex Sans, sans-serif',
      },
      color: ['#4D96FF', '#FFD93D'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'line' },
        fontFamily: 'IBM Plex Sans, sans-serif',
        valueFormatter: (value: number) => {
          return `฿ ${formatNumber(value, 2)}`;
        },
      },
      legend: {
        top: 24,
        icon: 'circle',
        data: series.map((item) => item.name),
        fontFamily: 'IBM Plex Sans, sans-serif',
      },
      toolbox: {
        show: true,
        feature: {
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {
            name: '7-day-forecast',
            title: 'Save',
            pixelRatio: 2,
          },
        },
      },
      grid: { left: 56, right: 24, top: 64, bottom: 48 },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: xAxisData,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: (value: number) => {
            return `฿ ${formatNumber(value, 2)}`;
          },
        },
        splitLine: { lineStyle: { opacity: 0.25 } },
      },
      series: series.map((item) => ({
        name: item.name,
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: item.data,
        label: {
          fontFamily: 'IBM Plex Sans, sans-serif',
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
          label: {
            formatter: (params) => {
              const value = params.value as number;

              return `฿ ${formatNumber(value, 2)}`;
            },
          },
        },
        markLine: { data: [{ type: 'average', name: 'Avg' }] },
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: item.offset0 },
            { offset: 1, color: item.offset1 },
          ]),
        },
      })),
    } as EChartsOption;

    chart.setOption(option);

    const onResize = () => chart.resize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      chart.dispose();
    };
  }, [series, xAxisData]);

  return <div ref={ref} style={{ width: '100%', height: 360 }} />;
}

export default memo(LineChart);
