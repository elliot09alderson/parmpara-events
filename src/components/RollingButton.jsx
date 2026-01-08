import { motion } from 'framer-motion';
import { useState } from 'react';

const RollingButton = ({ href, children, icon: Icon, onClick, type = 'button', disabled = false, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Background - Rolls out on hover */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url('/button-bg.png')` }}
        animate={{ x: isHovered ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      
      {/* Overlay on image */}
      <motion.div 
        className="absolute inset-0 bg-[#020808]/40 rounded-lg"
        animate={{ x: isHovered ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      
      {/* Cyan background - Rolls in on hover */}
      <motion.div
        className="absolute inset-0 bg-[#00F2FF] rounded-lg"
        animate={{ x: isHovered ? '0%' : '100%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
      
      {/* Border */}
      <div className={`absolute inset-0 border rounded-lg transition-colors duration-300 ${isHovered ? 'border-[#00F2FF]' : 'border-[#00F2FF]/40'}`} />
      
      {/* Content */}
      <div className="relative z-10 px-6 py-3 flex items-center justify-center gap-2">
        <motion.span 
          className="flex items-center gap-2 font-medium text-sm"
          animate={{ color: isHovered ? '#020808' : '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          {Icon && <Icon size={16} />}
          {children}
        </motion.span>
      </div>
    </div>
  );

  // If it's a form button (submit)
  if (type === 'submit') {
    return (
      <button type="submit" disabled={disabled} className="inline-block">
        {buttonContent}
      </button>
    );
  }

  // If onClick is provided (not a link)
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className="inline-block">
        {buttonContent}
      </button>
    );
  }

  // Default: anchor link
  return (
    <a href={href} className="inline-block">
      {buttonContent}
    </a>
  );
};

export default RollingButton;
