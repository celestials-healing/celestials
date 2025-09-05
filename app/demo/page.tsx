'use client'
import React, { useState } from 'react';
import { Star, Users, Clock, Award, Heart, Zap } from 'lucide-react';
import CheckoutButton from '@/app/components/CheckoutButton';

interface Course {
  name: string;
  description: string;
  price: number; // Changed from string to number
  displayPrice: string; // Added for display purposes
  duration: string;
  level: string;
  features: string[];
}

interface Category {
  title: string;
  icon: React.ReactNode;
  courses: Course[];
}

interface CourseCategories {
  [key: string]: Category;
}

export default function ReikiCoursesShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('training');

  const courseCategories: CourseCategories = {
    training: {
      title: 'Core Reiki Training & Certification',
      icon: <Award className="w-6 h-6" />,
      courses: [
        {
          name: 'Reiki Level 1 & 2',
          description: 'Self-healing, energy basics, hand positions, distant healing, Reiki symbols, professional practice',
          price: 44000,
          displayPrice: '₹44,000',
          duration: 'Per Certification',
          level: 'Beginner to Intermediate',
          features: ['Self-healing techniques', 'Energy basics', 'Hand positions', 'Distant healing', 'Reiki symbols']
        },
        {
          name: 'Reiki Master Practitioner',
          description: 'Advanced techniques & higher energy frequencies',
          price: 55000,
          displayPrice: '₹55,000',
          duration: 'Per Certification',
          level: 'Advanced',
          features: ['Advanced techniques', 'Higher energy frequencies', 'Master level practices']
        },
        {
          name: 'Reiki Master Teacher (Shinpiden)',
          description: 'Teacher training & attunement skills',
          price: 77000,
          displayPrice: '₹77,000',
          duration: 'Per Certification',
          level: 'Master',
          features: ['Teacher training', 'Attunement skills', 'Spiritual mastery']
        },
        {
          name: 'Fusion Reiki®',
          description: 'Compassion-focused higher vibration healing',
          price: 55000,
          displayPrice: '₹55,000',
          duration: 'Per Certification',
          level: 'Specialized',
          features: ['Compassion-focused healing', 'Higher vibration techniques', 'Advanced energy work']
        },
        {
          name: 'Crystal Reiki',
          description: 'Combining Reiki with crystal energy work',
          price: 44000,
          displayPrice: '₹44,000',
          duration: 'Per Certification',
          level: 'Specialized',
          features: ['Crystal energy work', 'Gemstone healing', 'Combined modalities']
        },
        {
          name: 'Animal Reiki',
          description: 'Healing for pets and animals',
          price: 55000,
          displayPrice: '₹55,000',
          duration: 'Per Certification',
          level: 'Specialized',
          features: ['Pet healing', 'Animal communication', 'Gentle techniques']
        },
        {
          name: 'Children\'s Reiki',
          description: 'Gentle, age-appropriate techniques',
          price: 33000,
          displayPrice: '₹33,000',
          duration: 'Per Certification',
          level: 'Family',
          features: ['Age-appropriate methods', 'Gentle techniques', 'Family healing']
        }
      ]
    },
    healing: {
      title: 'Reiki Healing Services',
      icon: <Heart className="w-6 h-6" />,
      courses: [
        {
          name: 'Distance Healing Bundle',
          description: '14 Sessions of Reiki Healing for 7 Days',
          price: 14000,
          displayPrice: '₹14,000',
          duration: 'Bundled Package',
          level: 'Comprehensive',
          features: ['14 healing sessions', '7-day program', 'Distance healing', 'Complete wellness']
        },
        {
          name: 'In-Person Reiki Session',
          description: 'Stress, anxiety, physical ailments healing',
          price: 9000,
          displayPrice: '₹9,000',
          duration: '1 Hour',
          level: 'Individual',
          features: ['Stress relief', 'Anxiety healing', 'Physical ailments', 'Personal attention']
        },
        {
          name: 'Distance Reiki Session',
          description: 'Via Zoom, phone, or Reiki grid',
          price: 4000,
          displayPrice: '₹4,000',
          duration: 'Per Session',
          level: 'Convenient',
          features: ['Remote healing', 'Flexible scheduling', 'Energy transmission']
        },
        {
          name: 'Chakra Balancing',
          description: 'Using crystals, sound, and Reiki energy',
          price: 8000,
          displayPrice: '₹8,000',
          duration: 'Per Session',
          level: 'Specialized',
          features: ['Crystal therapy', 'Sound healing', 'Chakra alignment', 'Energy balancing']
        },
        {
          name: 'Emotional Healing Bundle',
          description: 'Trauma release, emotional balancing',
          price: 14000,
          displayPrice: '₹14,000',
          duration: '14 Sessions',
          level: 'Therapeutic',
          features: ['Trauma release', 'Emotional balance', 'Deep healing', 'Mental wellness']
        },
        {
          name: 'Pain Management',
          description: 'Chronic pain, injury recovery',
          price: 4000,
          displayPrice: '₹4,000',
          duration: 'Per Session',
          level: 'Medical Support',
          features: ['Chronic pain relief', 'Injury recovery', 'Natural healing']
        }
      ]
    },
    programs: {
      title: 'Specialized Programs',
      icon: <Zap className="w-6 h-6" />,
      courses: [
        {
          name: 'Corporate Wellness',
          description: 'Stress relief programs for teams',
          price: 0, // Using 0 for "Contact Us" items
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Corporate',
          features: ['Team wellness', 'Stress management', 'Workplace harmony', 'Custom programs']
        },
        {
          name: 'Wellness Retreats',
          description: 'Weekend or 7-day immersive retreats',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Multi-day',
          level: 'Immersive',
          features: ['Immersive experience', 'Nature settings', 'Complete transformation']
        },
        {
          name: 'Children & Teen Wellness',
          description: 'Focus, emotional stability for young people',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Youth',
          features: ['Youth-focused', 'Emotional stability', 'Focus enhancement']
        },
        {
          name: 'Elderly Care Reiki',
          description: 'Mobility, comfort, and emotional peace',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Senior Care',
          features: ['Mobility support', 'Comfort care', 'Emotional peace']
        },
        {
          name: 'Athletes Recovery',
          description: 'Recovery, focus, performance enhancement',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Sports',
          features: ['Performance boost', 'Recovery acceleration', 'Mental focus']
        },
        {
          name: 'Addiction Recovery',
          description: 'Emotional and energetic support',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Therapeutic',
          features: ['Emotional support', 'Energy healing', 'Recovery assistance']
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
      <span>{category.title}</span>
    </button>
  );

  const CourseCard = ({ course, index }: { course: Course; index: number }) => (
    <div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 course-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#4D5557] mb-2" style={{ fontFamily: 'Playfair Display' }}>
            {course.name}
          </h3>
          <p className="text-[#4A1A11] text-sm mb-3">{course.description}</p>
        </div>
        <div className="text-right ml-4">
          <div className="text-2xl font-bold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
            {course.displayPrice}
          </div>
          <div className="text-sm text-[#4A1A11]">{course.duration}</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#f6cf92]/30 text-[#4D5557] rounded-full text-xs font-medium">
          <Star className="w-3 h-3" />
          {course.level}
        </span>
        <span className="inline-flex items-center gap-1 text-[#4A1A11] text-xs">
          <Clock className="w-3 h-3" />
          {course.duration}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {course.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-[#4A1A11]">
            <div className="w-1.5 h-1.5 bg-[#f6cf92] rounded-full"></div>
            {feature}
          </div>
        ))}
      </div>

      <div className="w-full py-3 bg-gradient-to-r from-[#f6cf92] to-[#f6d992] text-[#4D5557] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
        {course.price > 0 ? (
          <CheckoutButton amount={course.price} />
        ) : (
          <button className="w-full text-[#4D5557] font-semibold">
            Contact for Pricing
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6cf92] via-white to-[#f6d992] relative overflow-hidden">
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
            Discover Your
            <br />
            <span className="bg-gradient-to-r from-[#4D5557] to-[#4A1A11] bg-clip-text text-transparent">
              Healing Journey
            </span>
          </h1>
          <p className="text-lg text-[#4A1A11] max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of Reiki courses and healing services designed to 
            empower your spiritual journey and enhance your natural healing abilities.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {Object.entries(courseCategories).map(([key, category]) => (
            <CategoryButton
              key={key}
              categoryKey={key}
              category={category}
              isActive={activeCategory === key}
            />
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courseCategories[activeCategory].courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 
            className="text-3xl font-bold text-[#4D5557] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#4A1A11]">
            <div className="space-y-2">
              <h3 className="font-semibold">Digital Services</h3>
              <ul className="text-sm space-y-1">
                <li>Online Certifications</li>
                <li>Healing Circles</li>
                <li>Subscription Service</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Learning Content</h3>
              <ul className="text-sm space-y-1">
                <li>Guided Meditations</li>
                <li>E-learning Courses</li>
                <li>Energy Reports</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Holistic Therapies</h3>
              <ul className="text-sm space-y-1">
                <li>Crystal Healing</li>
                <li>Sound Therapy</li>
                <li>Breathwork Fusion</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Lifestyle Products</h3>
              <ul className="text-sm space-y-1">
                <li>Healing Crystals</li>
                <li>Energy Jewelry</li>
                <li>Essential Oils</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 
            className="text-3xl font-bold text-[#4D5557] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-[#4A1A11] mb-8 max-w-2xl mx-auto">
            Join thousands of students worldwide who have discovered the power of Reiki healing. 
            Start your journey today with our certified programs.
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

        .course-card {
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
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        /* Floating animation for decorative elements */
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
      `}</style>
    </div>
  );
}