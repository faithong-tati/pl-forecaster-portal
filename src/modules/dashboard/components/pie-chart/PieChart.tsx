import * as echarts from 'echarts';
import { memo, useEffect, useRef } from 'react';

import EmptyState from '@/core/components/empty-state';
import theme from '@/core/lib/theme';

import type { PieChartProps } from './types';

function PieChart({ data }: PieChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: 'item',
        fontFamily: 'IBM Plex Sans, sans-serif',
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          fontSize: 16,
          color: theme.palette.text.secondary,
          fontFamily: 'IBM Plex Sans, sans-serif',
        },
      },
      color: ['#4D96FF', '#6BCB77', '#FFD93D'],
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 4,
            borderColor: '#fff',
            borderWidth: 1,
            shadowBlur: 15,
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowColor: 'rgba(0, 0, 0, 0.15)',
          },
          label: {
            show: false,
            position: 'center',
            fontFamily: 'IBM Plex Sans, sans-serif',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold',
              shadowBlur: 15,
              color: theme.palette.text.secondary,
              fontFamily: 'IBM Plex Sans, sans-serif',
            },
          },
          labelLine: {
            show: false,
          },
          data,
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [data]);

  if (!data.reduce((acc, item) => (acc += item.value), 0)) {
    return (
      <EmptyState
        alt="no-ranking"
        iconPath="/pie-chart.png"
        title="No ranking yet"
      />
    );
  }

  return <div ref={chartRef} style={{ width: '100%', height: 300 }} />;
}

export default memo(PieChart);
