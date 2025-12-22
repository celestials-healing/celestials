'use client';
import React, { useState } from 'react';
import { ChevronLeft, Clock, Users, Languages, Plus, X, Wallet } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  duration: number;
  price: number;
  description: string;
  popular?: boolean;
}

const AstrologerDetails: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState('Mon, 2 Dec');
  const [selectedTime, setSelectedTime] = useState('7:00 PM');

  const services: Service[] = [
    { id: 1, name: 'Sutra', duration: 20, price: 400, description: 'Get to know yourself.' },
    { id: 2, name: 'Yatra', duration: 40, price: 800, description: 'Detailed life analysis', popular: true },
    { id: 3, name: 'Vishwas', duration: 60, price: 1200, description: 'Complete horoscope reading' },
    { id: 4, name: 'Anant', duration: 90, price: 1500, description: 'In-depth life path & future guidance' },
  ];

  const dates = ['Mon, 2 Dec', 'Tue, 3 Dec', 'Wed, 4 D'];
  const times = ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM'];

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Astrologer Details</h1>
      </div>

      {/* Astrologer Profile */}
      <div className="bg-white p-6 mb-2">
        <div className="flex gap-4 mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 flex items-center justify-center text-4xl overflow-hidden">
              🔮
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Astro Meera</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-blue-500">📚</span>
                <span>10+ years in Vedic Astrology</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Expert in Tarot & Palmistry</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-blue-500" />
                <span>5000+ consultations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Languages className="w-4 h-4 text-blue-500" />
                <span>Available in Hindi, English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Trial Banner */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 mx-4 rounded-2xl p-4 mb-4 border border-green-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-bold text-gray-800">Aaramb</span>
              <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">FREE</span>
            </div>
            <p className="text-green-700 font-semibold text-sm mb-1">Free 12-min Trial</p>
            <p className="text-gray-600 text-sm">Quick introduction call</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg transition-colors">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Services List */}
      <div className="bg-white">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`px-6 py-4 ${index !== services.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{service.name}</h3>
                  <span className="text-sm text-gray-600">{service.duration} min</span>
                  {service.popular && (
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-lg font-bold text-gray-800">₹{service.price}</span>
                <button
                  onClick={() => handleServiceClick(service)}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors"
                >
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl animate-slide-up">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Confirm Session</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {/* Summary */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">Summary</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-200 to-amber-200 flex items-center justify-center text-xl">
                      🔮
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Astro Meera</p>
                      <p className="text-sm text-gray-600">{selectedService.name} - {selectedService.duration} mins</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-gray-800">₹{selectedService.price}</span>
                </div>
              </div>

              {/* Choose Date */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Choose date</h3>
                <div className="flex gap-2">
                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDate === date
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>

              {/* Choose Time */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Choose time</h3>
                <div className="grid grid-cols-3 gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedTime === time
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Balance */}
              <div className="flex items-center justify-between mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 text-blue-600">
                  <Wallet className="w-5 h-5" />
                  <span className="font-semibold">Balance: ₹2,450</span>
                </div>
                <button className="text-blue-600 font-semibold hover:underline">
                  Add funds
                </button>
              </div>

              {/* Action Buttons */}
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl mb-3 transition-colors shadow-lg">
                Proceed to Checkout
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-white border-2 border-blue-500 text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AstrologerDetails;