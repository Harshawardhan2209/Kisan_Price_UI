// Existing interfaces...

export interface PriceHistory {
  date: string;
  price: number;
  quality: CropQuality;
  location: string;
}

export type CropQuality = 'Premium' | 'Standard' | 'Basic';

export interface CropDetail extends Crop {
  description: string;
  qualities: CropQuality[];
  priceHistory: PriceHistory[];
  locations: string[];
}