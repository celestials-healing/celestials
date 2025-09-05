'use client'
import React, { useState } from 'react';
import { Star, Users, Clock, Award, Heart, Zap, Moon, Sun, Calendar, Compass } from 'lucide-react';
import CheckoutButton from '@/app/components/CheckoutButton';

interface Service {
  name: string;
  description: string;
  price: number;
  displayPrice: string;
  duration: string;
  level: string;
  features: string[];
}

interface Category {
  title: string;
  icon: React.ReactNode;
  services: Service[];
}

interface ServiceCategories {
  [key: string]: Category;
}

export default function AstrologyServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('core');

  const serviceCategories: ServiceCategories = {
    core: {
      title: 'Core Astrology Services',
      icon: <Star className="w-6 h-6" />,
      services: [
        {
          name: 'Vedic Astrology Consultations',
          description: 'Birth Chart, Lagna, Moon Chart, D9, Transit Analysis',
          price: 21000,
          displayPrice: '₹21,000',
          duration: '1 Hr Consultation',
          level: 'Comprehensive',
          features: ['10 Questions covered', '10 days followup validity', 'Birth chart analysis', 'Transit predictions', 'Remedial suggestions']
        },
        {
          name: 'Western Astrology Readings',
          description: 'Natal chart, Solar Return, Progressions',
          price: 21000,
          displayPrice: '₹21,000',
          duration: '1 Hr Consultation',
          level: 'Comprehensive',
          features: ['10 Questions covered', '10 days followup validity', 'Natal chart reading', 'Solar return analysis', 'Progressive forecasts']
        },
        {
          name: 'Horoscope Preparation',
          description: 'North Indian, South Indian, Western style charts',
          price: 51000,
          displayPrice: '₹51,000',
          duration: 'Per Horoscope',
          level: 'Detailed',
          features: ['Multiple chart styles', 'Comprehensive analysis', 'Detailed predictions', 'Professional format']
        },
        {
          name: 'Marriage & Compatibility Matching',
          description: 'Kundali Milan, Synastry, Composite Charts',
          price: 31000,
          displayPrice: '₹31,000',
          duration: '1 Hr Consultation',
          level: 'Relationship',
          features: ['5 Questions covered', '10 days followup validity', 'Compatibility analysis', 'Marriage timing', 'Relationship guidance']
        },
        {
          name: 'Career & Business Guidance',
          description: 'D10 Chart, Transit Analysis for professional growth',
          price: 31000,
          displayPrice: '₹31,000',
          duration: '1 Hr Consultation',
          level: 'Professional',
          features: ['5 Questions covered', '10 days followup validity', 'Career timing', 'Business prospects', 'Success periods']
        },
        {
          name: 'Wealth & Financial Astrology',
          description: 'Dhana Yoga, Planetary Periods for financial growth',
          price: 31000,
          displayPrice: '₹31,000',
          duration: '1 Hr Consultation',
          level: 'Financial',
          features: ['5 Questions covered', '10 days followup validity', 'Wealth periods', 'Investment timing', 'Financial remedies']
        },
        {
          name: 'Health & Medical Astrology',
          description: 'Prevention-oriented health guidance (not diagnosis)',
          price: 31000,
          displayPrice: '₹31,000',
          duration: '1 Hr Consultation',
          level: 'Wellness',
          features: ['5 Questions covered', '10 days followup validity', 'Health periods', 'Preventive guidance', 'Wellness timing']
        },
        {
          name: 'Child Horoscope',
          description: 'Future Potential, Education, Career Guidance for children',
          price: 21000,
          displayPrice: '₹21,000',
          duration: '1 Hr Consultation',
          level: 'Family',
          features: ['10 Questions covered', '10 days followup validity', 'Educational guidance', 'Career potential', 'Talent identification']
        }
      ]
    },
    specialized: {
      title: 'Specialized Astrology Services',
      icon: <Moon className="w-6 h-6" />,
      services: [
        {
          name: 'Muhurta (Auspicious Timing)',
          description: 'For marriage, business launches, travel, important events',
          price: 11000,
          displayPrice: '₹11,000',
          duration: '15 Minutes',
          level: 'Timing',
          features: ['Per muhurta consultation', 'Best timing selection', 'Event optimization', 'Auspicious periods']
        },
        {
          name: 'Prashna (Horary Astrology)',
          description: 'Question-based predictions for specific queries',
          price: 21000,
          displayPrice: '₹21,000',
          duration: 'Per Session',
          level: 'Specific',
          features: ['2 Questions covered', 'Immediate answers', 'Precise predictions', 'Quick insights']
        },
        {
          name: 'Electional Astrology',
          description: 'Choosing the right date/time for important events',
          price: 110000,
          displayPrice: '₹1,10,000',
          duration: 'Comprehensive',
          level: 'Premium',
          features: ['5 Events covered', 'Related influences', 'Optimal timing', 'Success maximization']
        },
        {
          name: 'Relocation Astrology',
          description: 'Identifying best cities/countries for success',
          price: 21000,
          displayPrice: '₹21,000',
          duration: 'Per Session',
          level: 'Location',
          features: ['2 Questions covered', 'Location analysis', 'Success factors', 'Relocation timing']
        },
        {
          name: 'Astrocartography',
          description: 'Mapping planetary influence across the globe',
          price: 110000,
          displayPrice: '₹1,10,000',
          duration: 'Comprehensive',
          level: 'Global',
          features: ['World-wide mapping', 'Planetary influences', 'Best locations', 'Travel guidance']
        },
        {
          name: 'Past Life & Karmic Astrology',
          description: 'Spiritual insights based on nodes & Dasha periods',
          price: 31000,
          displayPrice: '₹31,000',
          duration: 'Per Session',
          level: 'Spiritual',
          features: ['Karmic patterns', 'Soul purpose', 'Past life influences', 'Spiritual growth']
        },
        {
          name: 'Relationship & Love Astrology',
          description: 'Including global dating compatibility analysis',
          price: 51000,
          displayPrice: '₹51,000',
          duration: 'Per Session',
          level: 'Romance',
          features: ['Love compatibility', 'Relationship timing', 'Dating guidance', 'Partnership insights']
        },
        {
          name: 'Wealth Expansion Consultations',
          description: 'Investment timing, business cycles analysis',
          price: 110000,
          displayPrice: '₹1,10,000',
          duration: 'Premium',
          level: 'Investment',
          features: ['Investment timing', 'Business cycles', 'Wealth periods', 'Financial strategy']
        },
        {
          name: 'Corporate Astrology',
          description: 'Business chart readings, mergers & expansion timing',
          price: 110000,
          displayPrice: '₹1,10,000',
          duration: 'Corporate',
          level: 'Business',
          features: ['Company analysis', 'Merger timing', 'Expansion periods', 'Corporate strategy']
        },
        {
          name: 'Gemstone Recommendation',
          description: 'Based on planetary weaknesses and strengths',
          price: 51000,
          displayPrice: '₹51,000',
          duration: 'Per Session',
          level: 'Remedial',
          features: ['Planetary analysis', 'Gemstone selection', 'Wearing guidelines', 'Remedial benefits']
        }
      ]
    },
    digital: {
      title: 'Modern Digital Services',
      icon: <Zap className="w-6 h-6" />,
      services: [
        {
          name: 'Astrology Mobile App Readings',
          description: 'Instant reports via mobile application',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Instant',
          level: 'Digital',
          features: ['Instant reports', 'Mobile convenience', 'AI-powered insights', 'Real-time updates']
        },
        {
          name: 'AI-Powered Personalized Reports',
          description: 'Automated but astrologer-approved predictions',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Automated',
          level: 'AI-Enhanced',
          features: ['AI automation', 'Astrologer approval', 'Personalized insights', 'Quick delivery']
        },
        {
          name: 'Video Call Consultations',
          description: 'Zoom consultations for global reach',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Global',
          level: 'Online',
          features: ['Global accessibility', 'Video interaction', 'Screen sharing', 'Recording option']
        },
        {
          name: 'Recorded Predictions',
          description: 'Audio/Video predictions sent via email or app',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Recorded',
          level: 'Flexible',
          features: ['Recorded format', 'Email delivery', 'Replay option', 'Personal archive']
        },
        {
          name: 'Subscription Horoscope Service',
          description: 'Daily/weekly via app or WhatsApp',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Subscription',
          level: 'Regular',
          features: ['Daily updates', 'WhatsApp delivery', 'Subscription model', 'Regular insights']
        },
        {
          name: 'Astrology e-Courses & Webinars',
          description: 'Learn Vedic, Western, Numerology, Tarot',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Educational',
          level: 'Learning',
          features: ['Multiple systems', 'Interactive learning', 'Expert instruction', 'Certification options']
        }
      ]
    },
    spiritual: {
      title: 'Spiritual & Related Services',
      icon: <Heart className="w-6 h-6" />,
      services: [
        {
          name: 'Numerology',
          description: 'Name correction, lucky numbers analysis',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Numerical',
          features: ['Name analysis', 'Lucky numbers', 'Life path', 'Numerical remedies']
        },
        {
          name: 'Tarot & Oracle Card Readings',
          description: 'Intuitive card readings for guidance',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Intuitive',
          features: ['Card readings', 'Intuitive insights', 'Future guidance', 'Spiritual clarity']
        },
        {
          name: 'Palmistry & Face Reading',
          description: 'Physical features analysis for personality insights',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Physical',
          features: ['Palm analysis', 'Facial features', 'Personality traits', 'Life indicators']
        },
        {
          name: 'Reiki Healing & Chakra Balancing',
          description: 'Energy healing linked with planetary energies',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Energy',
          features: ['Energy healing', 'Chakra balance', 'Planetary alignment', 'Holistic wellness']
        },
        {
          name: 'Mantra & Remedy Suggestions',
          description: 'Vedic mantras, planetary pacification techniques',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Remedial',
          features: ['Vedic mantras', 'Planetary remedies', 'Chanting guidance', 'Spiritual practices']
        },
        {
          name: 'Yantra & Talisman Preparation',
          description: 'Sacred geometry and protective talismans',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Sacred',
          features: ['Sacred geometry', 'Protective talismans', 'Energized yantras', 'Spiritual tools']
        },
        {
          name: 'Vastu Shastra Consultations',
          description: 'Home & office energy optimization',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Space',
          features: ['Space harmony', 'Energy flow', 'Directional guidance', 'Environmental balance']
        },
        {
          name: 'Planetary Rituals (Homas & Poojas)',
          description: 'Online participation in sacred rituals',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Ritual',
          features: ['Sacred rituals', 'Online participation', 'Planetary pacification', 'Spiritual ceremonies']
        }
      ]
    },
    premium: {
      title: 'Premium & Membership Services',
      icon: <Award className="w-6 h-6" />,
      services: [
        {
          name: 'Annual Membership Plans',
          description: 'Unlimited short consultations throughout the year',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Annual',
          level: 'Membership',
          features: ['Unlimited consultations', 'Priority booking', 'Exclusive benefits', 'Year-round support']
        },
        {
          name: 'Couple & Family Plans',
          description: 'Relationship & child guidance together',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Family',
          level: 'Group',
          features: ['Family analysis', 'Relationship harmony', 'Child guidance', 'Collective insights']
        },
        {
          name: 'Personal Life Calendar',
          description: 'Favorable & unfavorable days marked',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Yearly',
          level: 'Planning',
          features: ['Daily guidance', 'Favorable periods', 'Event planning', 'Life optimization']
        },
        {
          name: 'Special Predictive Reports',
          description: '5-year / 10-year comprehensive forecasts',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Long-term',
          level: 'Forecast',
          features: ['Long-term predictions', 'Major life events', 'Career milestones', 'Relationship timing']
        },
        {
          name: 'Astrology for Pets',
          description: 'Pet personality and health insights',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Pet Care',
          features: ['Pet personality', 'Health insights', 'Behavioral patterns', 'Care guidance']
        },
        {
          name: 'Astrology Gift Cards',
          description: 'Perfect for birthdays, weddings, new ventures',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Gift',
          level: 'Special',
          features: ['Gift certificates', 'Flexible values', 'Special occasions', 'Thoughtful presents']
        }
      ]
    }
  };

  const CategoryButton = ({ categoryKey, category, isActive }: { 
    categoryKey: string; 
    category: Category; 
    isActive: boolean; 
  }) => (
    <button
      onClick={() => setActiveCategory(categoryKey)}
      className={`flex items-center gap-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-[#4D5557] text-white shadow-lg scale-105'
          : 'bg-white/70 text-[#4D5557] hover:bg-white/90 hover:scale-102'
      }`}
    >
      {category.icon}
      <span className="hidden sm:inline">{category.title}</span>
    </button>
  );

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 service-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#4D5557] mb-2" style={{ fontFamily: 'Playfair Display' }}>
            {service.name}
          </h3>
          <p className="text-[#4A1A11] text-sm mb-3">{service.description}</p>
        </div>
        <div className="text-right ml-4">
          <div className="text-2xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
            {service.displayPrice}
          </div>
          <div className="text-sm text-[#4A1A11]">{service.duration}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#f6cf92]/30 text-[#4D5557] rounded-full text-xs font-medium">
          <Star className="w-3 h-3" />
          {service.level}
        </span>
        <span className="inline-flex items-center gap-1 text-[#4A1A11] text-xs">
          <Clock className="w-3 h-3" />
          {service.duration}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-[#4A1A11]">
            <div className="w-1.5 h-1.5 bg-[#f6cf92] rounded-full"></div>
            {feature}
          </div>
        ))}
      </div>

      <div className="w-full py-3 bg-gradient-to-r from-[#f6cf92] to-[#f6d992] text-[#4D5557] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
        {service.price > 0 ? (
          <CheckoutButton amount={service.price} />
        ) : (
          <button className="w-full text-[#4D5557] font-semibold">
            {service.displayPrice === 'Coming Soon' ? 'Coming Soon' : 'Contact for Details'}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] via-white to-[#f6cf92] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f6d992] opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f6cf92] opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#f6d992] opacity-10 rounded-full blur-2xl" />

      {/* Mandala Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJtYW5kYWxhIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CiAgICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0RDU1NTciIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4zIi8+CiAgICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0RDU1NTciIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI21hbmRhbGEpIi8+Cjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 
            className="text-5xl md:text-7xl font-bold text-[#4D5557] mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Unlock Your
            <br />
            <span className="bg-gradient-to-r from-[#4D5557] to-[#4A1A11] bg-clip-text text-transparent">
              Astrological Wisdom
            </span>
          </h1>
          <p className="text-lg text-[#4A1A11] max-w-3xl mx-auto leading-relaxed">
            Discover the secrets of your destiny through ancient wisdom and modern astrological practices. 
            Our comprehensive services guide you through life's journey with celestial insights.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {Object.entries(serviceCategories).map(([key, category]) => (
            <CategoryButton
              key={key}
              categoryKey={key}
              category={category}
              isActive={activeCategory === key}
            />
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories[activeCategory].services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Special Features Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center fade-in-up mb-16" style={{ animationDelay: '0.4s' }}>
          <h2 
            className="text-3xl font-bold text-[#4D5557] mb-6"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Why Choose Celestials Astrology?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#4A1A11]">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Expert Astrologers</h3>
              <p className="text-sm">Certified practitioners with decades of experience in Vedic and Western astrology</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Moon className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Ancient Wisdom</h3>
              <p className="text-sm">Traditional knowledge combined with modern interpretation techniques</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Compass className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Personalized Guidance</h3>
              <p className="text-sm">Customized readings tailored to your unique birth chart and life circumstances</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Comprehensive Services</h3>
              <p className="text-sm">From basic readings to specialized consultations for all aspects of life</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 
            className="text-3xl font-bold text-[#4D5557] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Ready to Discover Your Destiny?
          </h2>
          <p className="text-[#4A1A11] mb-8 max-w-2xl mx-auto">
            Begin your journey of self-discovery with our expert astrologers. 
            Book your consultation today and unlock the mysteries of your cosmic path.
          </p>
          <button className="px-8 py-4 bg-[#4D5557] text-white font-semibold rounded-full shadow-lg hover:bg-[#32120b] hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Contact Celestials Team
          </button>
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

        .service-card {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Twinkling stars effect */
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}