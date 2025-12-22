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

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      
      // Load Google OAuth library
      const google = (window as any).google;
      
      if (!google) {
        // Initialize Google Sign-In
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        
        script.onload = () => {
          initializeGoogleSignIn();
        };
      } else {
        initializeGoogleSignIn();
      }
    } catch (error) {
      console.error('Google login error:', error);
      setErrors({ general: 'Google sign-in failed. Please try again.' });
      setIsLoading(false);
    }
  };

  const initializeGoogleSignIn = () => {
    const google = (window as any).google;
    
    // Replace with your actual Google Client ID from Google Cloud Console
    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

    
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleGoogleCallback,
    });
    
    google.accounts.id.prompt();
  };

  const handleGoogleCallback = async (response: any) => {
    try {
      // The response.credential contains the JWT token from Google
      const googleToken = response.credential;
      
      // Send the token to your backend for verification and user creation/login
      const backendResponse = await apiClient.googleLogin({ token: googleToken });
      
      if (backendResponse.success && backendResponse.user) {
        login(backendResponse.user);
        router.push('/');
      } else {
        setErrors({ general: 'Google sign-in failed. Please try again.' });
      }
    } catch (error) {
      console.error('Google callback error:', error);
      setErrors({ general: 'Google sign-in failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    // Placeholder for Apple login
    setErrors({ general: 'Apple sign-in coming soon!' });
  };

  const handleSignUpClick = () => {
    router.push('/Register');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      <div className="relative z-10 min-h-screen">
        {/* Back Button - Mobile */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 px-4 py-4 shadow-sm">
          <button 
            onClick={() => window.history.back()} 
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 pt-20 lg:pt-12 pb-8">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-16 fade-in">
            <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-3 lg:mb-6" style={{ fontFamily: 'Playfair Display, serif', fontWeight: "700" }}>
              Login
            </h1>
            <p className="hidden lg:block text-xl text-gray-700 mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: "400" }}>
              Continue your healing journey with us
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            
            {/* Desktop Features */}
            <div className="hidden lg:block space-y-8 slide-left">
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
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-gray-600 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
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
                    <p className="text-gray-700 text-lg font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <div className="slide-right order-1 lg:order-2">
              {/* Mobile Hero */}
              <div className="lg:hidden mb-8 text-center">
  <div className="w-32 h-32 mx-auto mb-6  rounded-full overflow-hidden">
    <img 
      src="/Logo (3).png"
      alt="User Avatar"
      className="w-full h-full object-cover"
    />
  </div>

                
                <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Your journey to heal starts here
                </h2>
                <p className="text-gray-600 text-sm px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Align your energy with the stars through astrology, yoga and reiki 13 all in one calm space.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg lg:shadow-2xl p-6 lg:p-10">
                <div className="space-y-5">
                  {errors.general && (
                    <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm">
                      {errors.general}
                    </div>
                  )}

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email or phone
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email or phone"
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-xl focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300 bg-white text-sm"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 pr-12 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300 bg-white text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {showPassword ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          )}
                        </svg>
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
                  </div>

                  {/* Login Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full px-6 py-3.5 text-base font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing In...
                      </div>
                    ) : 'Login'}
                  </button>

                  {/* Sign Up Button */}
                  <button
                    onClick={handleSignUpClick}
                    className="w-full px-6 py-3.5 text-base font-semibold text-[#4D5557] bg-white border-2 border-[#4D5557] hover:bg-gray-50 rounded-full transition-all duration-300"
                  >
                    Sign up
                  </button>

                  {/* Social Login */}
                  <div className="pt-4">
                    <p className="text-center text-sm text-gray-500 mb-4">Or continue with</p>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Google</span>
                      </button>
                      
                      <button
                        onClick={handleAppleLogin}
                        disabled={isLoading}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                        </svg>
                        <span className="text-sm font-medium text-gray-700">Apple</span>
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-center pt-2">
                    <button
                      className="text-sm text-[#4D5557] hover:text-[#32120b] font-medium transition"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        
        button:not(:disabled):hover {
          transform: translateY(-2px);
        }
        
        input:focus {
          transform: scale(1.01);
        }
      `}</style>
    </div>
  );
}