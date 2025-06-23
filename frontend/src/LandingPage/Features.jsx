import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Globe, Zap, Users, Shield as FileShield, FolderSync as Sync, Eye, CreditCard } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform Sync",
      description: "Access your passwords seamlessly across all your devices - iOS, Android, Windows, Mac, and Linux.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Browser Integration",
      description: "Auto-fill passwords instantly on any website with our browser extensions for Chrome, Firefox, Safari, and Edge.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Password Generator",
      description: "Create unbreakable passwords with our advanced generator. Customize length, complexity, and character sets.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Secure Sharing",
      description: "Share passwords securely with family and team members. Control access levels and monitor usage.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: FileShield,
      title: "Digital Wallet",
      description: "Store credit cards, bank accounts, and personal documents with military-grade encryption.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Eye,
      title: "Dark Web Monitoring",
      description: "Get instant alerts if your credentials are found on the dark web. Stay one step ahead of hackers.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Everything You Need to Stay
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"> Secure</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive password management with enterprise-grade security features 
            designed for individuals, families, and businesses.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div 
                className="card bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mr-4`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button 
            className="btn btn-primary btn-lg text-lg px-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;