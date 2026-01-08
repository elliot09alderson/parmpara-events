import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  PartyPopper,
  Clock,
  Users
} from 'lucide-react';

const BookingForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Theme Party',
    'Social Gathering',
    'Product Launch',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹3,00,000',
    '₹3,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    'Above ₹10,00,000'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        venue: '',
        budget: '',
        message: ''
      });
    }, 5000);
  };

  const inputClasses = "w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-[#00F2FF]/50 focus:bg-white/15 transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-neutral-200 mb-2";

  return (
    <section id="booking" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-[#020808]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00F2FF]/5 via-transparent to-[#1A53FF]/5" />
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-[#00F2FF]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#00F2FF] text-sm font-medium mb-6">
                <Calendar size={16} />
                Book Your Event
              </span>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Create Your{' '}
                <span className="gradient-text">Perfect Event</span>
              </h2>

              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                Ready to transform your vision into reality? Fill out the form and our 
                dedicated team will get back to you within 24 hours to discuss your event.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                <motion.div
                  className="glass rounded-xl p-5 flex items-center gap-4 border border-[#00F2FF]/10"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0, 242, 255, 0.3)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F2FF] to-[#1A53FF] flex items-center justify-center">
                    <Phone className="text-[#020808]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Call us anytime</p>
                    <p className="text-white font-medium">+91 98765 43210</p>
                  </div>
                </motion.div>

                <motion.div
                  className="glass rounded-xl p-5 flex items-center gap-4 border border-[#00F2FF]/10"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0, 242, 255, 0.3)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F2FF] to-[#1A53FF] flex items-center justify-center">
                    <Mail className="text-[#020808]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Email us at</p>
                    <p className="text-white font-medium">info@paramparaevents.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="glass rounded-xl p-5 flex items-center gap-4 border border-[#00F2FF]/10"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0, 242, 255, 0.3)' }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F2FF] to-[#1A53FF] flex items-center justify-center">
                    <MapPin className="text-[#020808]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Visit our office</p>
                    <p className="text-white font-medium">123 Event Street, Mumbai 400001</p>
                  </div>
                </motion.div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: '24/7 Support' },
                  { icon: Users, text: 'Expert Team' },
                  { icon: PartyPopper, text: '500+ Events' },
                  { icon: CheckCircle, text: '100% Satisfaction' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-neutral-200">
                    <item.icon className="text-[#00F2FF]" size={18} />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-8 lg:p-10 border border-white/10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <CheckCircle className="text-white" size={40} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-neutral-400">
                      We've received your inquiry. Our team will contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>
                          <User className="inline mr-2" size={14} />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={inputClasses}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>
                          <Phone className="inline mr-2" size={14} />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        <Mail className="inline mr-2" size={14} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClasses}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>
                          <PartyPopper className="inline mr-2" size={14} />
                          Event Type
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type} className="bg-neutral-900">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelClasses}>
                          <Calendar className="inline mr-2" size={14} />
                          Event Date
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>
                          <Users className="inline mr-2" size={14} />
                          Expected Guests
                        </label>
                        <input
                          type="number"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          placeholder="100"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={inputClasses}
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="bg-neutral-900">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>
                        <MapPin className="inline mr-2" size={14} />
                        Venue / Location
                      </label>
                      <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        placeholder="Event venue or city"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>
                        <MessageSquare className="inline mr-2" size={14} />
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your event..."
                        rows={4}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ perspective: '600px' }}
                    >
                      <div className="relative px-6 py-3 flex items-center justify-center gap-2">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center rounded-lg"
                          style={{ backgroundImage: `url('/button-bg.png')` }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#020808]/40 rounded-lg hover:bg-[#00F2FF] transition-all duration-500" />
                        {/* Border */}
                        <div className="absolute inset-0 border border-[#00F2FF]/40 rounded-lg" />
                        
                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-2 text-white font-medium text-sm">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Submit Inquiry
                            </>
                          )}
                        </span>
                      </div>
                    </button>

                    <p className="text-xs text-neutral-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
