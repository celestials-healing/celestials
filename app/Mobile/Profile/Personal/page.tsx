'use client';
import React, { useState } from 'react';
import { ChevronLeft, Edit2, ChevronRight, Calendar, MapPin } from 'lucide-react';

export default function PersonalInfoScreen() {
  const [selectedGender, setSelectedGender] = useState('male');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-lg">Personal info</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact Details */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Contact details</h2>
            
            <div className="space-y-3">
              {/* Phone Number */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Phone number</p>
                  <p className="text-sm text-gray-700">+91 : 98765 43210</p>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Edit2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Email ID */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Email ID</p>
                  <p className="text-sm text-gray-700">ananya.celestials@example.com</p>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Edit2 className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Gender */}
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-3">Gender</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedGender('male')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedGender === 'male'
                        ? 'bg-blue-400 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setSelectedGender('female')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedGender === 'female'
                        ? 'bg-blue-400 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Female
                  </button>
                  <button
                    onClick={() => setSelectedGender('other')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedGender === 'other'
                        ? 'bg-blue-400 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Rather not say
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Security</h2>
            
            <button className="w-full bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900 mb-1">Change password</p>
                <p className="text-xs text-gray-500">Last updated 3 months ago</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Birth & Location */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Birth & location</h2>
            
            <div className="space-y-3">
              {/* Date of Birth */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">Date of birth</p>
                  <p className="text-sm text-gray-700 mb-1">12 Aug 1994</p>
                  <p className="text-xs text-gray-500">Used for astrology & rituals</p>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <Calendar className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Location */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">Location</p>
                  <p className="text-sm text-gray-700 mb-1">Bengaluru, India</p>
                  <p className="text-xs text-gray-500">For accurate charts & puja timings</p>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <MapPin className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-blue-400 text-white font-medium py-3 rounded-lg hover:bg-blue-500 transition-colors">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}