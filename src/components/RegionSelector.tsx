import React from 'react';
import { MapPin } from 'lucide-react';
import type { Region } from '../types';

interface RegionSelectorProps {
  regions: Region[];
  selectedRegion: string;
  onRegionChange: (regionId: string) => void;
}

export function RegionSelector({ regions, selectedRegion, onRegionChange }: RegionSelectorProps) {
  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
      <select
        value={selectedRegion}
        onChange={(e) => onRegionChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 appearance-none bg-white"
      >
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}, {region.state}
          </option>
        ))}
      </select>
    </div>
  );
}