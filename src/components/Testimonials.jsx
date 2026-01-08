import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Star, 
  Quote,
  Users,
  Award,
  Calendar,
  TrendingUp
} from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const testimonials = [
    {
      name: 'Priya & Rahul Sharma',
      role: 'Wedding Couple',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
      rating: 5,
      text: 'Parampara Events made our dream wedding come true! Every detail was perfect, from the floral arrangements to the lighting.',
    },
    {
      name: 'Amit Patel',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'Professional, creative, and incredibly organized. They transformed our annual conference into an unforgettable experience.',
    },
    {
      name: 'Sneha Reddy',
      role: 'Birthday Party Host',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'My daughter\'s birthday was absolutely magical! The team went above and beyond with the theme decorations.',
    },
    {
      name: 'Vikram & Anjali Singh',
      role: 'Anniversary Celebration',
      image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=200&q=80',
      rating: 5,
      text: 'We renewed our vows on our 25th anniversary and they created the most romantic setting we could imagine.',
    },
    {
      name: 'Meera Kapoor',
      role: 'Product Launch Event',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      rating: 5,
      text: 'Our product launch was a huge success thanks to the incredible event setup. Modern, sleek, and on-brand!',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Engagement Ceremony',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
      text: 'From consultation to cleanup, everything was seamless. They understood our vision and executed it flawlessly.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '4.9', label: 'Average Rating', icon: Star },
    { value: '1000+', label: 'Events Completed', icon: Calendar },
    { value: '98%', label: 'Client Retention', icon: TrendingUp },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <>
      {/* Stats Section with Background Image */}
      <section className="relative py-24 overflow-hidden" ref={statsRef}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Event background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#020808]/85" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F2FF]/10 via-transparent to-[#1A53FF]/10" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/20 mb-4">
                  <stat.icon className="text-[#00F2FF]" size={24} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-neutral-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020808] via-[#0B2418] to-[#020808]" />
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-[#00F2FF]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 container mx-auto px-6" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#00F2FF] text-sm font-medium mb-6">
              <Award size={16} />
              Testimonials
            </span>
            <h2 className="section-heading">
              What Our <span className="gradient-text">Happy Clients</span> Say
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 text-center max-w-3xl mx-auto mb-8">
              Don't just take our word for it. Here's what some of our valued clients 
              have to say about their experience with Parampara Events.
            </p>
          </motion.div>

          {/* Testimonials Single Line Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden mask-fade-both">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, -3600] }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[400px] glass rounded-2xl p-6 border border-[#00F2FF]/10 hover:border-[#00F2FF]/30 transition-colors"
                  >
                    <Quote className="text-[#00F2FF]/30 mb-4" size={32} />
                    
                    <p className="text-neutral-300 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#00F2FF]/50"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-[#00F2FF]">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-[#00F2FF]" size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
