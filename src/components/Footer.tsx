import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark pt-24 pb-12 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue p-2 rounded-lg">
                <Car className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-display font-extrabold tracking-tight leading-none text-white">
                  CAR CENTER
                </h1>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-light">
                  Baden
                </span>
              </div>
            </div>
            <p className="text-muted-lt text-sm leading-relaxed max-w-xs">
              Your premier destination for luxury and performance vehicles in the Baden-Baden region. 
              Excellence in every detail.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 hover:bg-blue p-2 rounded-lg transition-all transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-extrabold mb-8">Quick Links</h3>
            <ul className="space-y-4">
              {['Inventory', 'New Arrivals', 'Special Offers', 'Sell Your Car', 'Financing'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-lt hover:text-blue transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-extrabold mb-8">Our Services</h3>
            <ul className="space-y-4">
              {['Maintenance', 'Performance Tuning', 'Detailing', 'Storage', 'Export Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-lt hover:text-blue transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-extrabold mb-8">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-blue/10 p-2.5 rounded-xl h-fit">
                  <MapPin className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">Location</div>
                  <div className="text-muted-lt text-xs">Lichtentaler Allee 8, 76530 Baden-Baden, Germany</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-blue/10 p-2.5 rounded-xl h-fit">
                  <Phone className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">Phone</div>
                  <div className="text-muted-lt text-xs">+49 123 456 789</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-blue/10 p-2.5 rounded-xl h-fit">
                  <Mail className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">Email</div>
                  <div className="text-muted-lt text-xs">info@carcenterbaden.de</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-muted uppercase tracking-widest">
          <div>© 2026 Car Center Baden. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
