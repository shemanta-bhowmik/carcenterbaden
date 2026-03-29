import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';
import { motion } from 'motion/react';

interface FeaturedVehiclesProps {
  vehicles: Vehicle[];
}

export default function FeaturedVehicles({ vehicles }: FeaturedVehiclesProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-blue font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
            Our Inventory
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-dark tracking-tight">
            Featured <span className="text-blue">Vehicles</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-bold text-dark hover:text-blue transition-colors border-b-2 border-transparent hover:border-blue pb-1">
            New Arrivals
          </button>
          <button className="text-sm font-bold text-muted hover:text-blue transition-colors border-b-2 border-transparent hover:border-blue pb-1">
            Best Sellers
          </button>
          <button className="text-sm font-bold text-muted hover:text-blue transition-colors border-b-2 border-transparent hover:border-blue pb-1">
            Special Offers
          </button>
        </div>
      </div>

      {vehicles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-border">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-2xl font-display font-extrabold text-dark mb-2">No vehicles found</h3>
          <p className="text-muted font-medium">Try adjusting your search filters to find what you're looking for.</p>
        </div>
      )}

      <div className="mt-16 text-center">
        <button className="bg-dark hover:bg-dark-mid text-white px-10 py-4 rounded-xl text-base font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-dark/20">
          View All Inventory
        </button>
      </div>
    </section>
  );
}
