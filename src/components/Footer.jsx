import { motion } from 'framer-motion';
import { 
  PartyPopper, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Rocket,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    services: [
      { name: 'Wedding Planning', href: '#services' },
      { name: 'Corporate Events', href: '#services' },
      { name: 'Birthday Parties', href: '#services' },
      { name: 'Custom Events', href: '#booking' },
    ],
    shop: [
      { name: 'All Products', href: '#products' },
      { name: 'New Arrivals', href: '#products' },
      { name: 'Best Sellers', href: '#products' },
      { name: 'Special Offers', href: '#products' },
    ],
    support: [
      { name: 'Contact Us', href: '#booking' },
      { name: 'FAQs', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020808] pt-20 pb-8 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F2FF]/30 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A53FF]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#00F2FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#home"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h1 className="text-xl font-display font-bold text-white">
                  Parampara<span className="text-[#00F2FF]">Events</span>
                </h1>
                <p className="text-xs text-neutral-400 tracking-widest uppercase">& Decorations</p>
              </div>
            </motion.a>

            <p className="text-neutral-400 mb-6 max-w-sm">
              Creating magical moments and unforgettable experiences for over 15 years. 
              Your trusted partner for premium event management and decorations.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-neutral-400 hover:text-[#00F2FF] transition-colors">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@paramparaevents.com" className="flex items-center gap-3 text-neutral-400 hover:text-[#00F2FF] transition-colors">
                <Mail size={16} />
                <span>info@paramparaevents.com</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin size={16} />
                <span>123 Event Street, Mumbai 400001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-neutral-400 hover:text-[#00F2FF] hover:border-[#00F2FF]/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-[#00F2FF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-[#00F2FF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-[#00F2FF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-400 hover:text-[#00F2FF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-display font-semibold text-white mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-neutral-400 text-sm">
                Get updates on new products, special offers, and event planning tips.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#00F2FF]/50 transition-all"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#00F2FF] to-[#1A53FF] text-[#020808] font-semibold rounded-xl whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            © {currentYear} Parampara Events & Decorations. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            Made with <Heart className="text-red-500" size={14} fill="currentColor" /> in India
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-[#00F2FF] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-[#00F2FF] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#020808] border border-[#00F2FF]/50 text-[#00F2FF] flex items-center justify-center shadow-lg shadow-[#00F2FF]/10 z-40 hover:bg-[#00F2FF] hover:text-[#020808] transition-colors"
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Rocket size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
