'use client';
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function SpiritualPreferencesScreen() {
  const [primaryFocus, setPrimaryFocus] = useState('astrology');
  const [sessionStyle, setSessionStyle] = useState('gentle');

  const primaryOptions = [
    {
      id: 'astrology',
      title: 'Astrology',
      subtitle: 'Birth chart, transits, guidance'
    },
    {
      id: 'yoga',
      title: 'Yoga',
      subtitle: 'Movement, breath and body'
    },
    {
      id: 'reiki',
      title: 'Reiki & energy',
      subtitle: 'Subtle body healing'
    }
  ];

  const sessionOptions = [
    {
      id: 'gentle',
      title: 'Gentle & reflective',
      subtitle: 'Slow, spacious and calming'
    },
    {
      id: 'direct',
      title: 'Direct & actionable',
      subtitle: 'Clear, concise guidance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-lg">Spiritual preferences</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Primary Focus */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Primary focus</h2>
            
            <div className="space-y-2">
              {primaryOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setPrimaryFocus(option.id)}
                  className="w-full bg-gray-50 rounded-lg p-4 flex items-start justify-between hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-1">{option.title}</p>
                    <p className="text-xs text-gray-500">{option.subtitle}</p>
                  </div>
                  {primaryFocus === option.id ? (
                    <span className="text-xs font-medium text-blue-500 px-2 py-1 bg-blue-50 rounded">
                      Selected
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">Tap to choose</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Session Style */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Session style</h2>
            
            <div className="space-y-2">
              {sessionOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSessionStyle(option.id)}
                  className="w-full bg-gray-50 rounded-lg p-4 flex items-start justify-between hover:bg-gray-100 transition-colors text-left"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 mb-1">{option.title}</p>
                    <p className="text-xs text-gray-500">{option.subtitle}</p>
                  </div>
                  {sessionStyle === option.id && (
                    <span className="text-xs font-medium text-blue-500 px-2 py-1 bg-blue-50 rounded">
                      Preferred
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-blue-400 text-white font-medium py-3 rounded-lg hover:bg-blue-500 transition-colors">
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}