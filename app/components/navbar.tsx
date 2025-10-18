"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/lib/AuthContext"; // Adjust path as needed

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get auth state from context
  const { user, isLoading, isLoggedIn, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="w-full shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/Logo (3).png"
                alt="Celestials Healing Logo"
                width={70}
                height={70}
                className="object-contain align-middle block"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg font-medium text-[#4D5557] hover:underline transition-colors">
              Home Page
            </Link>

            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center text-lg font-medium text-[#4D5557] hover:underline transition-colors"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                Offerings
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-[#f6cf92] border border-gray-200 rounded-md shadow-lg z-50">
                  <Link
                    href="/courses"
                    className="block px-4 py-3 text-[#4D5557] hover:bg-[#4A1A11] hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Reiki 
                  </Link>
                  <Link
                    href="/Astrology"
                    className="block px-4 py-3 text-[#4D5557] hover:bg-[#4A1A11] hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Astrology
                  </Link>
                  <Link
                    href="/Yoga"
                    className="block px-4 py-3 text-[#4D5557] hover:bg-[#4A1A11] hover:text-white transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Yoga
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-lg font-medium text-[#4D5557] hover:underline transition-colors">
              About Us
            </Link>
            <Link href="/ContactUs" className="text-lg font-medium text-[#4D5557] hover:underline transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* User greeting if logged in */}
            {isLoggedIn && !isLoading && (
              <span className="text-sm text-[#4D5557]">
                Hi, {user?.firstName}!
              </span>
            )}

            {/* Show Admin button only if user is admin */}
            {isAdmin && (
              <Link href="/admin">
                <button className="px-4 py-2 border-2 border-[#4D5557] text-[#4D5557] rounded-md hover:bg-[#4D5557] hover:text-white transition-colors">
                  Admin
                </button>
              </Link>
            )}
            
            {/* Login/Logout button */}
            {isLoading ? (
              <button 
                disabled
                className="px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
              >
                Loading...
              </button>
            ) : isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-[#4D5557] text-white rounded-md hover:bg-[#32120b] transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="px-4 py-2 bg-[#4D5557] text-white rounded-md hover:bg-[#32120b] transition-colors">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#4D5557] hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* User greeting in mobile */}
            {isLoggedIn && !isLoading && (
              <div className="text-sm text-[#4D5557] py-2 border-b border-gray-100">
                Hi, {user?.firstName}!
              </div>
            )}

            <Link
              href="/"
              className="block text-lg font-medium text-[#4D5557] py-2 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Home Page
            </Link>
            <Link
              href="/about"
              className="block text-lg font-medium text-[#4D5557] py-2 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/ContactUs"
              className="block text-lg font-medium text-[#4D5557] py-2 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              href="/courses"
              className="block text-lg font-medium text-[#4D5557] py-2 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Reiki
            </Link>
            <Link
              href="/Astrology"
              className="block text-lg font-medium text-[#4D5557] py-2 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Astrology
            </Link>
            <Link
              href="/Yoga"
              className="block text-lg font-medium text-[#4D5557] py-2 border-b border-gray-100"
              onClick={closeMobileMenu}
            >
              Yoga
            </Link>

            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3">
              {/* Show Admin button only if user is admin */}
              {isAdmin && (
                <Link href="/admin" className="block w-full">
                  <button
                    className="w-full px-4 py-3 border-2 border-[#4D5557] text-[#4D5557] rounded-md hover:bg-[#4D5557] hover:text-white transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Admin
                  </button>
                </Link>
              )}
              
              {/* Login/Logout button */}
              {isLoading ? (
                <button
                  disabled
                  className="w-full px-4 py-3 bg-gray-400 text-white rounded-md cursor-not-allowed"
                >
                  Loading...
                </button>
              ) : isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }}
                  className="w-full px-4 py-3 bg-[#4D5557] text-white rounded-md hover:bg-[#32120b] transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login" className="block w-full">
                  <button
                    onClick={closeMobileMenu}
                    className="w-full px-4 py-3 bg-[#4D5557] text-white rounded-md hover:bg-[#32120b] transition-colors"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;