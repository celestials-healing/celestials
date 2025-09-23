'use client'
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Phone, Shield, Eye, Users, Lock, Cookie, FileText, UserCheck, RefreshCw, MessageCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] to-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-24 h-24 md:w-36 lg:w-48 md:h-36 lg:h-48 bg-[#f6d992] opacity-15 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-60 lg:w-80 md:h-60 lg:h-80 bg-[#f6d992] opacity-10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-6">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center mb-6 px-4 py-2 text-[#4D5557] hover:text-[#32120b] transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4D5557] mb-4 fade-in-up"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-[#4D5557] mx-auto mb-6 fade-in-up" style={{ animationDelay: '0.2s' }} />
            <p className="text-lg md:text-xl text-[#4A1A11] max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.4s' }}>
              Your privacy is important to us. Learn how we protect and handle your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
            
            {/* Effective Date */}
            <div className="mb-8 p-4 bg-[#f6cf92]/20 rounded-2xl border-l-4 border-[#4D5557]">
              <p className="text-sm text-[#4A1A11] font-semibold">
                <strong>Effective Date:</strong> January 1, 2024
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-10">
              <p className="text-lg leading-relaxed text-[#4A1A11]">
                At <strong>Celestial Healing</strong>, we value your privacy and are committed to protecting your personal information. 
                This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website and services.
              </p>
            </div>

            {/* Section 1: Information We Collect */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-[#4A1A11] mb-4 leading-relaxed">
                We may collect the following information when you interact with our website or services:
              </p>
              <ul className="space-y-3 text-[#4A1A11] ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Name, email address, phone number, and other contact details.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Payment information when you make purchases (processed securely via trusted payment gateways like Razorpay).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Information automatically collected through cookies and analytics (such as IP address, browser type, and usage patterns).
                </li>
              </ul>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  2. How We Use Your Information
                </h2>
              </div>
              <p className="text-[#4A1A11] mb-4 leading-relaxed">
                We use your information to:
              </p>
              <ul className="space-y-3 text-[#4A1A11] ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Process payments and deliver products/services.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Communicate with you regarding updates, offers, or support.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Improve our website and user experience.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comply with legal and regulatory requirements.
                </li>
              </ul>
            </section>

            {/* Section 3: Sharing of Information */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  3. Sharing of Information
                </h2>
              </div>
              <p className="text-[#4A1A11] mb-4 leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="space-y-3 text-[#4A1A11] ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Payment processors (like Razorpay) to complete transactions.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Service providers who assist us in operating the website.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Legal authorities if required by law.
                </li>
              </ul>
            </section>

            {/* Section 4: Data Security */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  4. Data Security
                </h2>
              </div>
              <p className="text-[#4A1A11] leading-relaxed">
                We take reasonable measures to protect your personal data from unauthorized access, misuse, or disclosure. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            {/* Section 5: Your Rights */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  5. Your Rights
                </h2>
              </div>
              <p className="text-[#4A1A11] mb-4 leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-3 text-[#4A1A11] ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Access, update, or delete your personal information.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Opt out of receiving marketing communications.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4D5557] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contact us with any privacy-related concerns.
                </li>
              </ul>
            </section>

            {/* Section 6: Cookies */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  6. Cookies
                </h2>
              </div>
              <p className="text-[#4A1A11] leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.
              </p>
            </section>

            {/* Section 7: Changes to Policy */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  7. Changes to this Policy
                </h2>
              </div>
              <p className="text-[#4A1A11] leading-relaxed">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised effective date.
              </p>
            </section>

            {/* Section 8: Contact Us */}
            <section className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4D5557] rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                  8. Contact Us
                </h2>
              </div>
              <p className="text-[#4A1A11] mb-6 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              
              <div className="bg-[#f6cf92]/20 rounded-2xl p-6 border border-[#f6d992]">
                <h3 className="text-xl font-bold text-[#4D5557] mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Celestial Healing
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#4D5557] mr-3" />
                    <span className="text-[#4A1A11]">
                      Email: <a href="mailto:celestialshealing@gmail.com" className="text-[#4D5557] hover:underline font-semibold">
                        celestialshealing@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#4D5557] mr-3" />
                    <span className="text-[#4A1A11]">
                      Phone: <a href="tel:+1234567890" className="text-[#4D5557] hover:underline font-semibold">
                        +91 12345 67890
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="text-center pt-8 border-t border-[#f6d992]">
              <button
                onClick={handleGoHome}
                className="px-8 py-4 text-xl font-bold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg transition duration-300 hover:transform hover:translate-y-[-2px] hover:shadow-2xl"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Return to Home
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(77, 85, 87, 0.3);
        }

        section {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease-out forwards;
        }

        section:nth-child(1) { animation-delay: 0.1s; }
        section:nth-child(2) { animation-delay: 0.2s; }
        section:nth-child(3) { animation-delay: 0.3s; }
        section:nth-child(4) { animation-delay: 0.4s; }
        section:nth-child(5) { animation-delay: 0.5s; }
        section:nth-child(6) { animation-delay: 0.6s; }
        section:nth-child(7) { animation-delay: 0.7s; }
        section:nth-child(8) { animation-delay: 0.8s; }

        .container {
          max-width: 1200px;
        }
      `}</style>
    </div>
  );
}