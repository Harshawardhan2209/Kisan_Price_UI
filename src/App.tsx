import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Bell, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { CropCard } from './components/CropCard';
import { WeatherWidget } from './components/WeatherWidget';
import { RegionSelector } from './components/RegionSelector';
import { CropDetail } from './pages/CropDetail';
import { CropAnalysis } from './pages/CropAnalysis';
import { cropDetails, mockRegions, mockWeather } from './utils/mockData';

function App() {
  const [selectedRegion, setSelectedRegion] = useState(mockRegions[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCrops = useMemo(() => {
    return cropDetails.filter(crop => 
      crop.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-green-600">
                KisanPrice
              </Link>
              <div className="flex items-center gap-4">
                <Link 
                  to="/analysis"
                  className="flex items-center gap-2 text-gray-600 hover:text-green-600"
                >
                  <Camera className="h-5 w-5" />
                  <span className="hidden sm:inline">Analyze Crop</span>
                </Link>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bell className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid gap-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <SearchBar onSearch={setSearchQuery} />
                  <RegionSelector
                    regions={mockRegions}
                    selectedRegion={selectedRegion}
                    onRegionChange={setSelectedRegion}
                  />
                </div>
                <WeatherWidget weather={mockWeather} />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {searchQuery ? 'Search Results' : 'Popular Crops'}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCrops.map((crop) => (
                      <CropCard key={crop.id} crop={crop} />
                    ))}
                  </div>
                </div>
              </div>
            </main>
          } />
          <Route path="/crop/:id" element={<CropDetail />} />
          <Route path="/analysis" element={<CropAnalysis />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;