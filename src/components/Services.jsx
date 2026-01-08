import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  PartyPopper, 
  Flower2, 
  Cake, 
  Building2, 
  Heart, 
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'From intimate ceremonies to grand celebrations, we craft your perfect wedding day with elegance.',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80'
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Professional events that reflect your brand and leave lasting impressions on attendees.',
      color: 'from-blue-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80'
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Themed celebrations for all ages with creative decorations and entertainment.',
      color: 'from-purple-500 to-violet-500',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80'
    },
    {
      icon: Flower2,
      title: 'Floral Designs',
      description: 'Stunning floral arrangements and installations that transform any space.',
      color: 'from-gold-400 to-gold-600',
      image: 'https://images.unsplash.com/photo-1561128290-006dc4827214?w=600&q=80'
    },
    {
      icon: PartyPopper,
      title: 'Theme Parties',
      description: 'Creative themed events from vintage to modern, bringing your imagination to life.',
      color: 'from-orange-500 to-amber-500',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80'
    },
    {
      icon: Users,
      title: 'Social Gatherings',
      description: 'Elegant cocktail parties, reunions, and celebrations for every occasion.',
      color: 'from-teal-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80'
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(233, 187, 45, 0.05) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(233, 187, 45, 0.03) 0%, transparent 50%)`
      }} />

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-gold-400 text-sm font-medium mb-6">
            <Sparkles size={16} />
            Our Services
          </span>
          <h2 className="section-heading">
            Services That{' '}
            <span className="gradient-text">Transform</span>
            <br />Your Vision Into Reality
          </h2>
          <p className="section-subheading">
            From concept to execution, we offer comprehensive event management and decoration 
            services tailored to your unique requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative glass rounded-3xl overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium group-hover:gap-4 transition-all"
                  >
                    Book Now
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, rgba(233, 187, 45, 0.1), transparent 60%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 mb-6">
            Can't find what you're looking for? We offer custom solutions for any event!
          </p>
          <motion.a
            href="#booking"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Custom Events
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
