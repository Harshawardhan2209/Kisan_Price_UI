import React, { useState } from 'react';
import { Upload, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnalysisResult } from '../components/AnalysisResult';
import { ImageUploader } from '../components/ImageUploader';
import { analyzeCropImage } from '../utils/imageAnalysis';

export function CropAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    ripeness: number;
    freshnessDays: number;
    confidence: number;
    recommendations: string[];
  }>(null);

  const handleImageUpload = async (file: File) => {
    setIsAnalyzing(true);
    try {
      const analysis = await analyzeCropImage(file);
      setResult(analysis);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link to="/" className="text-green-600 hover:text-green-700">
          ← Back to Home
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Crop Analysis</h1>
        <p className="text-gray-600 mb-6">
          Upload an image of your crop or fruit to analyze its ripeness and get freshness predictions.
        </p>

        {!result && (
          <ImageUploader 
            onUpload={handleImageUpload}
            isLoading={isAnalyzing}
          />
        )}

        {isAnalyzing && (
          <div className="flex items-center justify-center p-8">
            <RefreshCw className="h-8 w-8 text-green-600 animate-spin" />
            <span className="ml-3 text-gray-600">Analyzing your crop...</span>
          </div>
        )}

        {result && (
          <AnalysisResult 
            result={result}
            onReset={() => setResult(null)}
          />
        )}
      </div>
    </div>
  );
}