import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-wider font-bold text-xs transition-all duration-300 ease-out flex items-center justify-center gap-2";
  
  const variants = {
    // Gold filled
    primary: "bg-amber-500 text-black hover:bg-white hover:text-black shadow-lg hover:shadow-xl border border-transparent",
    // Gold outline
    outline: "bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black",
    // White filled (alternative accent)
    white: "bg-white text-black hover:bg-amber-500 hover:text-black shadow-lg hover:shadow-xl border border-transparent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;