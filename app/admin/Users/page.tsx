'use client'
import React, { useState, useEffect } from 'react';
import { User, Mail, Calendar, CheckCircle, XCircle, Loader2, RefreshCw, LogIn, LogOut } from 'lucide-react';

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
  subscribeNewsletter: boolean;
  lastLogin?: string;
  createdAt: string;
  currentlyLoggedIn: boolean;
  actionType: 'signup' | 'login';
  actionTimestamp: string;
}

export default function AuthDashboard() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState<'all' | 'loggedIn' | 'loggedOut'>('all');

  useEffect(() => {
    fetchUsers();
    
    // Auto-refresh every 10 seconds
    const interval = setInterval(() => {
      fetchUsers();
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/auth/Users', {
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.users) {
          setUsers(data.users);
        }
      } else {
        setError('Failed to fetch users data');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(user => {
    if (filter === 'loggedIn') return user.currentlyLoggedIn;
    if (filter === 'loggedOut') return !user.currentlyLoggedIn;
    return true;
  });

  const stats = {
    total: users.length,
    loggedIn: users.filter(u => u.currentlyLoggedIn).length,
    loggedOut: users.filter(u => !u.currentlyLoggedIn).length,
    verified: users.filter(u => u.isVerified).length,
    signups: users.filter(u => u.actionType === 'signup').length,
    logins: users.filter(u => u.actionType === 'login').length
  };

  if (loading && users.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] to-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#ffd7a8] opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="text-center z-10">
          <Loader2 className="w-16 h-16 animate-spin text-[#4D5557] mx-auto mb-4" />
          <p className="text-[#4D5557] text-xl font-semibold" style={{ fontFamily: 'Playfair Display' }}>
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6cf92] to-white relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-[#ffd7a8] opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4D5557] via-[#6a7577] to-[#4D5557] bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Playfair Display', fontWeight: 900 }}>
                Authentication Dashboard
              </h1>
              <p className="text-[#4A1A11] mt-2 text-lg" style={{ fontWeight: 500 }}>Monitor login and signup activity</p>
            </div>
            <button
              onClick={fetchUsers}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4D5557] to-[#5d6769] text-white rounded-full hover:from-[#32120b] hover:to-[#4a1e16] shadow-2xl transition-all duration-500 transform hover:scale-105"
              style={{ fontFamily: 'Playfair Display', fontWeight: 600 }}
            >
              <RefreshCw className="w-5 h-5" />
              Refresh
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border-2 border-red-300 rounded-2xl text-red-700 shadow-lg">
              {error}
            </div>
          )}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-[#f6d992] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4D5557] font-semibold uppercase tracking-wide">Total Users</p>
                <p className="text-4xl font-bold text-[#4D5557] mt-1" style={{ fontFamily: 'Playfair Display' }}>{stats.total}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#f6cf92] to-[#ffd7a8] rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-[#4D5557]" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 font-semibold uppercase tracking-wide">New Signups</p>
                <p className="text-4xl font-bold text-purple-700 mt-1" style={{ fontFamily: 'Playfair Display' }}>{stats.signups}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-purple-700" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Login Activities</p>
                <p className="text-4xl font-bold text-blue-700 mt-1" style={{ fontFamily: 'Playfair Display' }}>{stats.logins}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                <LogIn className="w-8 h-8 text-blue-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-green-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 font-semibold uppercase tracking-wide">Currently Logged In</p>
                <p className="text-4xl font-bold text-green-700 mt-1" style={{ fontFamily: 'Playfair Display' }}>{stats.loggedIn}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center">
                <LogIn className="w-8 h-8 text-green-700" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700 font-semibold uppercase tracking-wide">Logged Out</p>
                <p className="text-4xl font-bold text-gray-700 mt-1" style={{ fontFamily: 'Playfair Display' }}>{stats.loggedOut}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <LogOut className="w-8 h-8 text-gray-700" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Verified Users</p>
                <p className="text-4xl font-bold text-blue-700 mt-1" style={{ fontFamily: 'Playfair Display' }}>{stats.verified}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-blue-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-6 border-2 border-[#f6d992]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="text-base font-semibold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>Filter:</span>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-[#4D5557] to-[#5d6769] text-white'
                    : 'bg-white text-[#4D5557] border-2 border-[#4D5557] hover:bg-[#4D5557] hover:text-white'
                }`}
                style={{ fontFamily: 'Playfair Display' }}
              >
                All Users ({stats.total})
              </button>
              <button
                onClick={() => setFilter('loggedIn')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  filter === 'loggedIn'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white'
                }`}
                style={{ fontFamily: 'Playfair Display' }}
              >
                Logged In ({stats.loggedIn})
              </button>
              <button
                onClick={() => setFilter('loggedOut')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  filter === 'loggedOut'
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-gray-600 border-2 border-gray-600 hover:bg-gray-600 hover:text-white'
                }`}
                style={{ fontFamily: 'Playfair Display' }}
              >
                Logged Out ({stats.loggedOut})
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border-2 border-[#f6d992]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#f6cf92] to-[#ffd7a8]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    Action Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    Current Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    Verified
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    Newsletter
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    Action Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#4D5557] uppercase tracking-wider" style={{ fontFamily: 'Playfair Display' }}>
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f6d992]">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-[#4D5557] text-lg font-semibold" style={{ fontFamily: 'Playfair Display' }}>
                      No users found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-[#ffd7a8] hover:bg-opacity-20 transition-all duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#f6cf92] to-[#ffd7a8] rounded-full flex items-center justify-center shadow-md">
                            <User className="w-6 h-6 text-[#4D5557]" />
                          </div>
                          <div className="ml-4">
                            <div className="text-base font-semibold text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                              {user.firstName} {user.lastName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Mail className="w-5 h-5 text-[#4D5557]" />
                          <span className="text-sm text-[#4D5557] font-medium">{user.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.actionType === 'signup' ? (
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 shadow-md">
                            <User className="w-4 h-4" />
                            Signup
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 shadow-md">
                            <LogIn className="w-4 h-4" />
                            Login
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.currentlyLoggedIn ? (
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800 shadow-md">
                            <LogIn className="w-4 h-4" />
                            Logged In
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 shadow-md">
                            <LogOut className="w-4 h-4" />
                            Logged Out
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.isVerified ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <XCircle className="w-6 h-6 text-yellow-500" />
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.subscribeNewsletter ? (
                          <CheckCircle className="w-6 h-6 text-blue-500" />
                        ) : (
                          <XCircle className="w-6 h-6 text-gray-400" />
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-[#4D5557] font-medium">
                          <Calendar className="w-5 h-5" />
                          {new Date(user.actionTimestamp).toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#4D5557] font-medium">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-[#4D5557] text-lg font-semibold bg-white bg-opacity-90 backdrop-blur-sm inline-block px-6 py-3 rounded-full shadow-lg" style={{ fontFamily: 'Playfair Display' }}>
            Showing {filteredUsers.length} of {users.length} users
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}