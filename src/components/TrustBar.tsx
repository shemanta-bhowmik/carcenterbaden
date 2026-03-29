import { ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustBar() {
  const stats = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue" />,
      label: "Certified Quality",
      description: "Every vehicle undergoes a 150-point inspection by our experts.",
      value: "100%"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue" />,
      label: "Fast Financing",
      description: "Get approved in minutes with our flexible financing options.",
      value: "15 min"
    },
    {
      icon: <Award className="w-8 h-8 text-blue" />,
      label: "Premium Warranty",
      description: "Comprehensive warranty coverage for peace of mind.",
      value: "2 Years"
    },
    {
      icon: <Users className="w-8 h-8 text-blue" />,
      label: "Expert Advice",
      description: "Our team of specialists is here to guide your choice.",
      value: "24/7"
    }
  ];

  return (
    <section className="bg-dark py-24 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-dark rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            The <span className="text-blue">Car Center</span> Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all transform hover:-translate-y-2">
                <div className="mb-6 bg-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue/20 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-display font-extrabold text-white mb-2">{stat.value}</div>
                <h3 className="text-xl font-display font-extrabold text-white mb-4">{stat.label}</h3>
                <p className="text-muted-lt text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
