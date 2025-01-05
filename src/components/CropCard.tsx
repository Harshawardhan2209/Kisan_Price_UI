import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Crop } from '../types';

interface CropCardProps {
  crop: Crop;
}

export function CropCard({ crop }: CropCardProps) {
  const getTrendIcon = () => {
    switch (crop.trend) {
      case 'up':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      default:
        return <Minus className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <Link 
      to={`/crop/${crop.id}`}
      className="block bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{crop.name}</h3>
          <p className="text-sm text-gray-500">per {crop.unit}</p>
        </div>
        {getTrendIcon()}
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold text-gray-900">₹{crop.currentPrice}</p>
        <p className="text-sm text-gray-500 mt-1">
          Previous: ₹{crop.previousPrice}
        </p>
      </div>
    </Link>
  );
}