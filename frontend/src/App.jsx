import { ReactLenis } from 'lenis/react';
import Hero from './LandingPage/Hero';
import Features from './LandingPage/Features';
import Security from './LandingPage/Security';
import Pricing from './LandingPage/Pricing';
import Footer from './LandingPage/Footer';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';
import ProtectedRoute from './context/protectedRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" data-theme="custom">
        <BrowserRouter>
          <AuthProvider>
            {/* <Navbar /> */}
            <Toaster />
            <Routes>
              <Route path='/' element={
                <>
                  <Hero />
                  <Features />
                  <Security />
                  <Pricing />
                </>
              } />
              <Route path='/dashboard' element={
                <ProtectedRoute>
                  <Hero />
                </ProtectedRoute>
              } />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            {/* <Footer /> */}
          </AuthProvider>
        </BrowserRouter>
      </div>
    </ReactLenis>
  );
}

export default App;