import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Camera, 
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Eye
} from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Corporate', 'Birthdays', 'Parties', 'Florals'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Weddings',
      title: 'Royal Garden Wedding',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      likes: 234
    },
    {
      id: 2,
      category: 'Corporate',
      title: 'Tech Summit 2025',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      likes: 156
    },
    {
      id: 3,
      category: 'Birthdays',
      title: 'Golden 50th Celebration',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
      likes: 189
    },
    {
      id: 4,
      category: 'Weddings',
      title: 'Beach Sunset Wedding',
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      likes: 312
    },
    {
      id: 5,
      category: 'Florals',
      title: 'Orchid Paradise Setup',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1561128290-006dc4827214?w=800&q=80',
      likes: 145
    },
    {
      id: 6,
      category: 'Parties',
      title: 'Neon Night Party',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
      likes: 278
    },
    {
      id: 7,
      category: 'Weddings',
      title: 'Palace Wedding Decor',
      location: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      likes: 456
    },
    {
      id: 8,
      category: 'Corporate',
      title: 'Annual Gala Night',
      location: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      likes: 167
    },
    {
      id: 9,
      category: 'Florals',
      title: 'Rose Garden Installation',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
      likes: 198
    },
    {
      id: 10,
      category: 'Parties',
      title: 'Vintage Theme Party',
      location: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80',
      likes: 223
    },
    {
      id: 11,
      category: 'Birthdays',
      title: 'Princess Theme Party',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      likes: 345
    },
    {
      id: 12,
      category: 'Weddings',
      title: 'Minimalist White Wedding',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      likes: 287
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handlePrevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden">
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
            <Camera size={16} />
            Our Portfolio
          </span>
          <h2 className="section-heading">
            Showcasing Our{' '}
            <span className="gradient-text">Previous Work</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 text-center max-w-3xl mx-auto mb-16">
            Explore our collection of successfully executed events and decorations. 
            Each project tells a unique story of creativity and excellence.
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
              className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#00F2FF] to-[#1A53FF] text-[#020808] shadow-lg shadow-[#00F2FF]/25'
                  : 'glass text-neutral-300 hover:text-[#00F2FF]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Centered and Minimalistic */}
        <motion.div 
          className="max-w-6xl mx-auto"
          layout
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.slice(0, 6).map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Minimal Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020808] via-transparent to-transparent opacity-80" />
                  
                  {/* Content - Minimal */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs text-[#00F2FF] font-medium uppercase tracking-widest">
                      {item.category}
                    </span>
                    <h3 className="text-base font-medium text-white mt-1 group-hover:text-[#00F2FF] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtle Hover Border */}
                  <div className="absolute inset-0 border border-[#00F2FF]/0 group-hover:border-[#00F2FF]/30 rounded-xl transition-all duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[#00F2FF] transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[#00F2FF] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[#00F2FF] transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-950 to-transparent rounded-b-2xl">
                <span className="text-sm text-[#00F2FF] font-medium uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-neutral-400">{selectedImage.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
