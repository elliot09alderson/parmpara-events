import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ShoppingCart, 
  Star, 
  Eye,
  Heart,
  Sparkles,
  Filter,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle
} from 'lucide-react';
import RollingButton from './RollingButton';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ['All', 'Flowers', 'Lights', 'Drapes', 'Props', 'Centerpieces'];

  const products = [
    {
      id: 1,
      name: 'Golden Rose Bouquet',
      category: 'Flowers',
      price: 2499,
      originalPrice: 2999,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80',
      description: 'Elegant artificial golden roses perfect for wedding centerpieces and decorations.',
      features: ['Premium Quality', 'Long Lasting', 'Easy to Arrange', 'Reusable'],
      inStock: true
    },
    {
      id: 2,
      name: 'Crystal LED String Lights',
      category: 'Lights',
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
      description: 'Warm white crystal LED lights for creating magical ambiance at any event.',
      features: ['Waterproof', '10m Length', 'USB Powered', 'Multiple Modes'],
      inStock: true
    },
    {
      id: 3,
      name: 'Premium Satin Drapes',
      category: 'Drapes',
      price: 3999,
      originalPrice: 4999,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
      description: 'Luxurious satin drapes in champagne gold for stunning ceiling and wall decor.',
      features: ['6m x 1.4m Size', 'Wrinkle Free', 'Fire Retardant', 'Multiple Colors'],
      inStock: true
    },
    {
      id: 4,
      name: 'Vintage Candelabra Set',
      category: 'Centerpieces',
      price: 1899,
      originalPrice: 2299,
      rating: 4.6,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      description: 'Antique style gold candelabra set of 3, perfect for elegant table settings.',
      features: ['Set of 3', 'Real Gold Finish', 'Fits Standard Candles', 'Heavy Base'],
      inStock: true
    },
    {
      id: 5,
      name: 'Balloon Arch Kit',
      category: 'Props',
      price: 899,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
      description: 'Complete balloon arch kit with pump, strip, and 100 premium balloons.',
      features: ['100 Balloons', 'Pump Included', 'Easy Setup', 'Gold & White Theme'],
      inStock: true
    },
    {
      id: 6,
      name: 'Orchid Arrangement',
      category: 'Flowers',
      price: 3499,
      originalPrice: 3999,
      rating: 4.9,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1561128290-006dc4827214?w=600&q=80',
      description: 'Premium artificial white orchid arrangement in elegant ceramic vase.',
      features: ['Ceramic Vase', 'Realistic Look', '50cm Height', 'Table Ready'],
      inStock: false
    },
    {
      id: 7,
      name: 'Fairy Light Curtain',
      category: 'Lights',
      price: 1799,
      originalPrice: 2199,
      rating: 4.7,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
      description: '3m x 3m warm white fairy light curtain with 8 lighting modes.',
      features: ['3m x 3m Size', '8 Modes', 'Remote Control', 'Indoor/Outdoor'],
      inStock: true
    },
    {
      id: 8,
      name: 'Velvet Table Runner',
      category: 'Drapes',
      price: 699,
      originalPrice: 899,
      rating: 4.5,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80',
      description: 'Luxurious velvet table runner in rich burgundy with gold trim.',
      features: ['3m Length', 'Gold Trim', 'Premium Velvet', 'Machine Washable'],
      inStock: true
    },
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020808] via-[#0B2418] to-[#020808]" />

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#00F2FF] text-sm font-medium mb-6">
            <ShoppingCart size={16} />
            Shop Decorations
          </span>
          <h2 className="section-heading">
            Premium <span className="gradient-text">Decoration Products</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 text-center max-w-3xl mx-auto mb-16">
            Browse our curated collection of high-quality decoration items for your events. 
            From elegant florals to stunning lighting solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#00F2FF] to-[#1A53FF] text-white shadow-lg shadow-[#00F2FF]/25'
                  : 'glass text-neutral-300 hover:text-[#00F2FF] hover:border-[#00F2FF]/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid - More Spacing */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-[#020808] border border-white/5 rounded-lg overflow-hidden h-full flex flex-col hover:border-white/10 transition-colors">
                {/* Image Container - Reduced Height */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 text-[#020808] text-xs font-medium rounded">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                  )}

                  {/* Quick View Button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-white text-xs font-medium px-3 py-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                      Quick View
                    </span>
                  </button>
                </div>

                {/* Content - Super Compact */}
                <div className="p-3">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-sm font-medium text-white mt-0.5 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-semibold text-white">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-[10px] text-neutral-600 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
            <ChevronRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-[#00F2FF] transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <span className="text-sm text-[#00F2FF] font-medium uppercase tracking-wider">
                {selectedProduct.category}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mt-2 mb-4">
                {selectedProduct.name}
              </h3>
              <p className="text-neutral-400 mb-6">{selectedProduct.description}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="text-[#00F2FF]" size={18} fill="currentColor" />
                  <span className="text-white font-medium">{selectedProduct.rating}</span>
                </div>
                <span className="text-neutral-500">({selectedProduct.reviews} reviews)</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-neutral-300">
                    <CheckCircle className="text-[#00F2FF]" size={16} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#00F2FF]">₹{selectedProduct.price.toLocaleString()}</span>
                  {selectedProduct.originalPrice > selectedProduct.price && (
                    <span className="text-lg text-neutral-500 line-through">₹{selectedProduct.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <RollingButton icon={ShoppingCart}>
                  Add to Cart
                </RollingButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Products;
