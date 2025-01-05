import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import type { PriceHistory } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PriceChartProps {
  data: PriceHistory[];
}

export function PriceChart({ data }: PriceChartProps) {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [{
      label: 'Price (₹)',
      data: data.map(item => item.price),
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.5)',
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Price Trends Over Time'
      }
    },
    scales: {
      y: {
        beginAtZero: false,
      }
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <Line data={chartData} options={options} />
    </div>
  );
}