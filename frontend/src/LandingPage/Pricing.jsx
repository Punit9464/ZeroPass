import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Crown, Users, Building } from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Personal",
      icon: Check,
      price: "Free",
      period: "Forever",
      description: "Perfect for individuals getting started with password security",
      features: [
        "Unlimited passwords",
        "1 device sync",
        "Basic password generator",
        "Email support",
        "Secure notes"
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Premium",
      icon: Crown,
      price: "$3",
      period: "/month",
      description: "Advanced features for power users and families",
      features: [
        "Everything in Personal",
        "Unlimited device sync",
        "Advanced password generator",
        "Dark web monitoring",
        "Priority support",
        "Secure file storage (1GB)",
        "Emergency access"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Family",
      icon: Users,
      price: "$5",
      period: "/month",
      description: "Share securely with up to 6 family members",
      features: [
        "Everything in Premium",
        "6 family accounts",
        "Family dashboard",
        "Shared family vault",
        "Parental controls",
        "Secure file storage (5GB)",
        "Admin controls"
      ],
      buttonText: "Start Free Trial",
      popular: false,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Business",
      icon: Building,
      price: "$8",
      period: "/user/month",
      description: "Enterprise-grade security for teams and organizations",
      features: [
        "Everything in Family",
        "Unlimited users",
        "Admin dashboard",
        "Advanced policies",
        "SSO integration",
        "Unlimited secure storage",
        "24/7 phone support",
        "Custom onboarding"
      ],
      buttonText: "Contact Sales",
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core security features 
            with no hidden fees or surprises.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative group ${plan.popular ? 'lg:-mt-8' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className={`card h-full ${plan.popular ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50' : 'bg-white/5 border-white/10'} backdrop-blur-sm border-2 transition-all duration-300 group-hover:border-white/30`}>
                <div className="card-body p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.gradient} mr-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-outline text-white border-white hover:bg-white hover:text-slate-900'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-slate-300 text-lg mb-6">
              Try any paid plan risk-free. If you're not completely satisfied, 
              we'll refund your money within 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn btn-outline text-white border-white hover:bg-white hover:text-slate-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Compare All Features
              </motion.button>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Have Questions? Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;