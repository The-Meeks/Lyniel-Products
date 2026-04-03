import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Package, Info, Tag } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-brand-teal font-semibold hover:text-brand-dark transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
            {product.brand && (
              <div className="absolute top-6 left-6 bg-brand-teal text-white px-6 py-2 rounded-full font-bold shadow-xl">
                {product.brand}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <span className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-2 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">{product.name}</h1>
              <p className="text-xl text-neutral-dark/70 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-brand-mint/10 p-8 rounded-3xl border border-brand-mint/30">
              <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center space-x-2">
                <CheckCircle2 size={24} className="text-brand-accent" />
                <span>Key Benefits</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-neutral-dark/80">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-bold text-neutral-dark mb-6 flex items-center space-x-2">
                <Package size={24} className="text-brand-teal" />
                <span>Specifications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 bg-neutral-light rounded-xl border border-gray-100">
                    <span className="text-sm font-semibold text-neutral-dark/50">{key}</span>
                    <span className="text-sm font-bold text-neutral-dark">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry CTA */}
            <div className="pt-8 border-t border-gray-100">
              <Link
                to="/contact"
                className="inline-block bg-brand-teal text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand-teal/20"
              >
                Inquire About This Product
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
