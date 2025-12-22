'use client';
import React, { useState } from 'react';
import { ChevronLeft, RefreshCw, Smartphone, CreditCard } from 'lucide-react';

export default function WalletPaymentsScreen() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('upi');

  const predefinedAmounts = [500, 1000, 2000, 5000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-lg">Wallet & payments</h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Balance Section */}
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-3">Celestials balance</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Available for astrology, yoga & reiki</p>
                <p className="text-2xl font-semibold text-gray-900">₹2,450</p>
              </div>
              <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                <RefreshCw className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <button className="w-full bg-blue-400 text-white font-medium py-3 rounded-lg hover:bg-blue-500 transition-colors">
              Add balance
            </button>
          </div>

          {/* Choose Amount */}
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-3">Choose amount</h2>
            
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              {/* Predefined Amounts */}
              <div className="flex gap-2">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedAmount === amount
                        ? 'bg-blue-400 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Custom amount</p>
                <div className="relative">
                  <input
                    type="text"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    placeholder="Enter any amount"
                    className="w-full px-4 py-3 pr-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Multiples of 100 only</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-sm font-medium text-gray-900 mb-3">Payment method</h2>
            
            <div className="space-y-2">
              {/* UPI */}
              <button
                onClick={() => setSelectedPayment('upi')}
                className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                  selectedPayment === 'upi'
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === 'upi' ? 'border-blue-400' : 'border-gray-300'
                    }`}>
                      {selectedPayment === 'upi' && (
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">UPI</p>
                      <p className="text-xs text-gray-500">Fast & secure · Recommended</p>
                    </div>
                  </div>
                  <Smartphone className="w-5 h-5 text-gray-400" />
                </div>
              </button>

              {/* Debit Card */}
              <button
                onClick={() => setSelectedPayment('debit')}
                className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                  selectedPayment === 'debit'
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === 'debit' ? 'border-blue-400' : 'border-gray-300'
                    }`}>
                      {selectedPayment === 'debit' && (
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Debit card</p>
                      <p className="text-xs text-gray-500">Save card for future sessions</p>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-gray-400" />
                </div>
              </button>

              {/* Credit Card */}
              <button
                onClick={() => setSelectedPayment('credit')}
                className={`w-full p-4 rounded-lg border-2 transition-colors text-left ${
                  selectedPayment === 'credit'
                    ? 'border-blue-400 bg-blue-50'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedPayment === 'credit' ? 'border-blue-400' : 'border-gray-300'
                    }`}>
                      {selectedPayment === 'credit' && (
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Credit card</p>
                      <p className="text-xs text-gray-500">Earn rewards while you top up</p>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <button className="w-full bg-blue-400 text-white font-medium py-3 rounded-lg hover:bg-blue-500 transition-colors">
            Confirm & add balance
          </button>

          {/* Transaction History Link */}
          <button className="w-full text-blue-500 text-sm hover:underline">
            View transaction history
          </button>
        </div>
      </div>
    </div>
  );
}