import { motion } from 'framer-motion';
import { Shield, Lock, Key, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="hero min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="hero-content text-center relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50"
              />
              <Shield className="h-24 w-24 text-accent relative z-10 animate-glow" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl font-bold text-white mb-6 leading-tight"
          >
            Your Digital Life,
            <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Perfectly Protected
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Stop using weak passwords. ZeroPass generates, stores, and autofills 
            military-grade encrypted passwords across all your devices. One master 
            password to rule them all.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button 
              className="btn btn-primary btn-lg text-lg px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Lock, title: "Bank-Level Security", desc: "256-bit AES encryption" },
              { icon: Key, title: "Zero-Knowledge", desc: "We can't see your data" },
              { icon: Shield, title: "Multi-Factor Auth", desc: "Extra layers of protection" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="card bg-white/10 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body items-center text-center p-6">
                  <feature.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;