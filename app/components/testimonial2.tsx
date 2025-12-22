'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Los Angeles, CA",
      text: "The Reiki session was transformative. I felt a deep sense of peace and relaxation that I haven't experienced in years. The energy healing helped release tension I didn't even know I was holding.",
      rating: 5
    },
    {
      name: "James Chen",
      location: "New York, NY",
      text: "After my first session, I noticed a significant improvement in my sleep quality and overall well-being. The practitioner's gentle approach made me feel safe and cared for throughout the entire experience.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      location: "Miami, FL",
      text: "I was skeptical at first, but the healing energy was undeniable. I left feeling lighter, more balanced, and with a renewed sense of clarity. This has become an essential part of my self-care routine.",
      rating: 5
    },
    {
      name: "David Thompson",
      location: "Seattle, WA",
      text: "The caring hands and calming presence created such a nurturing space. I experienced emotional release and physical relaxation simultaneously. Truly a gift of presence.",
      rating: 5
    },
    {
      name: "Emily Parker",
      location: "Austin, TX",
      text: "Each session feels like a reset button for my mind and body. The soft light and gentle energy help me reconnect with myself. I always leave feeling renewed and grounded.",
      rating: 5
    },
    {
      name: "Michael Brown",
      location: "Boston, MA",
      text: "The healing energy work addressed issues I couldn't solve through traditional methods. I feel more centered, peaceful, and capable of handling life's challenges with grace.",
      rating: 5
    }
  ];

  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[500px] bg-gradient-to-b from-[#f6cf92] to-white">
      {/* Background Orbs */}
      

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-[#4a1e16]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-[#4a1e16]" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 2}rem / ${visibleCards})` }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg 
                          key={i}
                          className="w-5 h-5 fill-[#4a1e16]" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#4A1A11] leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-[#4D5557]/20 pt-4">
                      <p 
                        className="font-semibold text-[#4D5557] text-lg"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-[#4A1A11] text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#4a1e16] w-8' 
                    : 'bg-[#4a1e16]/30 hover:bg-[#4a1e16]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}