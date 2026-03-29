import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickSearch from './components/QuickSearch';
import FeaturedVehicles from './components/FeaturedVehicles';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import { VEHICLES } from './data/vehicles';
import { FilterState } from './types';

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    make: '',
    model: '',
    priceRange: [0, 500000],
    fuelType: '',
    bodyStyle: '',
  });

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      const matchesMake = !filters.make || vehicle.make === filters.make;
      const matchesModel = !filters.model || vehicle.model.includes(filters.model);
      const matchesFuel = !filters.fuelType || vehicle.fuelType === filters.fuelType;
      const matchesPrice = vehicle.price >= filters.priceRange[0] && vehicle.price <= filters.priceRange[1];
      
      return matchesMake && matchesModel && matchesFuel && matchesPrice;
    });
  }, [filters]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <QuickSearch onFilterChange={handleFilterChange} />
        <FeaturedVehicles vehicles={filteredVehicles} />
        <TrustBar />
      </main>

      <Footer />
    </div>
  );
}

