import React from 'react';
import { RefreshCw, ThumbsUp, Calendar, Brain } from 'lucide-react';

interface AnalysisResultProps {
  result: {
    ripeness: number;
    freshnessDays: number;
    confidence: number;
    recommendations: string[];
  };
  onReset: () => void;
}

export function AnalysisResult({ result, onReset }: AnalysisResultProps) {
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <ThumbsUp className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="font-medium text-gray-900">Ripeness</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{result.ripeness}%</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="font-medium text-gray-900">Freshness Duration</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{result.freshnessDays} days</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Brain className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="font-medium text-gray-900">Analysis Confidence</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">{result.confidence}%</p>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-3">Recommendations</h3>
        <ul className="space-y-2">
          {result.recommendations.map((rec, index) => (
            <li key={index} className="text-gray-600 flex items-start">
              <span className="text-green-600 mr-2">•</span>
              {rec}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onReset}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
      >
        Analyze Another Crop
      </button>
    </div>
  );
}