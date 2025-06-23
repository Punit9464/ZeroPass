import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);   
  const navigator = useNavigate();


  const handleSignInClick = () => {
    navigator('/signup');
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="navbar bg-black/20 backdrop-blur-lg fixed top-0 z-50 border-b border-white/10"
    >
      <div className="navbar-start">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Shield className="h-8 w-8 text-accent" />
          <NavLink className="text-xl font-bold text-white">ZeroPass</NavLink>
        </motion.div>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {['Features', 'Security', 'Pricing', 'Support'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="hidden lg:flex space-x-4">
          <motion.button 
            className="btn btn-ghost text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignInClick}
          >
            Sign Up
          </motion.button>
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LogIn
          </motion.button>
        </div>
        
        <div className="lg:hidden">
          <button 
            className="btn btn-ghost text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg lg:hidden"
        >
          <ul className="menu p-4 text-white">
            {['Features', 'Security', 'Pricing', 'Support'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <li><a>Sign Up</a></li>
            <li><a className="btn btn-primary mt-2">LogIn</a></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;