'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api-client';
import { useAuth } from '@/lib/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await apiClient.login(formData);
      
      if (response.success && response.user) {
        login(response.user);
        router.push('/');
      } else {
        const errorMap: Record<string, string> = {};
        response.errors?.forEach(error => {
          errorMap[error.field] = error.message;
        });
        setErrors(errorMap);
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpClick = () => {
    router.push('/Register');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f6d992] opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6d992] opacity-20 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-[#4D5557] mb-6" style={{ fontFamily: 'Playfair Display', fontWeight: "700" }}>
              Welcome Back
            </h1>
            <p className="text-xl text-[#4A1A11] mb-4" style={{ fontFamily: 'Playfair Display', fontWeight: "400" }}>
              Continue your healing journey with us
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Side - Video and Features */}
            <div className="space-y-8 slide-left">
              {/* Video Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/BrACkUh7sA0?autoplay=1&mute=1&loop=1&playlist=BrACkUh7sA0&controls=1&showinfo=0&rel=0&modestbranding=1"
                    title="Healing Journey"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Feature Points - Cleaner Layout */}
              <div className="space-y-5">
                {[
                  { text: 'You only live once, live like it.', delay: '0.3s' },
                  { text: 'Find peace now with expert advice.', delay: '0.5s' },
                  { text: 'Transform your mind, embrace peace.', delay: '0.7s' }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 feature-item"
                    style={{ animationDelay: feature.delay }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#f6d992] to-[#4D5557] flex items-center justify-center shadow-lg">
                      <svg
                        className="w-5 h-5 text-white check-mark"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-[#4A1A11] text-lg font-medium" style={{ fontFamily: 'Playfair Display' }}>
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="slide-right">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* General Error */}
                  {errors.general && (
                    <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                      {errors.general}
                    </div>
                  )}

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4D5557] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-5 py-4 border border-[#f6d992] text-black rounded-xl focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300 bg-white"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-[#4D5557] mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="w-full px-5 py-4 pr-20 text-black border border-[#f6d992] rounded-xl focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300 bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-[#4D5557] hover:text-[#32120b] font-medium"
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-[#4D5557] focus:ring-[#4D5557] border-[#f6d992] rounded"
                      />
                      <label htmlFor="rememberMe" className="ml-3 text-sm text-[#4A1A11]" style={{ fontFamily: 'Playfair Display' }}>
                        Remember me
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-4 text-lg font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    style={{ fontFamily: 'Playfair Display', fontWeight: "400" }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing In...
                      </div>
                    ) : 'Sign In'}
                  </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-[#4A1A11] mt-6 text-center" style={{ fontFamily: 'Playfair Display' }}>
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={handleSignUpClick}
                    className="text-[#4D5557] font-semibold hover:underline transition duration-300"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        .slide-left {
          opacity: 0;
          transform: translateX(-30px);
          animation: slideLeft 0.8s ease-out 0.2s forwards;
        }
        @keyframes slideLeft {
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .slide-right {
          opacity: 0;
          transform: translateX(30px);
          animation: slideRight 0.8s ease-out 0.2s forwards;
        }
        @keyframes slideRight {
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .feature-item {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease-out forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .check-mark {
          animation: checkDraw 0.5s ease-out 0.3s forwards;
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
        }
        @keyframes checkDraw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        button[type="submit"]:not(:disabled):hover {
          transform: translateY(-2px);
        }
        
        input:focus {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
}