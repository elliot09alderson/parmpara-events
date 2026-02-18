import { motion } from 'framer-motion';
import { 
  Calendar, 
  Play,
  ChevronDown,
  Star
} from 'lucide-react';
import RollingButton from './RollingButton';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020808]/80 via-[#020808]/60 to-[#020808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020808]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex lg:hidden items-center gap-2 px-5 py-2 glass rounded-full mb-8"
          >
            <Star className="text-[#00F2FF]" size={16} fill="currentColor" />
            <span className="text-sm font-medium text-neutral-300">
              Trusted by 500+ Happy Clients
            </span>
          </motion.div>

          {/* Main Heading - Smaller on mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            <span className="text-white">Where Dreams</span>
            <br />
            <span className="text-[#00F2FF]">Meet Reality</span>
          </motion.h1>

          {/* Subtitle - Compact */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto mb-8"
          >
            Premium event decorations & flawless execution for weddings, corporate events & celebrations.
          </motion.p>

          {/* CTA Buttons - Rolling Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <RollingButton href="#booking" icon={Calendar}>
              Book Now
            </RollingButton>
            <motion.a
              href="#portfolio"
              className="group border border-white/20 text-white px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 hover:border-[#00F2FF]/50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={16} />
              View Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '500+', label: 'Events Completed' },
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Team Members' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 242, 255, 0.1)' }}
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#00F2FF] mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-neutral-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with Mouse Design */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a href="#about" className="text-neutral-400 hover:text-[#00F2FF] transition-colors">
          {/* Mouse Design */}
          <div className="relative w-6 h-10 border-2 border-current rounded-full flex justify-center">
            {/* Scroll Wheel */}
            <motion.div
              className="w-1 h-2 bg-current rounded-full mt-2"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </a>
      </motion.div>

      {/* Geometric Background Elements */}
      {/* 1. Large Rotating Dashed Ring (Right Side) */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-96 h-96 border border-dashed border-[#00F2FF]/20 rounded-full hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      
      {/* 2. Glassy Orb (Left Side - "The Perfect Bubble") */}
      <motion.div
        className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full hidden lg:block"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
          backdropFilter: 'blur(2px)',
          border: '1px solid rgba(255, 255, 255, 0.03)'
        }}
        animate={{ 
          y: [0, -30, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3. Small Bubble 1 (Below Glassy Orb) */}
      <motion.div
        className="absolute bottom-1/4 left-16 w-16 h-16 rounded-full hidden lg:block"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(3px)',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* 4. Small Bubble 2 (Further Below) */}
      <motion.div
        className="absolute bottom-12 left-32 w-12 h-12 rounded-full hidden lg:block"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(3px)',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}
        animate={{ 
          y: [0, -15, 0],
          x: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 5. Outline Circle with Reverse Rotation (Right Bottom) */}
      <motion.div
        className="absolute bottom-20 right-1/4 w-48 h-48 border border-[#1A53FF]/20 rounded-full hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Hero;
