import React from 'react';
import { Cloud, Droplets, Thermometer } from 'lucide-react';
import type { Weather } from '../types';

interface WeatherWidgetProps {
  weather: Weather;
}

export function WeatherWidget({ weather }: WeatherWidgetProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Weather Update</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Thermometer className="h-5 w-5 text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="font-semibold">{weather.temperature}°C</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold">{weather.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-sm text-gray-500">Condition</p>
            <p className="font-semibold">{weather.condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}