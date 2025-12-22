'use client';
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState({
    astrologyUpdates: true,
    yogaReminders: true,
    reikiLaunches: false
  });

  const toggleNotification = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-lg">Notifications</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Push Notifications */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Push notifications</h2>
            
            <div className="space-y-3">
              {/* Astrology Updates */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">Astrology updates</p>
                  <p className="text-xs text-gray-500">Daily insights, transit alerts</p>
                </div>
                <button
                  onClick={() => toggleNotification('astrologyUpdates')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                    notifications.astrologyUpdates ? 'bg-blue-400' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.astrologyUpdates ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Yoga Reminders */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">Yoga reminders</p>
                  <p className="text-xs text-gray-500">Class reminders and streaks</p>
                </div>
                <button
                  onClick={() => toggleNotification('yogaReminders')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                    notifications.yogaReminders ? 'bg-blue-400' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.yogaReminders ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Reiki & Puja Launches */}
              <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">Reiki & puja launches</p>
                  <p className="text-xs text-gray-500">Get notified when new services open</p>
                </div>
                <button
                  onClick={() => toggleNotification('reikiLaunches')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
                    notifications.reikiLaunches ? 'bg-blue-400' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.reikiLaunches ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Promotions & Offers */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Promotions & offers</h2>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-1">Email offers</p>
              <p className="text-xs text-gray-500">Discounts, offers and announcements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}