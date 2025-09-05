'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api-client';


export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
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
    
    if (response.success) {
      // Success - redirect to dashboard
      console.log('Login successful:', response.user);
      router.push('/');
    } else {
      // Handle errors
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

  const handleForgotPassword = () => {
    router.push('/forgot-password');
  };

 

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#f6d992] opacity-20 rounded-full blur-3xl" />

      {/* Background Decorative Image */}
      <img
        src="/mandala.png"
        alt="Background Decorative Shape"
        className="absolute z-0 opacity-20 pop-up"
        style={{
          width: '400px',
          height: '400px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animationDelay: '0s',
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#4D5557] mb-4 pop-up"
              style={{
                fontFamily: 'Playfair Display',
                fontWeight: "700",
                animationDelay: '0.2s',
              }}
            >
              Welcome<br />
              Back
            </h1>
            <p
              className="text-lg text-[#4A1A11] slide-in"
              style={{
                fontFamily: 'Playfair Display',
                fontWeight: "400",
                animationDelay: '0.4s',
              }}
            >
              Continue your healing journey with us
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 slide-in" style={{ animationDelay: '0.6s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-[#f6d992] rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300"
                  style={{ fontFamily: 'a Antara Distance' }}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4D5557] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-[#f6d992] rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300"
                  style={{ fontFamily: 'Playfair Display' }}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#4D5557] focus:ring-[#4D5557] border-[#f6d992] rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-[#4A1A11]" style={{ fontFamily: 'Playfair Display' }}>
                    Remember me
                  </label>
                </div>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-[#4D5557] hover:underline transition duration-300"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 text-lg font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'Playfair Display',
                  fontWeight: "400",
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            

           

            {/* Sign Up Link */}
            <p className="text-[#4A1A11]" style={{ fontFamily: 'Playfair Display' }}>
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

      {/* Animations */}
      <style jsx>{`
        .pop-up {
          opacity: 0;
          transform: scale(0.5);
          animation: popUp 0.6s ease-out forwards;
        }

        @keyframes popUp {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .slide-in {
          opacity: 0;
          transform: translateY(30px);
          animation: slideIn 0.8s ease-out forwards;
        }

        @keyframes slideIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        button:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(77, 85, 87, 0.3);
        }

        input:focus {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(77, 85, 87, 0.1);
        }

        .social-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}