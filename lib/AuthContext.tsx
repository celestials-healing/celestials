"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '@/lib/api-client';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (userData: User) => void;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = !!user;
  const isAdmin = user?.email === "twdurgesh226@gmail.com";

  // Check authentication status
  const checkAuthStatus = async () => {
    setIsLoading(true);
    try {
      if (apiClient.isAuthenticated()) {
        const response = await apiClient.getCurrentUser();
        if (response.success && response.user) {
          setUser(response.user);
        } else {
          apiClient.clearAuth();
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      apiClient.clearAuth();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial auth check on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Login function to be called after successful login
  const login = (userData: User) => {
    setUser(userData);
  };

  // Logout function
  const logout = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.logout();
      if (response.success) {
        setUser(null);
      } else {
        console.error('Logout failed:', response.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh user data
  const refreshUser = async () => {
    await checkAuthStatus();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn,
        isAdmin,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};