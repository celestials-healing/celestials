"use client";
import React, { useState } from 'react';
import { ChevronLeft, Star } from 'lucide-react';

export default function YogaConsultation() {
  const [selectedConnection, setSelectedConnection] = useState('text');
  const [selectedTime, setSelectedTime] = useState('30mins');
  const [context, setContext] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="font-semibold text-lg">Yoga</h1>
              <p className="text-sm text-gray-500">Talk to an expert</p>
            </div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 border border-blue-200 rounded-full">
            <Star className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-500 font-medium">Credits: 6</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Consultation Card */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h2 className="font-semibold text-base mb-2">1:1 consultation call</h2>
            <p className="text-sm text-gray-600 mb-4">
              A certified yoga consultant will help you choose the safest, most supportive start to your practice.
            </p>
            
            <div className="flex items-start gap-3 mb-3">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                alt="Consultant"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-medium text-gray-700">Certified yoga therapist</p>
                <p className="text-gray-500">Trauma-aware & beginner friendly</p>
                <p className="text-gray-500 mt-1">Available today</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">Consultation is free</p>

          {/* Connection Method */}
          <div>
            <h3 className="font-medium text-base mb-3">How would you like to connect?</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedConnection('text')}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedConnection === 'text'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Text + voice notes
              </button>
              <button
                onClick={() => setSelectedConnection('voice')}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedConnection === 'voice'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Voice call (15 min)
              </button>
              <button
                onClick={() => setSelectedConnection('video')}
                className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedConnection === 'video'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Video call (20 min)
              </button>
            </div>
          </div>

          {/* Scheduling */}
          <div>
            <h3 className="font-medium text-base mb-3">When do you want to schedule it?</h3>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <button
                onClick={() => setSelectedTime('30mins')}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedTime === '30mins'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Within 30 mins
              </button>
              <button
                onClick={() => setSelectedTime('evening')}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedTime === 'evening'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                This evening (6-10 PM)
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedTime('tomorrow')}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedTime === 'tomorrow'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Tomorrow morning
              </button>
              <button
                onClick={() => setSelectedTime('custom')}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedTime === 'custom'
                    ? 'bg-blue-400 text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Share my own time
              </button>
            </div>
          </div>

          {/* Context */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-base">
                Anything you want them to know first?{' '}
                <span className="text-sm text-gray-400 font-normal">Optional</span>
              </h3>
            </div>
            <p className="text-xs text-gray-500 mb-2">Give a short context</p>
            <div className="relative">
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                maxLength={200}
                placeholder="E.g. I have lower back pain, sit at a desk all day, tried a few YouTube classes but felt overwhelmed."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                rows={3}
              />
              <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                {context.length}/200
              </span>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium text-base">What to expect during the call</h3>
              <span className="text-xs text-gray-500">Takes ~15 mins</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>The consultant will take a gentle deep dive into why you are seeking yoga now, how you want to feel, and any past injuries or health conditions.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>They will ask about your previous experience with yoga, meditation or fitness (if any) and how much time you realistically have in a week.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Together you will decide whether to start with gentle Hatha, Yin, Restorative, chair-based or breath-focused practices.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>You will leave the call with 1-3 concrete class recommendations, a safe starting frequency, and tips on how to listen to your body.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Have a quiet space, any relevant medical notes, and your usual daily schedule in mind so your consultant can tailor things to you.</span>
              </li>
            </ul>
          </div>

          {/* Confirm Button */}
          <button className="w-full bg-blue-400 text-white font-medium py-3 rounded-lg hover:bg-blue-500 transition-colors">
            Confirm consultation
          </button>

          {/* Credits Link */}
          <button className="w-full text-blue-500 text-sm hover:underline">
            See how credits work
          </button>
        </div>
      </div>
    </div>
  );
}