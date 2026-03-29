import { Fuel, Gauge, Zap, ArrowRight } from 'lucide-react';
import { Vehicle } from '../types';
import { motion } from 'motion/react';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const statusColors = {
    available: 'bg-green/10 text-green-600',
    sold: 'bg-red-100 text-red-600',
    pending: 'bg-amber-100 text-amber-600',
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all group"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={vehicle.images[0]} 
          alt={`${vehicle.make} ${vehicle.model}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${statusColors[vehicle.status]}`}>
            {vehicle.status}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-dark/80 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            {vehicle.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-display font-extrabold text-dark leading-tight group-hover:text-blue transition-colors">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-sm text-muted font-medium">{vehicle.trim}</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-display font-extrabold text-blue">
              {vehicle.currency}{vehicle.price.toLocaleString()}
            </div>
          </div>
        </div>

        <hr className="border-border my-4" />

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center text-center">
            <Gauge className="w-4 h-4 text-muted mb-1" />
            <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Mileage</span>
            <span className="text-xs font-bold text-dark">{vehicle.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Zap className="w-4 h-4 text-muted mb-1" />
            <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Power</span>
            <span className="text-xs font-bold text-dark">{vehicle.hp} PS</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Fuel className="w-4 h-4 text-muted mb-1" />
            <span className="text-[10px] font-bold text-muted uppercase tracking-tighter">Fuel</span>
            <span className="text-xs font-bold text-dark">{vehicle.fuelType}</span>
          </div>
        </div>

        <button className="w-full bg-bg hover:bg-blue hover:text-white text-dark border border-border hover:border-blue py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn">
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
