'use client';
import React from 'react';
import { ChevronRight, Wallet } from 'lucide-react';

export default function ProfileScreen() {
  const menuItems = [
    {
      category: 'Account',
      items: [
        { label: 'Personal info', onClick: () => {} },
        { label: 'Payment methods & wallet', onClick: () => {} }
      ]
    },
    {
      category: 'Spiritual profile',
      items: [
        { label: 'Spiritual preferences', onClick: () => {} }
      ]
    },
    {
      category: 'App settings',
      items: [
        { label: 'Notifications', onClick: () => {} },
        { label: 'Transaction history', onClick: () => {} }
      ]
    },
    {
      category: 'Settings',
      items: [
        { label: 'Language', onClick: () => {} },
        { label: 'Appearance', onClick: () => {} }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="font-semibold text-xl">Profile</h1>
          <div className="flex items-center gap-2 px-3 py-2 border border-blue-200 rounded-lg bg-blue-50">
            <Wallet className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-blue-500 font-medium">₹2,450</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* User Profile */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-green-900 opacity-40" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '4px 4px'
              }}></div>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Ananya Sharma</h2>
              <p className="text-sm text-gray-500">Aligning your stars, breath and energy</p>
            </div>
          </div>

          {/* Menu Sections */}
          {menuItems.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-medium text-gray-500 mb-2">{section.category}</h3>
              <div className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <button
                    key={itemIdx}
                    onClick={item.onClick}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-gray-900">{item.label}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Log Out Button */}
          <button className="w-full py-3 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}