import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, Facebook, Twitter, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src={COMPANY_INFO.logo} 
                alt={COMPANY_INFO.name} 
                className="h-10 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Leading manufacturers of high-quality shoe care and household products in East Africa. Quality you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-mint transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-mint transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-mint transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-brand-mint transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-mint transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-mint transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="hover:text-brand-mint transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Brands</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-brand-mint transition-colors">Crow Shine Shoe Cream</Link></li>
              <li><Link to="/products" className="hover:text-brand-mint transition-colors">Crow Shine Leather Dye</Link></li>
              <li><Link to="/products" className="hover:text-brand-mint transition-colors">Household Spirits</Link></li>
              <li><Link to="/products" className="hover:text-brand-mint transition-colors">Suede Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-mint shrink-0" />
                <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.estate}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-mint shrink-0" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-mint shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
