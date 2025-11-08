"use client"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ExpandableCard = ({ title, description, isHighlighted }) => {
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


const products = [
  {
    name: "Reiki",
    description:
      "Rejuvenate your mind, body, and spirit with our professional Reiki healing sessions. Using ancient energy healing techniques, our certified practitioners channel positive energy to remove blockages, reduce stress, and promote emotional and physical well-being. Whether you're seeking relaxation, pain relief, or spiritual alignment, Reiki can help restore balance and harmony in your life.",
    imageSrc: "/reiki.jpg",
    route: "/courses",
  },
  {
    name: "Astrology",
    description:
      "Discover the secrets of your destiny with our expert Astrology and Palmistry services. Our experienced astrologers analyze planetary positions and cosmic influences to provide deep insights into your personality, career, relationships, and future possibilities. Meanwhile, our palmistry readings interpret the lines and mounts on your hand to reveal your strengths, challenges, and life path. Gain clarity and guidance to navigate life with confidence.",
    imageSrc: "/astro.jpg",
    route: "/Astrology",
  },
  {
    name: "Yoga Sessions",
    description:
      "Rejuvenate your mind, body, and soul with our calming yoga sessions. Guided by experienced instructors, each class blends breathing techniques, meditation, and asanas to enhance flexibility, balance, and inner peace. Whether you're a beginner or a seasoned practitioner, our yoga sessions are designed to reduce stress, improve overall well-being, and help you stay connected with your inner self.",
    imageSrc: "/yoga.jpg",
    route: "/Yoga",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [scrollProgress, setScrollProgress] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     // Extended scroll range to allow mandala to travel further down
  //     const progress = Math.max(0, Math.min((scrollPosition - windowHeight * 0.2) / (windowHeight * 1.5), 1));
  //     setScrollProgress(progress);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleExplore = () => {
    console.log(`Exploring ${products[activeIndex].name}`);
  };

 

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
      
     
      <div className="flex flex-col w-full min-h-screen justify-center items-center p-8 md:p-10 relative z-10">
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

        <div className="hidden lg:flex flex-row w-full max-w-7xl">
          <div className="w-full md:w-4/5 relative min-h-[500px]">
            <div className="relative w-full h-full flex justify-center items-center">
              {products.map((product, i) => {
                const indexDiff = (i - activeIndex + products.length) % products.length;

                return (
                  <img
                    key={i}
                    src={product.imageSrc}
                    alt={product.name}
                    className={`absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg
                      ${indexDiff === 0 ? "w-[340px] h-[450px] left-[65%] z-30 left-1/2 transform -translate-x-1/2" : ""}
                      ${indexDiff === 1 ? "w-[250px] h-[400px] left-[35%] z-20 brightness-75" : ""}
                      ${indexDiff === 2 ? "w-[300px] h-[350px] left-[25%] z-10 brightness-50" : ""}
                      ${indexDiff === 3 ? "w-[250px] h-[300px] left-[15%] z-0 brightness-30" : ""}
                      ${indexDiff > 3 ? "hidden" : ""}
                    `}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-3/5 p-4 md:p-0 md:pr-8 text-left flex flex-col justify-center">
            <h2 className="text-5xl text-[#4A1A11] font-bold mb-2" style={{
              fontFamily: 'Playfair Display',
              fontWeight: '700',
            }}>{products[activeIndex].name}</h2>
            <p className="text-gray-700 mb-8 text-lg">{products[activeIndex].description}</p>

            <button
              onClick={handleExplore}
              className="relative px-12 py-4 text-lg font-bold text-white rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 group overflow-hidden w-fit"
              style={{ fontFamily: 'Playfair Display' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4D5557] via-[#5d6769] to-[#4D5557] group-hover:from-[#32120b] group-hover:via-[#4a1e16] group-hover:to-[#32120b] transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center gap-2">
                Explore {products[activeIndex].name}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden w-full max-w-2xl">
          <div className="relative mb-8">
            <div className="flex justify-center">
              <img
                src={products[activeIndex].imageSrc}
                alt={products[activeIndex].name}
                className="w-80 h-96 md:w-96 md:h-[450px] rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="text-center px-4">
            <h2 
              className="text-3xl md:text-4xl text-[#4A1A11] font-bold mb-4" 
              style={{ fontFamily: 'Playfair Display', fontWeight: "700" }}
            >
              {products[activeIndex].name}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              {products[activeIndex].description}
            </p>

            <button
              onClick={handleExplore}
              className="relative px-10 py-4 text-lg font-bold text-white rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden w-full"
              style={{ fontFamily: 'Playfair Display' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4D5557] to-[#5d6769]"></div>
              <span className="relative z-10">Explore {products[activeIndex].name}</span>
            </button>
          </div>
        </div>

        {/* Desktop Navigation Buttons */}
        <div className="hidden lg:flex w-full justify-center relative top-[-70px] left-[160px]">
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-4 bg-[#4A1A11] rounded-full shadow-md text-white hover:bg-[#32120b] transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 bg-[#4A1A11] rounded-full shadow-md text-white hover:bg-[#32120b] transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Dots Indicator for Mobile */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#4A1A11] scale-125' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;