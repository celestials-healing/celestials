'use client'
import React from 'react';

export default function ReikiHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      {/* Subtle Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd7a8] opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6d992] opacity-20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#4D5557] leading-tight"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Reiki - The Gift of{' '}
              <span className="bg-gradient-to-r from-[#6a7577] to-[#4D5557] bg-clip-text text-transparent">
                Presence
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#4A1A11] leading-relaxed max-w-2xl font-light">
              Wherever you are, soft light surrounds you. Offering space to breathe, to heal & to simply be held gently in caring hands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#32120b] to-[#4a1e16] hover:from-[#4D5557] hover:to-[#5d6769] rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Feel it Today
              </button>
              
              <button 
                className="px-10 py-4 text-lg font-semibold text-[#4D5557] bg-white/80 hover:bg-white border-2 border-[#4D5557] rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Get Yourself Healed Today
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=900&fit=crop" 
                alt="Reiki healing energy"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4D5557]/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ffd7a8] opacity-50 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#f6d992] opacity-50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}