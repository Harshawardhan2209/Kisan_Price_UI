import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="Search for crops..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-3.5 text-gray-400 h-5 w-5" />
    </div>
  );
}