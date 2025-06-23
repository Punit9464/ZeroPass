import { motion } from 'framer-motion';
import { Shield, Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Product": ["Features", "Security", "Pricing", "Download", "Integrations"],
    "Company": ["About Us", "Careers", "Press", "Partners", "Contact"],
    "Support": ["Help Center", "Documentation", "API", "Status", "Community"],
    "Legal": ["Privacy Policy", "Terms of Service", "Security", "Compliance"]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-white">ZeroPass</span>
            </motion.div>
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              The world's most trusted password manager. Protecting millions of 
              users worldwide with military-grade encryption and zero-knowledge security.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-slate-300">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span>hello@ZeroPass.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-lg text-white hover:text-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-slate-300 hover:text-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Secure, Stay Informed</h3>
              <p className="text-slate-300 mb-6">
                Get the latest security tips, product updates, and exclusive insights 
                delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered flex-1 bg-white/10 border-white/20 text-white placeholder-slate-400"
                />
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2024 ZeroPass. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;