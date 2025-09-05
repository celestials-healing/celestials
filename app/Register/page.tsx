'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/lib/api-client';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    subscribeNewsletter: false
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) return;

  setIsLoading(true);
  
  try {
    const response = await apiClient.signup(formData);
    
    if (response.success) {
      // Success - user is automatically logged in
      console.log('User created:', response.user);
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
    console.error('Signup error:', error);
    setErrors({ general: 'Something went wrong. Please try again.' });
  } finally {
    setIsLoading(false);
  }
};


  const handleSignInClick = () => {
    router.push('/Login');
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
                fontWeight: "800",
                animationDelay: '0.2s',
              }}
            >
              Join Our<br />
              Healing Journey
            </h1>
            <p
              className="text-lg text-[#4A1A11] slide-in"
              style={{
                fontFamily: 'Playfair Display',
                fontWeight: "400",
                animationDelay: '0.4s',
              }}
            >
              Create your account to begin your spiritual transformation
            </p>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 slide-in" style={{ animationDelay: '0.6s' }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#4D5557] mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#f6d992] rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300"
                    style={{ fontFamily: 'Playfair Display' }}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#4D5557] mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#f6d992] rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300"
                    style={{ fontFamily: 'Playfair Display' }}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4D5557] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#f6d992] rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300"
                  style={{ fontFamily: 'Playfair Display' }}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4D5557] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#f6d992] rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300"
                  style={{ fontFamily: 'Playfair Display' }}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#4D5557] mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#f6d992] rounded-lg focus:ring-2 focus:ring-[#4D5557] focus:border-transparent outline-none transition duration-300"
                  style={{ fontFamily: 'Playfair Display' }}
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-[#4D5557] focus:ring-[#4D5557] border-[#f6d992] rounded"
                  />
                  <label htmlFor="agreeToTerms" className="ml-3 text-sm text-[#4A1A11]" style={{ fontFamily: 'Playfair Display' }}>
                    I agree to the <span className="text-[#4D5557] underline cursor-pointer">Terms and Conditions</span> and <span className="text-[#4D5557] underline cursor-pointer">Privacy Policy</span>
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="subscribeNewsletter"
                    name="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-[#4D5557] focus:ring-[#4D5557] border-[#f6d992] rounded"
                  />
                  <label htmlFor="subscribeNewsletter" className="ml-3 text-sm text-[#4A1A11]" style={{ fontFamily: 'Playfair Display' }}>
                    Subscribe to our newsletter for healing tips and course updates
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 px-6 py-3 text-lg font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: 'Playfair Display',
                  fontWeight: "400",
                }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-[#4A1A11]" style={{ fontFamily: 'Playfair Display' }}>
                Already have an account?{' '}
                <button
                  onClick={handleSignInClick}
                  className="text-[#4D5557] font-semibold hover:underline transition duration-300"
                >
                  Sign In
                </button>
              </p>
            </div>
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
      `}</style>
    </div>
  );
}