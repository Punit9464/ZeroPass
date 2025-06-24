import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, Eye, EyeOff, Mail, Lock, ArrowRight, Check, Fingerprint, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router';
import { loginApi } from '../api/user';

const Login = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const navigator = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const securityFeatures = [
    "End-to-end encryption",
    "Zero-knowledge security",
    "Biometric authentication",
    "Multi-device sync"
  ];

  const quickAccessMethods = [
    {
      icon: Fingerprint,
      title: "Biometric Login",
      description: "Use Face ID or Touch ID"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Scan QR code to login"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const res = await loginApi(formData);
    res ? navigator('/dashboard') : navigator('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      <motion.div 
        className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Branding & Features */}
        <motion.div 
          className="hidden lg:flex flex-col justify-center p-8"
          variants={itemVariants}
        >
          <div className="mb-8">
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigator('/')}
            >
              <div className="relative cursor-pointer">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50"
                />
                <Shield className="h-12 w-12 text-accent relative z-10" />
              </div>
              <span className="text-3xl font-bold text-white">ZeroPass</span>
            </motion.div>
            
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              Welcome back to
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"> ZeroPass</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Access your secure digital vault. Your passwords are protected with military-grade encryption.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {securityFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-slate-300 text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div 
          className="flex items-center justify-center p-8"
          variants={itemVariants}
        >
          <div className="w-full max-w-md">
            <motion.div 
              className="card bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                  <p className="text-slate-300">Sign in to access your secure vault</p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-medium">Email Address</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="input input-bordered w-full pl-10 bg-white/10 border-white/20 text-white placeholder-slate-400 focus:border-accent focus:bg-white/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white font-medium">Master Password</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input 
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your master password"
                        className="input input-bordered w-full pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder-slate-400 focus:border-accent focus:bg-white/20 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="cursor-pointer label justify-start space-x-3">
                      <input 
                        type="checkbox" 
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="checkbox checkbox-primary" 
                      />
                      <span className="label-text text-slate-300">Remember me</span>
                    </label>
                    <a href="#" className="text-accent hover:underline text-sm">
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <motion.button 
                    type="submit"
                    className="btn btn-primary w-full text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </form>

                {/* Divider */}
                <div className="divider text-slate-400">or</div>

                {/* Social Login */}
                <div className="space-y-3">
                  <motion.button 
                    className="btn btn-outline w-full text-white border-white/20 hover:bg-white hover:text-slate-900"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </motion.button>
                </div>

                {/* Signup Link */}
                <div className="text-center mt-6">
                  <p className="text-slate-300">
                    Don't have an account? 
                    <button 
                      onClick={() => onNavigate('signup')}
                      className="text-accent hover:underline ml-1 font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                </div>

                {/* Security Notice */}
                <motion.div 
                  className="mt-6 p-4 bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-medium text-sm">Secure Connection</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    Your login is protected with 256-bit encryption. We never store your master password.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;