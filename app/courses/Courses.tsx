'use client'
import React, { useState } from 'react';
import { Star, Clock, Award, Heart, Zap,  Sun, Sparkles, Waves, Leaf } from 'lucide-react';
import CheckoutButton from '../components/CheckoutButton';

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

export default function ReikiServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('training');

  const serviceCategories: ServiceCategories = {
    training: {
      title: 'Reiki Training & Certification',
      icon: <Award className="w-6 h-6" />,
      services: [
        {
          name: 'Reiki Level 1 & 2',
          description: 'Self-healing, energy basics, hand positions, distant healing, Reiki symbols, professional practice',
          price: 44000,
          displayPrice: '₹44,000',
          duration: 'Per Certification',
          level: 'Foundation',
          features: ['Self-healing techniques', 'Energy basics', 'Hand positions', 'Distant healing', 'Reiki symbols', 'Professional practice']
        },
        {
          name: 'Reiki Master Practitioner',
          description: 'Advanced techniques & higher energy frequencies',
          price: 55000,
          displayPrice: '₹55,000',
          duration: 'Per Certification',
          level: 'Advanced',
          features: ['Advanced techniques', 'Higher frequencies', 'Master level symbols', 'Enhanced healing abilities', 'Professional mastery']
        },
        {
          name: 'Reiki Master Teacher (Shinpiden)',
          description: 'Teacher training & attunement skills',
          price: 77000,
          displayPrice: '₹77,000',
          duration: 'Per Certification',
          level: 'Teacher',
          features: ['Teacher training', 'Attunement skills', 'Student guidance', 'Sacred teachings', 'Lineage connection']
        },
        {
          name: 'Fusion Reiki® Training',
          description: 'Compassion-focused higher vibration healing',
          price: 55000,
          displayPrice: '₹55,000',
          duration: 'Per Certification',
          level: 'Specialized',
          features: ['Compassion-focused', 'Higher vibrations', 'Advanced healing', 'Fusion techniques', 'Heart-centered practice']
        },
        {
          name: 'Crystal Reiki',
          description: 'Combining Reiki with crystal energy work',
          price: 44000,
          displayPrice: '₹44,000',
          duration: 'Per Certification',
          level: 'Crystal',
          features: ['Crystal integration', 'Energy amplification', 'Stone selection', 'Grid techniques', 'Crystal healing']
        },
        {
          name: 'Animal Reiki Certification',
          description: 'Healing for pets and animals',
          price: 55000,
          displayPrice: '₹55,000',
          duration: 'Per Certification',
          level: 'Animal',
          features: ['Animal communication', 'Pet healing', 'Wildlife techniques', 'Gentle approach', 'Animal ethics']
        },
        {
          name: "Children's Reiki Classes",
          description: 'Gentle, age-appropriate techniques',
          price: 33000,
          displayPrice: '₹33,000',
          duration: 'Per Certification',
          level: 'Youth',
          features: ['Age-appropriate', 'Gentle techniques', 'Fun approach', 'Safety focus', 'Child-friendly methods']
        }
      ]
    },
    healing: {
      title: 'Reiki Healing Services',
      icon: <Heart className="w-6 h-6" />,
      services: [
        {
          name: 'Distance Healing Package',
          description: '14 Sessions of Reiki Healing for 7 Days - complete healing bundle',
          price: 14000,
          displayPrice: '₹14,000',
          duration: '7-Day Package',
          level: 'Intensive',
          features: ['14 healing sessions', '7-day intensive', 'Distance healing', 'Complete bundle', 'Stress relief', 'Anxiety support']
        },
        {
          name: 'In-Person Reiki Healing',
          description: 'For stress, anxiety, physical ailments - 1 hour healing session',
          price: 9000,
          displayPrice: '₹9,000',
          duration: '1 Hour Session',
          level: 'Personal',
          features: ['In-person healing', '1 hour session', 'Stress relief', 'Anxiety support', 'Physical healing', 'Personal attention']
        },
        {
          name: 'Distance Reiki Healing',
          description: 'Via Zoom, phone, or Reiki grid',
          price: 4000,
          displayPrice: '₹4,000',
          duration: 'Per Session',
          level: 'Remote',
          features: ['Remote healing', 'Zoom sessions', 'Phone healing', 'Reiki grid', 'Convenient access']
        },
        {
          name: 'Chakra Balancing with Reiki',
          description: 'Using crystals, sound, and Reiki energy',
          price: 8000,
          displayPrice: '₹8,000',
          duration: 'Per Session',
          level: 'Balancing',
          features: ['Chakra alignment', 'Crystal integration', 'Sound healing', 'Energy balancing', 'Holistic approach']
        },
        {
          name: 'Emotional Healing Reiki',
          description: 'Trauma release, emotional balancing - 7-day intensive',
          price: 14000,
          displayPrice: '₹14,000',
          duration: '7-Day Package',
          level: 'Emotional',
          features: ['14 healing sessions', 'Trauma release', 'Emotional balance', 'Deep healing', 'Recovery support']
        },
        {
          name: 'Reiki for Pain Management',
          description: 'Chronic pain, injury recovery',
          price: 4000,
          displayPrice: '₹4,000',
          duration: 'Per Session',
          level: 'Physical',
          features: ['Pain relief', 'Chronic conditions', 'Injury recovery', 'Natural healing', 'Comfort enhancement']
        },
        {
          name: 'Pre & Post Surgery Reiki',
          description: 'For faster healing and reduced anxiety - 7-day support',
          price: 14000,
          displayPrice: '₹14,000',
          duration: '7-Day Package',
          level: 'Medical',
          features: ['14 healing sessions', 'Surgery support', 'Faster healing', 'Anxiety reduction', 'Recovery enhancement']
        },
        {
          name: 'Pregnancy & Fertility Reiki',
          description: 'For conception support and prenatal wellness - 7-day care',
          price: 14000,
          displayPrice: '₹14,000',
          duration: '7-Day Package',
          level: 'Maternal',
          features: ['14 healing sessions', 'Fertility support', 'Prenatal wellness', 'Conception aid', 'Maternal care']
        },
        {
          name: 'Sleep & Relaxation Reiki',
          description: 'Deep relaxation sessions',
          price: 4000,
          displayPrice: '₹4,000',
          duration: 'Per Session',
          level: 'Wellness',
          features: ['Deep relaxation', 'Sleep improvement', 'Stress reduction', 'Peace enhancement', 'Rest quality']
        },
        {
          name: 'Space Clearing Reiki',
          description: 'Clearing negative energy from homes/offices - 1 hour visit',
          price: 9000,
          displayPrice: '₹9,000',
          duration: '1 Hour Visit',
          level: 'Environmental',
          features: ['Space clearing', 'Negative energy removal', 'Home harmony', 'Office wellness', 'Environmental healing']
        }
      ]
    },
    holistic: {
      title: 'Holistic & Integrative Services',
      icon: <Leaf className="w-6 h-6" />,
      services: [
        {
          name: 'Crystal Healing Therapy',
          description: 'Gemstone layouts with Reiki',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Crystal',
          features: ['Gemstone layouts', 'Crystal selection', 'Energy amplification', 'Healing grids', 'Stone therapy']
        },
        {
          name: 'Sound Healing with Reiki',
          description: 'Tibetan bowls, gongs, tuning forks',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Sound',
          features: ['Tibetan bowls', 'Gong therapy', 'Tuning forks', 'Vibrational healing', 'Sound frequencies']
        },
        {
          name: 'Guided Meditation & Reiki',
          description: 'Mindfulness with energy work',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Meditation',
          features: ['Guided meditation', 'Mindfulness practice', 'Energy integration', 'Mental clarity', 'Spiritual connection']
        },
        {
          name: 'Breathwork & Reiki Fusion',
          description: 'Pranayama or breath therapy with Reiki',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Breathwork',
          features: ['Pranayama techniques', 'Breath therapy', 'Energy activation', 'Life force enhancement', 'Breathing mastery']
        },
        {
          name: 'Aura Cleansing & Energy Scanning',
          description: 'Before and after healing sessions',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Aura',
          features: ['Aura reading', 'Energy scanning', 'Field cleansing', 'Blockage detection', 'Energetic assessment']
        },
        {
          name: 'Pendulum Dowsing with Reiki',
          description: 'Energy block detection and clearing',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Dowsing',
          features: ['Pendulum work', 'Block detection', 'Energy mapping', 'Clearing techniques', 'Divination skills']
        },
        {
          name: 'Reiki & Yoga Integration',
          description: 'Gentle asanas with energy channeling',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Custom',
          level: 'Yoga',
          features: ['Yoga integration', 'Gentle asanas', 'Energy flow', 'Movement healing', 'Mind-body unity']
        }
      ]
    },
    specialized: {
      title: 'Specialized Reiki Programs',
      icon: <Sparkles className="w-6 h-6" />,
      services: [
        {
          name: 'Corporate Wellness Reiki',
          description: 'Stress relief for teams',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Corporate',
          level: 'Business',
          features: ['Team healing', 'Workplace wellness', 'Stress management', 'Productivity enhancement', 'Group sessions']
        },
        {
          name: 'Wellness Retreat Packages',
          description: 'Weekend or 7-day immersive retreats',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Retreat',
          level: 'Immersive',
          features: ['Retreat setting', 'Immersive healing', 'Group energy', 'Nature connection', 'Deep transformation']
        },
        {
          name: 'Reiki for Children & Teen Wellness',
          description: 'Focus, emotional stability',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Youth',
          level: 'Developmental',
          features: ['Youth focus', 'Emotional stability', 'Concentration aid', 'Behavioral support', 'Growth enhancement']
        },
        {
          name: 'Reiki for Elderly Care',
          description: 'Mobility, comfort, and emotional peace',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Elder Care',
          level: 'Senior',
          features: ['Mobility support', 'Comfort enhancement', 'Emotional peace', 'Gentle healing', 'Senior care']
        },
        {
          name: 'Reiki for Athletes',
          description: 'Recovery, focus, performance',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Athletic',
          level: 'Performance',
          features: ['Recovery acceleration', 'Focus enhancement', 'Performance boost', 'Injury prevention', 'Athletic wellness']
        },
        {
          name: 'Reiki for Addiction Recovery',
          description: 'Emotional and energetic support',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Recovery',
          level: 'Support',
          features: ['Recovery support', 'Emotional healing', 'Energetic balance', 'Addiction aid', 'Holistic recovery']
        },
        {
          name: 'Reiki for Grief Healing',
          description: 'Emotional resilience after loss',
          price: 0,
          displayPrice: 'Contact Us',
          duration: 'Grief Support',
          level: 'Emotional',
          features: ['Grief processing', 'Emotional resilience', 'Loss support', 'Healing comfort', 'Peace restoration']
        }
      ]
    },
    digital: {
      title: 'Digital & Global Services',
      icon: <Zap className="w-6 h-6" />,
      services: [
        {
          name: 'Online Reiki Attunements',
          description: 'Live or pre-recorded certifications',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Online',
          level: 'Digital',
          features: ['Online attunements', 'Live sessions', 'Recorded options', 'Global access', 'Digital certification']
        },
        {
          name: 'Membership Healing Circles',
          description: 'Monthly group healing over Zoom',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Monthly',
          level: 'Community',
          features: ['Group healing', 'Monthly sessions', 'Community support', 'Zoom meetings', 'Collective energy']
        },
        {
          name: 'Reiki Healing Subscription',
          description: 'Weekly distant Reiki sessions',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Weekly',
          level: 'Subscription',
          features: ['Weekly healing', 'Subscription model', 'Consistent support', 'Remote sessions', 'Ongoing wellness']
        },
        {
          name: 'Recorded Guided Meditations',
          description: 'Downloadable content',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Download',
          level: 'Content',
          features: ['Guided meditations', 'Downloadable', 'Self-paced', 'Audio content', 'Personal practice']
        },
        {
          name: 'E-learning Reiki Courses',
          description: 'Videos, workbooks, quizzes',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Self-Paced',
          level: 'Education',
          features: ['Video lessons', 'Workbooks', 'Interactive quizzes', 'Self-paced learning', 'Comprehensive curriculum']
        },
        {
          name: 'Global Energy Exchange Groups',
          description: 'Online community circles',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Community',
          level: 'Global',
          features: ['Global community', 'Energy exchange', 'Online circles', 'Peer support', 'Worldwide connection']
        },
        {
          name: 'Personalized Energy Reports',
          description: 'Feedback on energy patterns after sessions',
          price: 0,
          displayPrice: 'Coming Soon',
          duration: 'Custom',
          level: 'Analysis',
          features: ['Energy analysis', 'Personal feedback', 'Pattern recognition', 'Progress tracking', 'Detailed reports']
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
              Through Reiki Healing
            </span>
          </h1>
          <p className="text-lg text-[#4A1A11] max-w-3xl mx-auto leading-relaxed">
            Experience the ancient Japanese art of energy healing. Our comprehensive Reiki services 
            offer transformation, balance, and deep healing for body, mind, and spirit.
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
            Why Choose Celestials Reiki Healing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#4A1A11]">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Certified Masters</h3>
              <p className="text-sm">Trained and attuned Reiki masters with years of healing experience</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Waves className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Energy Healing</h3>
              <p className="text-sm">Ancient Japanese technique for stress reduction and natural healing</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Holistic Approach</h3>
              <p className="text-sm">Healing for body, mind, and spirit through universal life force energy</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-[#f6cf92] rounded-full flex items-center justify-center mx-auto">
                <Sun className="w-6 h-6 text-[#4D5557]" />
              </div>
              <h3 className="font-semibold text-[#4D5557]">Global Reach</h3>
              <p className="text-sm">In-person and distance healing available worldwide</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 
            className="text-3xl font-bold text-[#4D5557] mb-4"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Begin Your Healing Journey Today
          </h2>
          <p className="text-[#4A1A11] mb-8 max-w-2xl mx-auto">
            Experience the transformative power of Reiki healing. Whether seeking training, 
            personal healing, or spiritual growth, our certified masters are here to guide you.
          </p>
          <button className="px-8 py-4 bg-[#4D5557] text-white font-semibold rounded-full shadow-lg hover:bg-[#32120b] hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Contact Celestials Reiki Team
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

        /* Energy flow effect */
        @keyframes flow {
          0%, 100% { opacity: 0.1; transform: translateX(0); }
          50% { opacity: 0.3; transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
}