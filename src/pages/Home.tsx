import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, COMPANY_INFO } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-mint text-brand-dark text-xs font-bold uppercase tracking-wider mb-6">
                Established Manufacturers
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-dark leading-tight mb-6">
                Excellence in <span className="text-brand-teal">Quality Manufacturing</span>
              </h1>
              <p className="text-lg text-neutral-dark/80 mb-10 max-w-lg leading-relaxed">
                We are proud manufacturers of high-quality Shoe Care and Household Products, including <strong>Shoe Cream, Shoe Polish, Leather Dye, Suedes care, and Methylated Spirit</strong>.
              </p>
            <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="btn-primary flex items-center space-x-2"
                >
                  <span>View Products</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"
                  alt="Industrial Manufacturing"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-brand-mint/20 p-2 rounded-lg">
                    <Factory className="text-brand-teal w-6 h-6" />
                  </div>
                  <span className="font-bold text-neutral-dark">Manufacturing Excellence</span>
                </div>
                <p className="text-sm text-neutral-dark/60">Our godown in Nairobi is dedicated to the production of premium shoe care items.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4 uppercase tracking-wider text-sm text-brand-teal">Why Choose Lyniel Products?</h2>
            <h3 className="text-4xl font-bold text-neutral-dark">Unmatched Quality in Every Batch</h3>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Manufacturing Excellence",
                desc: "State-of-the-art manufacturing processes ensuring consistent quality in every batch.",
                icon: ShieldCheck
              },
              {
                title: "Trusted Brands",
                desc: "Home to Crow Shine, a brand synonymous with premium leather care and restoration.",
                icon: Sparkles
              },
              {
                title: "Reliable Supply",
                desc: "Efficient distribution network serving retailers and wholesalers across the region.",
                icon: CheckCircle2
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-neutral-light border border-brand-mint/30 hover:border-brand-teal/50 transition-all card-hover"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 border border-brand-mint/20">
                  <feature.icon className="text-brand-teal w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{feature.title}</h3>
                <p className="text-neutral-dark/70 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 section-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-2">Featured Products</h2>
              <p className="text-neutral-dark/60">Our most popular shoe care and household solutions.</p>
            </div>
            <Link to="/products" className="mt-6 md:mt-0 text-brand-teal font-bold flex items-center space-x-1 hover:text-brand-dark transition-colors group">
              <span>Explore Full Catalog</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {product.brand && (
                    <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      {product.brand}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">{product.category}</span>
                  <h3 className="text-xl font-bold text-neutral-dark mt-1 mb-2">{product.name}</h3>
                  <p className="text-neutral-dark/70 text-sm line-clamp-2 mb-4">{product.description}</p>
                  <Link to={`/products/${product.id}`} className="text-brand-teal text-sm font-bold hover:text-brand-dark transition-colors flex items-center space-x-1">
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to partner with us?</h2>
          <p className="text-xl text-brand-mint/80 mb-10 leading-relaxed">
            Whether you're a retailer, wholesaler, or industrial partner, we provide the quality products your customers demand.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-teal text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-brand-dark transition-all shadow-2xl shadow-black/20 active:scale-95"
          >
            Get a Quote Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
