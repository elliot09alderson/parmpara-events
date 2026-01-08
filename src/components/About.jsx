import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Heart, 
  Award, 
  Users, 
  Gem,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import RollingButton from './RollingButton';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Heart, text: 'Passionate Team' },
    { icon: Award, text: 'Award Winning' },
    { icon: Users, text: 'Customer Focused' },
    { icon: Gem, text: 'Premium Quality' },
  ];

  const values = [
    'Personalized event planning tailored to your vision',
    'Premium quality decorations and materials',
    '24/7 support and coordination',
    'Budget-friendly packages for every occasion',
    'On-time delivery and setup guaranteed',
    'Eco-friendly and sustainable options',
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                alt="Event decoration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-8 -right-8 glass-gold rounded-2xl p-6 max-w-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <Award className="text-neutral-900" size={28} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Award Winner</h4>
                  <p className="text-sm text-neutral-400">Best Event Planners 2025</p>
                </div>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-gradient-to-br from-gold-400 to-gold-600"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center text-xs text-white">
                  +50
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              className="absolute top-8 -left-8 glass rounded-2xl p-6"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-4xl font-display font-bold gradient-text">15+</h3>
              <p className="text-sm text-neutral-400">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-gold-400 text-sm font-medium mb-6">
              About Us
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              We Create Events That{' '}
              <span className="gradient-text">Inspire & Delight</span>
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              For over 15 years, Parampara Events has been transforming ordinary occasions 
              into extraordinary celebrations. Our dedicated team of event specialists 
              and decorators brings creativity, precision, and passion to every project.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(233, 187, 45, 0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <feature.icon className="mx-auto text-gold-400 mb-2" size={28} />
                  <p className="text-sm text-neutral-300">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle2 className="text-gold-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-neutral-300 text-sm">{value}</span>
                </motion.div>
              ))}
            </div>

            <RollingButton href="#booking" icon={Sparkles}>
              Let's Create Magic
            </RollingButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
