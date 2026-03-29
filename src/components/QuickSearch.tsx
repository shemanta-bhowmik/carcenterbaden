import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { FilterState } from '../types';

interface QuickSearchProps {
  onFilterChange: (filters: FilterState) => void;
}

export default function QuickSearch({ onFilterChange }: QuickSearchProps) {
  const [filters, setFilters] = useState<FilterState>({
    make: '',
    model: '',
    priceRange: [0, 500000],
    fuelType: '',
    bodyStyle: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue/10 p-2 rounded-lg">
            <Filter className="text-blue w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-extrabold text-dark tracking-tight">
            Quick Search
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Make */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-muted uppercase tracking-widest block">Make</label>
            <div className="relative">
              <select 
                name="make"
                value={filters.make}
                onChange={handleInputChange}
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm font-bold text-dark appearance-none focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all"
              >
                <option value="">All Makes</option>
                <option value="BMW">BMW</option>
                <option value="Porsche">Porsche</option>
                <option value="Audi">Audi</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Tesla">Tesla</option>
                <option value="Ferrari">Ferrari</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            </div>
          </div>

          {/* Model */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-muted uppercase tracking-widest block">Model</label>
            <div className="relative">
              <select 
                name="model"
                value={filters.model}
                onChange={handleInputChange}
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm font-bold text-dark appearance-none focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all"
              >
                <option value="">All Models</option>
                <option value="M4">M4</option>
                <option value="911">911</option>
                <option value="RS6">RS6</option>
                <option value="G 63">G 63</option>
                <option value="Model S">Model S</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            </div>
          </div>

          {/* Fuel Type */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-muted uppercase tracking-widest block">Fuel Type</label>
            <div className="relative">
              <select 
                name="fuelType"
                value={filters.fuelType}
                onChange={handleInputChange}
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm font-bold text-dark appearance-none focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all"
              >
                <option value="">All Types</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            </div>
          </div>

          {/* Max Price */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-muted uppercase tracking-widest block">Max Price</label>
            <div className="relative">
              <select 
                name="maxPrice"
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 500000;
                  const newFilters = { ...filters, priceRange: [0, val] as [number, number] };
                  setFilters(newFilters);
                  onFilterChange(newFilters);
                }}
                className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm font-bold text-dark appearance-none focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all"
              >
                <option value="500000">Any Price</option>
                <option value="50000">Up to 50.000€</option>
                <option value="100000">Up to 100.000€</option>
                <option value="150000">Up to 150.000€</option>
                <option value="250000">Up to 250.000€</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full bg-blue hover:bg-blue-dark text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue/20 flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
