import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Tag, 
  Clock,
  Percent,
  Gift,
  ArrowRight,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import RollingButton from './RollingButton';

const Offers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      title: 'Wedding Season Special',
      discount: '25% OFF',
      description: 'On complete wedding decoration packages',
      code: 'WEDDING25',
      validTill: 'Valid till 31st March',
      icon: Gift
    },
    {
      title: 'Bulk Order Discount',
      discount: '30% OFF',
      description: 'Order 10+ items and save big',
      code: 'BULK30',
      validTill: 'No expiry',
      icon: Tag
    },
    {
      title: 'First Time User',
      discount: '15% OFF',
      description: 'Special welcome discount for new customers',
      code: 'WELCOME15',
      validTill: 'One time use',
      icon: Sparkles
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background - Minimal */}
      <div className="absolute inset-0 bg-[#020808]" />

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        {/* Flash Sale Banner - Minimal Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#00F2FF]/20 bg-[#0B2418]/50">
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[#00F2FF] mb-4">
                    <Clock size={20} />
                    <span className="font-medium text-sm uppercase tracking-wider">Flash Sale Ends In</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                    MEGA SALE
                  </h2>
                  <p className="text-neutral-400 text-base">
                    Up to <span className="font-bold text-[#00F2FF] text-xl">50% OFF</span> on selected items
                  </p>
                </div>

                {/* Countdown Timer - Minimal */}
                <div className="flex items-center gap-3">
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Mins' },
                    { value: timeLeft.seconds, label: 'Secs' },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#020808] border border-[#00F2FF]/20 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-xl md:text-2xl font-bold text-white">
                          {String(item.value).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-xs text-neutral-500">{item.label}</span>
                    </div>
                  ))}
                </div>

                <RollingButton href="#products" icon={ShoppingBag}>
                  Shop Now
                </RollingButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#00F2FF] text-sm font-medium mb-6">
            <Percent size={16} />
            Special Offers
          </span>
          <h2 className="section-heading">
            Exclusive <span className="text-[#00F2FF]">Discount Codes</span>
          </h2>
          <p className="text-lg text-neutral-400 text-center max-w-2xl mx-auto">
            Save big on your event decorations with our exclusive coupon codes. 
            Apply at checkout and enjoy amazing discounts!
          </p>
        </motion.div>

        {/* Offer Cards - Clean & Minimal */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-[#0B2418]/30 border border-white/10 rounded-xl overflow-hidden hover:border-[#00F2FF]/30 transition-colors">
                {/* Icon Header - Minimal */}
                <div className="h-20 bg-[#020808] border-b border-white/5 flex items-center justify-center">
                  <offer.icon className="text-[#00F2FF]/60" size={32} />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-base font-medium text-white mb-2">{offer.title}</h3>
                  <p className="text-2xl font-bold text-[#00F2FF] mb-2">{offer.discount}</p>
                  <p className="text-neutral-500 text-sm mb-4">{offer.description}</p>

                  {/* Coupon Code - Clean */}
                  <div className="relative mb-3">
                    <div className="border border-dashed border-[#00F2FF]/30 rounded-lg p-3 bg-[#00F2FF]/5">
                      <span className="text-sm font-mono font-medium text-[#00F2FF] tracking-wider">
                        {offer.code}
                      </span>
                    </div>
                    <motion.button
                      className="absolute -top-2 -right-2 w-7 h-7 bg-[#00F2FF] rounded-full flex items-center justify-center text-[#020808] text-xs"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => navigator.clipboard.writeText(offer.code)}
                    >
                      📋
                    </motion.button>
                  </div>

                  <p className="text-xs text-neutral-600">{offer.validTill}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free Shipping Banner - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 bg-[#0B2418]/30 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#00F2FF]/10 border border-[#00F2FF]/20 flex items-center justify-center">
              <Gift className="text-[#00F2FF]" size={24} />
            </div>
            <div>
              <h4 className="font-medium text-white">Free Shipping</h4>
              <p className="text-neutral-500 text-sm">On orders above ₹2,000</p>
            </div>
          </div>
          <RollingButton href="#products" icon={ShoppingBag}>
            Start Shopping
          </RollingButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
