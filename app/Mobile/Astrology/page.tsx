"use client";
import React, { useState } from 'react';
import { Star, Sparkles, User } from 'lucide-react';

interface Astrologer {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  specialty: string;
  image: string;
}

const AstrologyApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Pricing');
  
  const astrologers: Astrologer[] = [
    { id: 1, name: 'Astro Meera', rating: 4.9, reviews: 1200, specialty: 'Tarot & Palmistry', image: '🔮' },
    { id: 2, name: 'Pandit Arjun', rating: 4.8, reviews: 980, specialty: 'Tarot & Palmistry', image: '📿' },
    { id: 3, name: 'Astro Kavya', rating: 4.9, reviews: 750, specialty: 'Tarot & Palmistry', image: '🌙' },
    { id: 4, name: 'Guru Dev', rating: 4.7, reviews: 1600, specialty: 'Tarot & Palmistry', image: '✨' },
  ];

  const tabs = ['Pricing', 'Language', 'Availability', 'Experience'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Margin Label */}
        <div className="text-teal-600 text-sm font-medium mb-2 px-1">
          Margin
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-blue-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-blue-100">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Hi, Ananya</h1>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-200">
                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-600 text-xs">💰</span>
                </div>
                <span className="text-blue-600 font-semibold">Balance: 15,450</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">Talk to an Astrologer</h2>
              <p className="text-sm text-gray-600">Certified experts, available 24/7</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 px-4 py-3 bg-white border-b border-gray-100 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Free Kundli Banner */}
          <div className="mx-4 mt-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-4 flex items-center justify-between shadow-lg">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Free Kundli Now</h3>
              <p className="text-blue-50 text-sm">Get your personalized birth chart in a minute.</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Astrologers Grid */}
          <div className="p-4 grid grid-cols-2 gap-4">
            {astrologers.map((astro) => (
              <div
                key={astro.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-3 text-3xl border-2 border-amber-200 shadow-sm">
                    {astro.image}
                  </div>
                  
                  {/* Name */}
                  <h3 className="font-bold text-gray-800 text-center mb-2">{astro.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-700">{astro.rating}</span>
                    <span className="text-gray-500 text-sm">({astro.reviews})</span>
                  </div>
                  
                  {/* Specialty */}
                  <p className="text-sm text-gray-600 text-center">{astro.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-4 bg-white rounded-3xl shadow-xl border-2 border-blue-200 overflow-hidden">
          <div className="flex justify-around items-center py-3">
            {[
              { icon: '🔮', label: 'Astrology', active: true },
              { icon: '🧘', label: 'Yoga', active: false },
              { icon: '🕉️', label: 'Reiki', active: false },
              { icon: '🙏', label: 'Pujas', active: false },
              { icon: '👤', label: 'Profile', active: false },
            ].map((item, idx) => (
              <button
                key={idx}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  item.active ? 'bg-blue-100' : 'hover:bg-gray-50'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className={`text-xs font-medium ${item.active ? 'text-blue-600' : 'text-gray-600'}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyApp;