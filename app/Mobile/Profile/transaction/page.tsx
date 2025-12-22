'use client';
import React from 'react';
import { ChevronLeft } from 'lucide-react';

export default function TransactionHistoryScreen() {
  const transactions = [
    {
      title: 'Added balance',
      subtitle: 'UPI · 24 Nov 2025',
      amount: '+₹1,000',
      type: 'credit'
    },
    {
      title: 'Astrology session - Yatra',
      subtitle: 'Astro Meera · 22 Nov 2025',
      amount: '-₹800',
      type: 'debit'
    },
    {
      title: 'Yoga class booking',
      subtitle: 'Vinyasa Basic · 20 Nov 2025',
      amount: '-₹599',
      type: 'debit'
    },
    {
      title: 'Introductory Class credit',
      subtitle: 'Yoga credit applied · 18 Nov 2025',
      amount: '₹0',
      type: 'neutral'
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
          <h1 className="font-semibold text-lg">Transaction history</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Recent Activity */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Recent activity</h2>
            
            <div className="space-y-2">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-start justify-between hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      {transaction.title}
                    </p>
                    <p className="text-xs text-gray-500">{transaction.subtitle}</p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      transaction.type === 'credit'
                        ? 'text-green-600'
                        : transaction.type === 'debit'
                        ? 'text-red-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Balance Summary */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Balance summary</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Current balance</p>
                <p className="text-xs text-gray-500">After all transactions</p>
              </div>
              <span className="text-lg font-semibold text-gray-900">₹2,450</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}