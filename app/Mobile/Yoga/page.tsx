"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, X, CreditCard, Clock, MapPin, User, Info } from 'lucide-react';

interface YogaClass {
  id: number;
  date: string;
  time: string;
  name: string;
  instructor: string;
  credits: number;
}

interface PricingPack {
  id: number;
  name: string;
  price: number;
  credits: number;
  validity: string;
  description: string;
  features?: string[];
  badge?: string;
}

const YogaBookingApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Consultation');
  const [showClassModal, setShowClassModal] = useState(false);
  const [showPackModal, setShowPackModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState<YogaClass | null>(null);
  const [selectedPack, setSelectedPack] = useState<PricingPack | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  
  // Consultation states
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['Stress & anxiety']);
  const [selectedIntensity, setSelectedIntensity] = useState('Balanced');

  const classes: YogaClass[] = [
    { id: 1, date: 'Tue, 3 Dec', time: '7:00 AM - 8:00 AM', name: 'Vinyasa Basic', instructor: 'Assigned Guru', credits: 1 },
    { id: 2, date: 'Wed, 4 Dec', time: '6:00 PM - 7:00 PM', name: 'Hatha Classic', instructor: 'Guru Nitya', credits: 1 },
  ];

  const pricingPacks: PricingPack[] = [
    {
      id: 1,
      name: 'Introductory Class',
      price: 599,
      credits: 1,
      validity: '1 week',
      description: 'Your first step into Celestials. Try our guided yoga classes before choosing a membership or larger pack.',
      badge: 'Credit Pack'
    },
    {
      id: 2,
      name: 'Monthly Flow Pack',
      price: 2399,
      credits: 4,
      validity: '1 month',
      description: 'Perfect for weekly practice. Stay consistent with 4 classes this month.',
      features: ['4 credits 13 Validity: 1 month']
    },
    {
      id: 3,
      name: 'Deep Practice Pack',
      price: 6999,
      credits: 12,
      validity: '3 months',
      description: 'Build a deeper habit. Ideal for steady, transformative practice.',
      features: ['12 credits 13 Validity: 3 months']
    },
    {
      id: 4,
      name: '6-Month Journey',
      price: 10782,
      credits: 24,
      validity: '6 months',
      description: 'Commit to a deep, long-term practice. Ideal for transformative growth with 24 guided classes.',
      features: ['24 credits 13 Validity: 6 months']
    },
  ];

  const goals = [
    'Stress & anxiety',
    'Flexibility & mobility',
    'Back or neck pain',
    'Better sleep',
    'Energy & focus',
    'Just want to try'
  ];

  const intensities = ['Very gentle', 'Balanced', 'Sweaty & strong'];

  const handleClassBook = (yogaClass: YogaClass) => {
    setSelectedClass(yogaClass);
    setShowClassModal(true);
  };

  const handlePackSelect = (pack: PricingPack) => {
    setSelectedPack(pack);
    setShowPackModal(true);
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800">Yoga</h1>
            <p className="text-sm text-gray-600">Find the right practice for you</p>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border-2 border-blue-200">
            <CreditCard className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600">Credits: 6</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {['Classes', 'Pricing', 'Consultation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters for Classes */}
        {activeTab === 'Classes' && (
          <>
            <div className="flex gap-2 mb-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
                Guru <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
                Classes <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button className="text-blue-500 text-sm font-semibold hover:underline">
              Clear filters
            </button>
          </>
        )}
      </div>

      {/* Classes View */}
      {activeTab === 'Classes' && (
        <div className="p-4 space-y-3">
          {classes.map((yogaClass) => (
            <div key={yogaClass.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex gap-3">
                <div className="bg-blue-500 text-white rounded-xl px-3 py-2 text-center min-w-[70px]">
                  <div className="text-xs font-medium">{yogaClass.date.split(',')[0]}</div>
                  <div className="text-lg font-bold">{yogaClass.date.split(' ')[1]}</div>
                  <div className="text-xs">{yogaClass.date.split(' ')[2]}</div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">{yogaClass.time}</p>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{yogaClass.name}</h3>
                      <p className="text-sm text-gray-600">{yogaClass.instructor}</p>
                    </div>
                    <button
                      onClick={() => handleClassBook(yogaClass)}
                      className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                    >
                      Book now
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">{yogaClass.credits} credit</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pricing View */}
      {activeTab === 'Pricing' && (
        <div className="p-4 space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">Group Class</h2>
                <p className="text-sm text-gray-600">1 credit = ₹599 INR</p>
              </div>
              <Info className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">Private Session</h3>
            <p className="text-sm text-gray-600 mb-1">Coming Soon</p>
          </div>

          {pricingPacks.map((pack) => (
            <div key={pack.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-800">{pack.name}</h3>
                {pack.badge && (
                  <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                    {pack.badge}
                  </span>
                )}
              </div>
              
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-gray-800">₹{pack.price}</span>
                {pack.id === 1 && <span className="text-green-600 font-semibold">Free</span>}
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  <span>{pack.credits} credit</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{pack.validity}</span>
                </div>
                {pack.id === 1 && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-blue-600 font-medium">New Delhi</span>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-700 mb-4">{pack.description}</p>

              {pack.features && (
                <ul className="text-xs text-gray-600 mb-4 space-y-1">
                  {pack.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              )}

              {pack.id === 4 && (
                <p className="text-xs text-gray-500 mb-4">
                  Validity: This class is valid for one week from the date of purchase.
                </p>
              )}

              <button
                onClick={() => handlePackSelect(pack)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Buy now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Consultation View */}
      {activeTab === 'Consultation' && (
        <div className="p-4 space-y-6">
          {/* Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border border-blue-200">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Not sure which yoga is right?</h2>
            <p className="text-sm text-gray-600">
              Answer a few questions and we'll gently guide you to a practice that suits your energy and routine.
            </p>
          </div>

          {/* Talk to Expert */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Talk to an expert</h3>
                <p className="text-sm text-gray-600">
                  Chat with a certified yoga guide if you want human support before you begin.
                </p>
              </div>
              <button className="text-blue-600 font-semibold text-sm whitespace-nowrap ml-3 hover:underline">
                Connect
              </button>
            </div>
          </div>

          {/* Astro-backed Yoga */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Try astro-backed yoga</h3>
                <p className="text-sm text-gray-600">
                  Blend your birth chart with yoga styles like Hatha, Yin and Restorative.
                </p>
              </div>
              <button className="text-blue-600 font-semibold text-sm whitespace-nowrap ml-3 hover:underline">
                Explore
              </button>
            </div>
          </div>

          {/* What brings you to yoga */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">What brings you to yoga?</h3>
            <div className="flex flex-wrap gap-2">
              {goals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => toggleGoal(goal)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedGoals.includes(goal)
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Intensity */}
          <div>
            <h3 className="font-bold text-gray-800 mb-3">How intense do you want your sessions?</h3>
            <div className="flex gap-2">
              {intensities.map((intensity) => (
                <button
                  key={intensity}
                  onClick={() => setSelectedIntensity(intensity)}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedIntensity === intensity
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {intensity}
                </button>
              ))}
            </div>
          </div>

          {/* AI Preview */}
          <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
            <h3 className="text-blue-600 font-bold mb-2">AI preview</h3>
            <p className="text-sm text-gray-700 mb-3">
              Based on your choices, we'll likely recommend a mix of gentle Hatha and Restorative evening classes, with breathwork to calm your nervous system.
            </p>
            <p className="text-xs text-gray-600">
              You'll see exact class names, timings and credit use on the next step.
            </p>
          </div>

          {/* Generate Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
            Generate my yoga plan
          </button>

          {/* Skip Link */}
          <button className="w-full text-blue-500 font-semibold text-sm hover:underline">
            Skip for now, browse all classes
          </button>
        </div>
      )}

      {/* Class Booking Modal */}
      {showClassModal && selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Confirm Class Booking</h2>
              <button
                onClick={() => setShowClassModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Summary</h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-800">{selectedClass.name}</h4>
                    <p className="text-sm text-gray-600">{selectedClass.date} | {selectedClass.time}</p>
                    <p className="text-sm text-gray-600">{selectedClass.instructor}</p>
                  </div>
                  <span className="text-lg font-bold text-gray-800">₹599</span>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-3">Payment summary</h3>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Class price</span>
                  <span className="font-semibold">₹599</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Credits used</span>
                  <span className="font-semibold text-green-600">1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Discount</span>
                  <span className="font-semibold text-green-600">₹599</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="font-bold text-gray-800">₹0</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 text-blue-600">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-semibold">Credits: 6</span>
                </div>
                <button className="text-blue-600 font-semibold hover:underline text-sm">
                  Add credits
                </button>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl mb-3 transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={() => setShowClassModal(false)}
                className="w-full bg-white border-2 border-blue-500 text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pack Purchase Modal */}
      {showPackModal && selectedPack && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Confirm Pack</h2>
              <button
                onClick={() => setShowPackModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 text-blue-600">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-semibold">Credits: 6</span>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-3">Pack summary</h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{selectedPack.name}</h4>
                    <p className="text-sm text-gray-600">{selectedPack.credits} credits 13 Validity: {selectedPack.validity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">₹{selectedPack.price.toLocaleString()}</p>
                    <p className="font-bold text-gray-800">₹{selectedPack.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-gray-600 mb-3">Payment method</h3>
              <div className="space-y-2 mb-6">
                {['UPI', 'Debit / Credit Card', 'Wallet'].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
                    style={{
                      borderColor: paymentMethod === method ? '#3B82F6' : '#E5E7EB'
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="w-5 h-5 text-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-800">{method}</span>
                  </label>
                ))}
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl mb-3 transition-colors">
                Confirm & Pay
              </button>
              <button
                onClick={() => setShowPackModal(false)}
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

export default YogaBookingApp;