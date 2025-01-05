import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PriceChart } from '../components/PriceChart';
import { cropDetails } from '../utils/mockData';
import type { CropQuality } from '../types';

export function CropDetail() {
  const { id } = useParams();
  const crop = cropDetails.find(c => c.id === id);
  const [selectedQuality, setSelectedQuality] = useState<CropQuality>('Premium');
  const [selectedLocation, setSelectedLocation] = useState(crop?.locations[0] || '');

  const filteredPriceHistory = useMemo(() => {
    if (!crop) return [];
    return crop.priceHistory.filter(
      price => price.quality === selectedQuality && price.location === selectedLocation
    );
  }, [crop, selectedQuality, selectedLocation]);

  if (!crop) {
    return <div>Crop not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Link>

      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{crop.name}</h1>
          <p className="text-gray-600 mb-4">{crop.description}</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quality
              </label>
              <select
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value as CropQuality)}
                className="w-full rounded-lg border border-gray-200 p-2"
              >
                {crop.qualities.map(quality => (
                  <option key={quality} value={quality}>{quality}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full rounded-lg border border-gray-200 p-2"
              >
                {crop.locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Current Price</p>
                <p className="text-2xl font-bold text-gray-900">₹{crop.currentPrice}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Previous Price</p>
                <p className="text-2xl font-bold text-gray-900">₹{crop.previousPrice}</p>
              </div>
            </div>
          </div>
          <PriceChart data={filteredPriceHistory} />
        </div>
      </div>
    </div>
  );
}