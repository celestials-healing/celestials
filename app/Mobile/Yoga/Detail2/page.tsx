import React from 'react';
import { ChevronLeft, Star } from 'lucide-react';

export default function YogaConfirmation() {
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
              <p className="text-sm text-gray-500">Confirm your consultation</p>
            </div>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 border border-blue-200 rounded-full bg-blue-50">
            <Star className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-500 font-medium">Consultation is free</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Talk to a consultant */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-base">Talk to a consultant</h2>
              <button className="text-sm text-blue-500 hover:underline">
                Edit details
              </button>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Format</span>
                <span className="text-gray-900 font-medium">Voice call (15 mins)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">When</span>
                <span className="text-gray-900 font-medium">This evening (6-10 PM)</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" 
                alt="Consultant"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm text-gray-900">Certified yoga guide</p>
                <p className="text-xs text-gray-500">1:1 intro call to map your yoga journey</p>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-base">Total due now: ₹0</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Your first consultation is completely free.
                </p>
              </div>
              <div className="px-3 py-1 bg-green-100 rounded text-xs font-medium text-green-700">
                Free consultation
              </div>
            </div>
            
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Consultation fee</span>
                <span className="text-gray-900 font-medium">₹0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes & charges</span>
                <span className="text-gray-900 font-medium">₹0</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-base">How we'll reach you</h3>
              <span className="text-xs text-gray-500">From your profile</span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              We'll reach out on your saved WhatsApp number below. You can change it for this consultation if needed.
            </p>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">WhatsApp number</span>
                <button className="text-sm text-blue-500 hover:underline">
                  Change
                </button>
              </div>
              <p className="text-sm text-gray-900 font-medium">+91 98XXXXXX10</p>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              We'll also use your saved name and email for reminders.
            </p>
          </div>

          {/* Info Notice */}
          <div className="flex gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
            <p className="text-sm text-gray-700">
              No payment needed now. You'll only confirm the free call timing.
            </p>
          </div>

          {/* Confirm Button */}
          <button className="w-full bg-blue-400 text-white font-medium py-3.5 rounded-lg hover:bg-blue-500 transition-colors">
            Confirm & book call
          </button>

          {/* Help Link */}
          <button className="w-full text-blue-500 text-sm hover:underline">
            Why is this consultation free?
          </button>
        </div>
      </div>
    </div>
  );
}