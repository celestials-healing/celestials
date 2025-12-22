'use client';
import { useState } from 'react';


interface ExpandableCardProps {
  title: string;
  description: string;
  isHighlighted: boolean;
}const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, description, isHighlighted }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-all duration-300 ease-in-out ${
        isHovered ? 'z-10' : 'z-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`rounded-2xl p-8 transition-all duration-300 ease-in-out ${
          isHighlighted
            ? 'border-2 border-[#4A1A11] bg-gradient-to-br from-[#f6cf92] to-[#f5d9a8]'
            : 'border border-[#d4a574] bg-gradient-to-br from-white to-[#fef9f0]'
        } ${
          isHovered
            ? 'shadow-2xl scale-105 -translate-y-2'
            : 'shadow-md hover:shadow-lg'
        }`}
      >
        <h2
          className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
            isHighlighted ? 'text-[#4A1A11]' : 'text-[#4D5557]'
          }`}
          style={{ fontFamily: 'Playfair Display' }}
        >
          {title}
        </h2>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-[#4A1A11] mb-6 leading-relaxed">{description}</p>
        </div>

        <button
          className={`text-[#4A1A11] font-medium transition-all duration-300 flex items-center gap-2 ${
            isHovered ? 'mt-2' : 'mt-0'
          }`}
          style={{ fontFamily: 'Playfair Display' }}
        >
          Learn more 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const cards = [
  {
    title: 'Celestials Academy',
    description:
      'Learn the ancient sciences of energy, astrology, and mindfulness through certified courses and guided mentorship.',
    isHighlighted: true,
  },
  {
    title: 'Community',
    description:
      'Join a conscious circle of healers, learners, and seekers. Share, grow, and find support in a safe and soulful space.',
    isHighlighted: false,
  },
  {
    title: 'Corporate',
    description:
      'Bring balance to your workplace with our wellness programs — blending mindfulness, stress healing, and energy alignment.',
    isHighlighted: false,
  },
];


const CAROUSEL_LENGTH = 8;
const ITEM_DEPTH = 80;

// Update this array with your actual images and content
const carouselData = [
  {
    image: '/image2.jpg',
    title: 'Reiki',
    description: "Rejuvenate your mind, body, and spirit with our professional Reiki healing sessions. Using ancient energy healing techniques, our certified practitioners channel positive energy to remove blockages, reduce stress, and promote emotional and physical well-being. Whether you're seeking relaxation, pain relief, or spiritual alignment, Reiki can help restore balance and harmony in your life.",
    buttonText: 'Reiki'
  },
  // {
  //   image: '/image1.jpg',
  //   title: 'Creative Design',
  //   description: 'Experience beautiful aesthetics combined with powerful functionality.',
  //   buttonText: 'Explore Now'
  // },
  // {
  //   image: '/image3.jpg',
  //   title: 'Global Reach',
  //   description: 'Connect with millions of users worldwide through our platform.',
  //   buttonText: 'Get Started'
  // },
  // {
  //   image: '/puja.jpg',
  //   title: 'Secure Platform',
  //   description: 'Your data is protected with enterprise-grade security measures.',
  //   buttonText: 'Read More'
  // },
  // {
  //   image: '/card.jpg',
  //   title: 'Fast Performance',
  //   description: 'Lightning-fast speeds that keep you productive all day long.',
  //   buttonText: 'Try It Free'
  // },
  // {
  //   image: '/astro.jpg',
  //   title: 'Team Collaboration',
  //   description: 'Work together seamlessly with powerful collaboration tools.',
  //   buttonText: 'Join Now'
  // },
  {
    image: '/about.jpeg',
    title: 'Yoga Sessions',
    description: "Rejuvenate your mind, body, and soul with our calming yoga sessions. Guided by experienced instructors, each class blends breathing techniques, meditation, and asanas to enhance flexibility, balance, and inner peace. Whether you're a beginner or a seasoned practitioner, our yoga sessions are designed to reduce stress, improve overall well-being, and help you stay connected with your inner self.",
    buttonText: 'Yoga'
  },
  {
    image: '/astrology1.jpg',
    title: "Astrology",
    description: "Discover the secrets of your destiny with our expert Astrology and Palmistry services. Our experienced astrologers analyze planetary positions and cosmic influences to provide deep insights into your personality, career, relationships, and future possibilities. Meanwhile, our palmistry readings interpret the lines and mounts on your hand to reveal your strengths, challenges, and life path. Gain clarity and guidance to navigate life with confidence.",
    buttonText: 'Astrology'
  }
];

export default function Carousel3D() {
  const [index, setIndex] = useState(0);
  
  const z = CAROUSEL_LENGTH * ITEM_DEPTH;
  const currentSlide = carouselData[((index % CAROUSEL_LENGTH) + CAROUSEL_LENGTH) % CAROUSEL_LENGTH];
  const angle = (index / CAROUSEL_LENGTH) * -360;
  
  const getTransform = (id: number): string => {
    const deg = id * (360 / CAROUSEL_LENGTH);
    return `rotateY(${deg}deg) translateZ(${z}px)`;
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f6cf92] py-20 relative overflow-hidden">
        <div className="min-h-[300px] flex items-center justify-center p-8 mb-12">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <ExpandableCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  isHighlighted={card.isHighlighted}
                />
              ))}
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-4 text-[#4D5557] text-center" style={{
          fontFamily: 'Playfair Display',
          fontWeight: '700',
        }}>Our Offerings</h1>
        
        <p className="mb-12 text-xl text-[#4A1A11] text-center">
          A wide range of services are provided to help you understand yourself better and make
          better decisions in life.
        </p>
      {/* Subtle Background Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#ffd7a8] opacity-15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#f6d992] opacity-15 rounded-full blur-3xl" />
      
      <div 
        className="relative w-[500px] h-[320px] mx-auto mb-12"
        style={{ perspective: '1500px' }}
      >
        {/* Carousel */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[320px] transition-transform duration-500 ease-in-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${z}px) rotateY(${angle}deg)`,
            willChange: 'transform'
          }}
        >
          {carouselData.map((item, id) => (
            <div
              key={id}
              className="absolute top-0 left-0 w-[500px] h-[320px] rounded-xl border-4 border-[#f6cf92] shadow-2xl overflow-hidden"
              style={{
                transform: getTransform(id),
                backfaceVisibility: 'hidden'
              }}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover"
                src={item.image}
              />
            </div>
          ))}
        </div>
        
        {/* Controls */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[320px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${z}px) rotateY(0deg)`
          }}
        >
          {/* Previous button */}
          <button
            className="absolute top-[2px] left-[2px] w-[500px] h-[320px] opacity-0 hover:opacity-5 cursor-pointer rounded-xl border-4 border-transparent active:opacity-10 transition-opacity"
            style={{ transform: getTransform(CAROUSEL_LENGTH - 1) }}
            onClick={() => setIndex(index - 1)}
            aria-label="Previous image"
          />
          
          {/* Next button */}
          <button
            className="absolute top-[2px] left-[2px] w-[500px] h-[320px] opacity-0 hover:opacity-5 cursor-pointer rounded-xl border-4 border-transparent active:opacity-10 transition-opacity"
            style={{ transform: getTransform(1) }}
            onClick={() => setIndex(index + 1)}
            aria-label="Next image"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold text-[#4D5557] mb-4 transition-all duration-300" style={{ fontFamily: 'Playfair Display' }}>
          {currentSlide.title}
        </h2>
        <p className="text-lg text-[#4A1A11] mb-8 transition-all duration-300">
          {currentSlide.description}
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-[#32120b] to-[#4a1e16] hover:from-[#4D5557] hover:to-[#5d6769] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Playfair Display' }}>
          {currentSlide.buttonText}
        </button>
        
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {carouselData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                ((index % CAROUSEL_LENGTH) + CAROUSEL_LENGTH) % CAROUSEL_LENGTH === i
                  ? 'bg-[#4a1e16] w-8'
                  : 'bg-[#fabc5a] hover:bg-[#4D5557]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}