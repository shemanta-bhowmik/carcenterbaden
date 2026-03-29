import { motion } from 'motion/react';
import { Search, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/luxurycar/1920/1080" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-blue/20 text-blue-light px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-blue/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue rounded-full animate-pulse" />
              Premium Vehicle Selection
            </span>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Find Your <span className="text-blue">Dream Car</span> <br />
              in Baden-Baden
            </h1>
            
            <p className="text-lg md:text-xl text-muted-lt mb-10 leading-relaxed max-w-2xl">
              Discover our curated inventory of high-end vehicles. From sports cars to luxury SUVs, 
              we provide the finest automotive experience in the region.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue hover:bg-blue-dark text-white px-8 py-4 rounded-xl text-base font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-blue/30 flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Browse Inventory
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl text-base font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Our Services
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 right-0 hidden xl:block p-12">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-12"
        >
          <div>
            <div className="text-4xl font-display font-extrabold text-white mb-1">150+</div>
            <div className="text-xs font-bold text-muted-lt uppercase tracking-widest">Vehicles in Stock</div>
          </div>
          <div>
            <div className="text-4xl font-display font-extrabold text-white mb-1">12k+</div>
            <div className="text-xs font-bold text-muted-lt uppercase tracking-widest">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-display font-extrabold text-white mb-1">15+</div>
            <div className="text-xs font-bold text-muted-lt uppercase tracking-widest">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
