import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Key, Eye, Award, Fingerprint } from 'lucide-react';

const Security = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const securityFeatures = [
    {
      icon: Shield,
      title: "AES-256 Encryption",
      description: "The same encryption standard used by banks and governments worldwide."
    },
    {
      icon: Key,
      title: "Zero-Knowledge Architecture",
      description: "Your master password never leaves your device. We literally can't see your data."
    },
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Use Face ID, Touch ID, or fingerprint to unlock your vault securely."
    },
    {
      icon: Eye,
      title: "Security Audits",
      description: "Regular third-party security audits ensure your data stays protected."
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", desc: "Certified" },
    { name: "ISO 27001", desc: "Compliant" },
    { name: "GDPR", desc: "Compliant" },
    { name: "CCPA", desc: "Compliant" }
  ];

  return (
    <section id="security" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
            >
              <Shield className="h-16 w-16 text-white" />
            </motion.div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Security You Can
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Trust</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your security is our obsession. We use military-grade encryption and 
            zero-knowledge architecture to ensure your data stays private.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {securityFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30">
              <div className="text-center mb-8">
                <Award className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Industry Certifications</h3>
                <p className="text-slate-300">Trusted by security experts worldwide</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-lg font-semibold text-white">{cert.name}</div>
                    <div className="text-green-400 text-sm">{cert.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Floating security badges */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-green-500 p-3 rounded-full animate-float"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Lock className="h-6 w-6 text-white" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-emerald-500 p-3 rounded-full animate-float"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <Key className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Still have security concerns?</h3>
          <p className="text-xl text-slate-300 mb-6">
            Read our detailed security whitepaper or contact our security team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="btn btn-outline text-white border-green-400 hover:bg-green-400 hover:text-slate-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Security Whitepaper
            </motion.button>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Security Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;