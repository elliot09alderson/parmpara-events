import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Sparkles, 
  ShoppingCart,
  Star,
  Clock,
  TrendingUp,
  Search
} from 'lucide-react';
import RollingButton from './RollingButton';

const NewArrivals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const newProducts = [
    {
      id: 1,
      name: 'Holographic Butterfly Wall',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      badge: 'New',
      rating: 4.9
    },
    {
      id: 2,
      name: 'LED Neon Sign Custom',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1563865436874-9aef32095fad?w=600&q=80',
      badge: 'Trending',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Gold Geometric Terrarium',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80',
      badge: 'New',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Crystal Bead Curtain',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
      badge: 'Popular',
      rating: 4.9
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900" />
      
      {/* Decorative gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-gold-400 text-sm font-medium mb-4">
              <Sparkles size={16} />
              Just Arrived
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              New <span className="gradient-text">Arrivals</span>
            </h2>
            <p className="text-neutral-400 mt-3 max-w-md">
              Discover our latest collection of premium decoration products, 
              freshly curated for your upcoming events.
            </p>
          </div>
          
          <motion.a
            href="#products"
            className="btn-secondary inline-flex items-center gap-2 self-start md:self-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All New Arrivals
            <TrendingUp size={18} />
          </motion.a>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative glass rounded-3xl overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${
                    product.badge === 'Trending' 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : product.badge === 'Popular'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gradient-to-r from-gold-400 to-gold-600 text-neutral-900'
                  }`}>
                    {product.badge}
                  </div>

                  {/* Quick Add */}
                  <motion.button
                    className="absolute bottom-4 left-4 right-4 py-3 bg-white/90 backdrop-blur text-neutral-900 rounded-xl font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart size={18} />
                    Quick Add
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="text-gold-400" size={14} fill="currentColor" />
                    <span className="text-sm text-neutral-300">{product.rating}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gold-400 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold gradient-text">₹{product.price.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1200&q=80"
              alt="New collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
          </div>
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 text-gold-400 mb-4">
                <Clock size={20} />
                <span className="font-medium">Limited Time Collection</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Spring 2026 Collection
              </h3>
              <p className="text-neutral-400 mb-6">
                Explore our exclusive spring collection featuring pastel themes, 
                fresh florals, and modern minimalist designs.
              </p>
              <RollingButton href="#products" icon={Search}>
                Explore Collection
              </RollingButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
