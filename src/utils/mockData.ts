import { CropDetail, PriceHistory, Region, Weather } from '../types';

const generatePriceHistory = (basePrice: number, quality: string, location: string): PriceHistory[] => {
  const dates = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  return dates.map(date => ({
    date,
    price: basePrice + (Math.random() - 0.5) * 200,
    quality: quality as any,
    location
  }));
};

export const mockRegions: Region[] = [
  { id: '1', name: 'Pune', state: 'Maharashtra' },
  { id: '2', name: 'Ludhiana', state: 'Punjab' },
  { id: '3', name: 'Indore', state: 'Madhya Pradesh' }
];

export const mockWeather: Weather = {
  temperature: 28,
  condition: 'Partly Cloudy',
  humidity: 65,
  rainfall: 0
};

export const cropDetails: CropDetail[] = [
  {
    id: '1',
    name: 'Wheat',
    currentPrice: 2100,
    previousPrice: 2000,
    unit: 'quintal',
    trend: 'up',
    description: 'High-quality wheat varieties suitable for various food products.',
    qualities: ['Premium', 'Standard', 'Basic'],
    locations: ['Pune', 'Ludhiana', 'Indore'],
    priceHistory: [
      ...generatePriceHistory(2200, 'Premium', 'Pune'),
      ...generatePriceHistory(2100, 'Standard', 'Pune'),
      ...generatePriceHistory(2000, 'Basic', 'Pune'),
      ...generatePriceHistory(2150, 'Premium', 'Ludhiana'),
      ...generatePriceHistory(2050, 'Standard', 'Ludhiana'),
      ...generatePriceHistory(1950, 'Basic', 'Ludhiana'),
      ...generatePriceHistory(2180, 'Premium', 'Indore'),
      ...generatePriceHistory(2080, 'Standard', 'Indore'),
      ...generatePriceHistory(1980, 'Basic', 'Indore'),
    ]
  }
];