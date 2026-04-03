import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Products = () => {
  const categories = ['Shoe Care', 'Household'];

  return (
    <div className="py-20 bg-neutral-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6"
          >
            Our Product Catalog
          </motion.h1>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Explore our range of professional shoe care and essential household products.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-20">
            <div className="flex items-center space-x-4 mb-10">
              <h2 className="text-2xl font-bold text-neutral-dark">{category} Products</h2>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.filter((p) => p.category === category).map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-mint/20 card-hover group"
                >
                  <Link to={`/products/${product.id}`} className="block">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {product.brand && (
                        <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                          {product.brand}
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-8">
                    <span className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2 block">{product.category}</span>
                    <h3 className="text-2xl font-bold text-neutral-dark mb-3 group-hover:text-brand-teal transition-colors">{product.name}</h3>
                    <p className="text-neutral-dark/70 leading-relaxed mb-6 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="pt-6 border-t border-brand-mint/20 flex items-center justify-between">
                      <span className="text-sm font-bold text-brand-accent flex items-center space-x-1">
                        <ShieldCheck size={16} />
                        <span>Premium Quality</span>
                      </span>
                      <Link to={`/products/${product.id}`} className="text-brand-teal font-bold text-sm hover:text-brand-dark transition-colors flex items-center space-x-1 group/btn">
                        <span>View Details</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Brand Highlight */}
        <div className="bg-brand-dark rounded-3xl p-12 text-center text-white mt-12">
          <h2 className="text-3xl font-bold mb-4">Crow Shine™ Brand</h2>
          <p className="text-lg text-brand-mint max-w-2xl mx-auto">
            Our premium brand specializing in shoe cream and leather dye. Trusted by professionals for superior shine and restoration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
