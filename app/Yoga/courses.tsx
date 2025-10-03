'use client'
import React, { useState } from 'react';
import { Star, Clock, Award, Heart, Zap, Sun, Sparkles, Waves, Leaf, Users, Sunrise } from 'lucide-react';
import { useRouter } from "next/navigation";


interface Service {
  name: string;
  description: string;
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

export default function YogaServicesShowcase() {
      const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<string>('core');

  const serviceCategories: ServiceCategories = {
    core: {
      title: 'Core Yoga Teaching',
      icon: <Sunrise className="w-6 h-6" />,
      services: [
        {
          name: 'Beginner Yoga Classes',
          description: 'Basic postures, breathing, and alignment fundamentals',
          displayPrice: 'Contact Us',
          duration: 'Per Class',
          level: 'Beginner',
          features: ['Basic postures', 'Breathing techniques', 'Proper alignment', 'Foundation building', 'Comfortable pace']
        },
        {
          name: 'Intermediate & Advanced Yoga',
          description: 'Deeper asanas, pranayama, and philosophy',
          displayPrice: 'Contact Us',
          duration: 'Per Class',
          level: 'Advanced',
          features: ['Complex asanas', 'Advanced pranayama', 'Yoga philosophy', 'Deeper practice', 'Skill refinement']
        },
        {
          name: 'Hatha Yoga',
          description: 'Balance of physical postures and breath work',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'All Levels',
          features: ['Physical postures', 'Breath work', 'Mind-body balance', 'Traditional approach', 'Foundational practice']
        },
        {
          name: 'Ashtanga Yoga',
          description: 'Structured sequences for strength and flexibility',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Intermediate',
          features: ['Structured sequences', 'Strength building', 'Flexibility training', 'Dynamic practice', 'Progressive system']
        },
        {
          name: 'Vinyasa Flow',
          description: 'Dynamic, breath-synchronized movement',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'All Levels',
          features: ['Breath-synchronized', 'Flowing movements', 'Dynamic sequences', 'Creative transitions', 'Energetic practice']
        },
        {
          name: 'Iyengar Yoga',
          description: 'Precision and alignment with props',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'All Levels',
          features: ['Precision focus', 'Proper alignment', 'Props usage', 'Detailed instruction', 'Therapeutic approach']
        },
        {
          name: 'Yin Yoga',
          description: 'Deep stretching and relaxation',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'All Levels',
          features: ['Deep stretching', 'Long holds', 'Relaxation focus', 'Connective tissue work', 'Meditative practice']
        },
        {
          name: 'Power Yoga',
          description: 'Fitness-oriented, energetic sequences',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Intermediate',
          features: ['High energy', 'Fitness focus', 'Strength building', 'Cardiovascular benefits', 'Athletic approach']
        },
        {
          name: 'Gentle / Restorative Yoga',
          description: 'For seniors, recovery, and stress relief',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Gentle',
          features: ['Gentle movements', 'Recovery support', 'Stress relief', 'Senior-friendly', 'Therapeutic focus']
        }
      ]
    },
    specialized: {
      title: 'Specialized & Therapeutic',
      icon: <Heart className="w-6 h-6" />,
      services: [
        {
          name: 'Prenatal & Postnatal Yoga',
          description: 'Safe practices for pregnancy and recovery',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Maternal',
          features: ['Pregnancy-safe', 'Recovery support', 'Pelvic floor work', 'Bonding practices', 'Gentle approach']
        },
        {
          name: 'Kids & Teen Yoga',
          description: 'Age-appropriate classes for focus and flexibility',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Youth',
          features: ['Age-appropriate', 'Fun approach', 'Focus training', 'Flexibility building', 'Character development']
        },
        {
          name: 'Chair Yoga',
          description: 'For office workers, elderly, or mobility-limited',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Accessible',
          features: ['Office-friendly', 'Mobility adaptations', 'Seated practice', 'Accessibility focus', 'Gentle movements']
        },
        {
          name: 'Yoga for Stress & Anxiety',
          description: 'Calming practices and guided meditation',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Therapeutic',
          features: ['Stress reduction', 'Anxiety relief', 'Calming techniques', 'Guided meditation', 'Nervous system regulation']
        },
        {
          name: 'Yoga for Back Pain & Posture',
          description: 'Therapeutic sequences for alignment',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Therapeutic',
          features: ['Pain relief', 'Posture correction', 'Spine health', 'Core strengthening', 'Alignment focus']
        },
        {
          name: 'Sports-Specific Yoga',
          description: 'For athletes, runners, swimmers',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Athletic',
          features: ['Athletic performance', 'Injury prevention', 'Recovery enhancement', 'Sport-specific', 'Flexibility training']
        },
        {
          name: 'Corporate Yoga Programs',
          description: 'Workplace wellness and productivity boosting',
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Corporate',
          features: ['Workplace wellness', 'Productivity boost', 'Team building', 'Stress management', 'Flexible scheduling']
        },
        {
          name: 'Weight Loss Yoga Programs',
          description: 'Metabolism-boosting sequences',
          displayPrice: 'Contact Us',
          duration: 'Program',
          level: 'Fitness',
          features: ['Metabolism boost', 'Fat burning', 'Strength building', 'Holistic approach', 'Sustainable results']
        },
        {
          name: 'Yoga for Immunity & Detox',
          description: 'Pranayama and cleansing kriyas',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Wellness',
          features: ['Immune boost', 'Detox practices', 'Cleansing kriyas', 'Lymphatic support', 'Vitality enhancement']
        }
      ]
    },
    holistic: {
      title: 'Holistic & Mindfulness',
      icon: <Leaf className="w-6 h-6" />,
      services: [
        {
          name: 'Pranayama & Breathwork',
          description: 'Different breathing techniques',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'All Levels',
          features: ['Breathing techniques', 'Energy control', 'Stress management', 'Lung capacity', 'Mind clarity']
        },
        {
          name: 'Meditation & Mindfulness',
          description: 'Guided meditation sessions',
          displayPrice: 'Contact Us',
          duration: 'Per Workshop',
          level: 'All Levels',
          features: ['Guided meditation', 'Mindfulness practice', 'Mental clarity', 'Emotional balance', 'Spiritual growth']
        },
        {
          name: 'Yoga Nidra (Yogic Sleep)',
          description: 'Deep relaxation practice',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Relaxation',
          features: ['Deep relaxation', 'Conscious sleep', 'Stress relief', 'Mental rejuvenation', 'Healing rest']
        },
        {
          name: 'Sound Healing & Mantra',
          description: 'Integrating traditional vibrational therapy',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Holistic',
          features: ['Sound therapy', 'Mantra chanting', 'Vibrational healing', 'Sacred sounds', 'Energy alignment']
        },
        {
          name: 'Ayurveda Lifestyle Coaching',
          description: 'Diet and daily routine for balance',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Lifestyle',
          features: ['Ayurvedic principles', 'Diet guidance', 'Daily routines', 'Constitutional balance', 'Holistic wellness']
        },
        {
          name: 'Chakra Balancing Yoga',
          description: 'Asanas and meditation for energy centers',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Energy Work',
          features: ['Chakra focus', 'Energy balancing', 'Meditation practices', 'Asana sequences', 'Spiritual alignment']
        }
      ]
    },
    digital: {
      title: 'Digital & Hybrid Services',
      icon: <Zap className="w-6 h-6" />,
      services: [
        {
          name: 'Online Live Yoga Classes',
          description: 'Via Zoom or YouTube Live',
          displayPrice: 'Contact Us',
          duration: 'Per Class',
          level: 'Online',
          features: ['Live streaming', 'Interactive sessions', 'Global access', 'Real-time guidance', 'Community connection']
        },
        {
          name: 'On-Demand Recorded Classes',
          description: 'Subscription-based access',
          displayPrice: 'Contact Us',
          duration: 'Monthly',
          level: 'Digital',
          features: ['Video library', 'Flexible timing', 'Self-paced learning', 'Multiple styles', 'Unlimited access']
        },
        {
          name: 'Yoga Mobile App',
          description: 'Classes, progress tracking, community forums',
          displayPrice: 'Contact Us',
          duration: 'Subscription',
          level: 'Tech',
          features: ['Mobile access', 'Progress tracking', 'Community forums', 'Personalized plans', 'Notifications']
        },
        {
          name: 'Personalized 1-on-1 Coaching',
          description: 'Video calls with yoga teachers',
          displayPrice: 'Contact Us',
          duration: 'Per Session',
          level: 'Private',
          features: ['Personal attention', 'Customized practice', 'Video sessions', 'Individual goals', 'Flexible scheduling']
        },
        {
          name: 'Virtual Yoga Retreats',
          description: 'Immersive online experiences',
          displayPrice: 'Contact Us',
          duration: 'Per Retreat',
          level: 'Immersive',
          features: ['Online immersion', 'Multi-day programs', 'Global participation', 'Retreat atmosphere', 'Community building']
        },
        {
          name: 'Hybrid Membership Plans',
          description: 'Mix of online and in-person classes',
          displayPrice: 'Contact Us',
          duration: 'Monthly',
          level: 'Flexible',
          features: ['Online + in-person', 'Flexible options', 'Best of both', 'Cost-effective', 'Convenient access']
        },
        {
          name: 'Global Time Zone Scheduling',
          description: 'For international students',
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Global',
          features: ['Multiple time zones', 'International access', 'Flexible timing', 'Global community', 'Cultural diversity']
        }
      ]
    },
    retreats: {
      title: 'Retreats & Certifications',
      icon: <Award className="w-6 h-6" />,
      services: [
        {
          name: 'Weekend Yoga Retreats',
          description: 'At wellness resorts or nature locations',
          displayPrice: 'Contact Us',
          duration: 'Weekend',
          level: 'Retreat',
          features: ['Nature settings', 'Immersive practice', 'Wellness focus', 'Community bonding', 'Rejuvenation']
        },
        {
          name: '7-14 Day Immersive Retreats',
          description: 'Luxury or budget-friendly options',
          displayPrice: 'Contact Us',
          duration: '7-14 Days',
          level: 'Extended',
          features: ['Deep immersion', 'Multiple styles', 'Transformation focus', 'Various budgets', 'Life-changing']
        },
        {
          name: 'Yoga Teacher Training (200hr)',
          description: 'Globally recognized certification',
          displayPrice: 'Contact Us',
          duration: '200 Hours',
          level: 'Certification',
          features: ['Global recognition', 'Comprehensive training', 'Teaching methodology', 'Anatomy & philosophy', 'Career foundation']
        },
        {
          name: 'Yoga Teacher Training (300hr)',
          description: 'Advanced certification program',
          displayPrice: 'Contact Us',
          duration: '300 Hours',
          level: 'Advanced Cert',
          features: ['Advanced training', 'Specialized skills', 'Deeper knowledge', 'Master level', 'Professional excellence']
        },
        {
          name: 'Special Workshops',
          description: 'Inversions, arm balances, yoga philosophy',
          displayPrice: 'Contact Us',
          duration: 'Per Workshop',
          level: 'Specialized',
          features: ['Skill-specific', 'Expert instruction', 'Intensive focus', 'Breakthrough techniques', 'Mastery development']
        },
        {
          name: 'Ayurveda + Yoga Immersion',
          description: 'Integrated wellness training',
          displayPrice: 'Contact Us',
          duration: 'Program',
          level: 'Holistic',
          features: ['Ayurveda integration', 'Holistic approach', 'Lifestyle transformation', 'Ancient wisdom', 'Complete wellness']
        },
        {
          name: 'Wellness Festivals & Collaborations',
          description: 'With healers, musicians, chefs',
          displayPrice: 'Contact Us',
          duration: 'Event',
          level: 'Community',
          features: ['Festival atmosphere', 'Collaborative healing', 'Music & arts', 'Culinary wellness', 'Community celebration']
        }
      ]
    },
    lifestyle: {
      title: 'Lifestyle & Merchandise',
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        {
          name: 'Yoga Mats, Props & Apparel',
          description: 'Branded, eco-friendly products',
          displayPrice: 'Contact Us',
          duration: 'Retail',
          level: 'Products',
          features: ['Eco-friendly materials', 'Quality products', 'Branded items', 'Sustainable choices', 'Yoga essentials']
        },
        {
          name: 'Herbal Teas & Ayurvedic Supplements',
          description: 'Wellness lifestyle products',
          displayPrice: 'Contact Us',
          duration: 'Retail',
          level: 'Wellness',
          features: ['Ayurvedic herbs', 'Organic teas', 'Natural supplements', 'Health support', 'Traditional remedies']
        },
        {
          name: 'Guided Audio Meditations',
          description: 'Downloadable formats',
          displayPrice: 'Contact Us',
          duration: 'Download',
          level: 'Digital',
          features: ['Audio guides', 'Meditation tracks', 'Downloadable', 'Portable practice', 'Variety of topics']
        },
        {
          name: 'Yoga Books & E-Guides',
          description: 'On philosophy, asanas, and wellness',
          displayPrice: 'Contact Us',
          duration: 'Retail',
          level: 'Education',
          features: ['Educational content', 'Philosophy guides', 'Asana reference', 'Wellness knowledge', 'Self-study materials']
        },
        {
          name: 'Wellness Subscription Boxes',
          description: 'Yoga accessories and health items',
          displayPrice: 'Contact Us',
          duration: 'Monthly',
          level: 'Subscription',
          features: ['Curated items', 'Monthly delivery', 'Yoga accessories', 'Health products', 'Surprise elements']
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

      <button         onClick={() => router.push("/ContactUs")}
className="w-full py-3 bg-gradient-to-r from-[#f6cf92] to-[#f6d992] text-[#4D5557] font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
        Contact for Details
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] via-white to-[#f6cf92] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f6d992] opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f6cf92] opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#f6d992] opacity-10 rounded-full blur-2xl" />

      {/* Energy Flow Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJlbmVyZ3kiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHBhdGggZD0iTTUwIDEwIEw5MCA1MCBMNTBEOTAGTDEWIDI1aCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNEQ1NTU3IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMyIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0idXJsKCNlbmVyZ3kpIi8+Cjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 
            className="text-5xl md:text-7xl font-bold text-[#4D5557] mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Transform Your Life
            <br />
            <span className="bg-gradient-to-r from-[#4D5557] to-[#4A1A11] bg-clip-text text-transparent">
              Through Yoga
            </span>
          </h1>
          <p className="text-lg text-[#4A1A11] max-w-3xl mx-auto leading-relaxed">
            Experience the ancient practice of yoga with our comprehensive global services. 
            From beginner classes to teacher training, discover balance, strength, and inner peace.
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
            Why Choose Our Global Yoga Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#4A1A11]">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Expert Teachers</h3>
              <p className="text-sm">Certified instructors with years of experience across all yoga styles</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Waves className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Holistic Approach</h3>
              <p className="text-sm">Mind, body, and spirit integration for complete wellness</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">All Levels Welcome</h3>
              <p className="text-sm">From beginners to advanced practitioners, everyone is supported</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Sun className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Global Reach</h3>
              <p className="text-sm">Online and in-person classes available worldwide</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 
            className="text-3xl font-bold text-[#4D5557] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Begin Your Yoga Journey Today
          </h2>
          <p className="text-[#4A1A11] mb-8 max-w-2xl mx-auto">
            Whether you're seeking physical fitness, mental clarity, or spiritual growth, 
            our comprehensive yoga services will guide you on your path to wellness.
          </p>
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

        /* Energy flow effect */
        @keyframes flow {
          0%, 100% { opacity: 0.1; transform: translateX(0); }
          50% { opacity: 0.3; transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}