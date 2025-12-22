"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  Star,
  Users,
  ShoppingBag,
  Heart,
  Flame,
  MapPin,
  Briefcase,
  BookOpen,
  Music,
  FileText,
  Video,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube 
} from "lucide-react";

import Image from "next/image";
import { useAuth } from "@/lib/AuthContext";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const offeringsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
     setIsDropdownOpen(prev => (prev === name ? null : name));
  };

  const closeAllDropdowns = () => {
     setIsDropdownOpen(null);
  };

  const { user, isLoading, isLoggedIn, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideOfferings = offeringsRef.current && !offeringsRef.current.contains(event.target as Node);
      const isOutsideResources = resourcesRef.current && !resourcesRef.current.contains(event.target as Node);
      const isOutsideAbout = aboutRef.current && !aboutRef.current.contains(event.target as Node);
      
      if (isOutsideOfferings && isOutsideResources && isOutsideAbout) {
        setIsDropdownOpen(null);
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

  const ComingSoonLink = ({ children, icon: Icon, title, description }: any) => (
    <div className="block group cursor-not-allowed opacity-60">
      <div className="flex items-start space-x-4 p-4 rounded-xl">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center shadow-md">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-500 mb-2" style={{ fontFamily: 'Playfair Display' }}>
            {title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
          <span className="text-xs text-gray-500 mt-1 inline-block">Coming Soon</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full shadow-sm fixed top-0 left-0 right-0 bg-[#f6cf92] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/Logo (3).png"
                alt="Celestials Healing Logo"
                width={70}
                height={70}
                className="object-contain align-middle block transition-transform duration-300 hover:scale-110"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Offerings Dropdown */}
            <div className="relative" ref={offeringsRef}>
              <button
                className="flex items-center text-lg font-medium text-[#4D5557] hover:text-[#4A1A11] transition-colors gap-1"
                onClick={() => toggleDropdown("offerings")}
              >
                Offerings
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    isDropdownOpen === "offerings" ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div 
                className={`fixed left-0 right-0 mt-2 transition-all duration-300  ${
                  isDropdownOpen === "offerings" 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                <div className="bg-gradient-to-b from-[#f6cf92] to-white border-t border-[#f6cf92]/30 shadow-2xl">
                  <div className="max-w-7xl mx-auto px-8 py-12">
                    <div className="grid grid-cols-3 gap-8">
      
                      {/* Left Column */}
                      <div>
                        {/* Reiki - Active Link */}
                        <Link href="/courses" className="block group" onClick={closeAllDropdowns}>
                          <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#f6cf92]/10 transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#f6cf92] to-[#ffd7a8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                              <Sparkles className="w-6 h-6 text-[#4A1A11]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-[#4A1A11] mb-2 group-hover:text-[#32120b] transition-colors" style={{ fontFamily: 'Playfair Display' }}>
                                Reiki Healing
                              </h3>
                              <p className="text-sm text-[#4D5557] leading-relaxed">
                                Discover the art of energy healing. Transform your life through Reiki attunements and certified courses.
                              </p>
                            </div>
                          </div>
                        </Link>

                        {/* Yoga - Active Link */}
                        <Link href="/Yoga" className="block group mt-4" onClick={closeAllDropdowns}>
                          <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#f6cf92]/10 transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#f6d992] to-[#ffd7a8] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                              <Users className="w-6 h-6 text-[#4A1A11]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-[#4A1A11] mb-2 group-hover:text-[#32120b] transition-colors" style={{ fontFamily: 'Playfair Display' }}>
                                Yoga & Meditation
                              </h3>
                              <p className="text-sm text-[#4D5557] leading-relaxed">
                                Build harmony between mind, body, and breath through guided Yoga & Meditation sessions.
                              </p>
                            </div>
                          </div>
                        </Link>

                        {/* Astrology - Active Link */}
                        <Link href="/Astrology" className="block group mt-4" onClick={closeAllDropdowns}>
                          <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[#f6cf92]/10 transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#ffd7a8] to-[#f6cf92] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                              <Star className="w-6 h-6 text-[#4A1A11]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-[#4A1A11] mb-2 group-hover:text-[#32120b] transition-colors" style={{ fontFamily: 'Playfair Display' }}>
                                Astrology
                              </h3>
                              <p className="text-sm text-[#4D5557] leading-relaxed">
                                Decode your cosmic blueprint with personalized readings and astrology mentorship.
                              </p>
                            </div>
                          </div>
                        </Link>

                        {/* Pujas - Coming Soon */}
                        <ComingSoonLink 
                          icon={Flame}
                          title="Pujas & Rituals"
                          description="Experience sacred ceremonies and rituals for cleansing, gratitude, and manifestation."
                        />
                      </div>

                      {/* Middle Column */}
                      <div>
                        <ComingSoonLink 
                          icon={ShoppingBag}
                          title="Celestial Shop"
                          description="Explore crystals, candles, and spiritual tools to elevate your energy and practice."
                        />

                        <ComingSoonLink 
                          icon={MapPin}
                          title="Experience Centres"
                          description="Visit our healing sanctuaries and immerse yourself in guided sessions and workshops."
                        />

                        <ComingSoonLink 
                          icon={Heart}
                          title="Community Wellness"
                          description="Connect, share, and heal together through our collective meditations and support circles."
                        />

                        <ComingSoonLink 
                          icon={Briefcase}
                          title="Corporate Wellness"
                          description="Create mindful workplaces with customized programs to reduce stress and improve focus."
                        />
                      </div>

                      {/* Right Column - CTA */}
                      <div>
                        <div className="mt-6 bg-gradient-to-br from-[#32120b] via-[#4a1e16] to-[#4D5557] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6cf92] opacity-10 rounded-full -mr-16 -mt-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ffd7a8] opacity-10 rounded-full -ml-12 -mb-12"></div>

                          <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#f6cf92] to-[#ffd7a8] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                              <Sparkles className="w-8 h-8 text-[#4A1A11]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                              Begin Your Healing Journey
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              Step into holistic wellness with Celestials — where energy, stars, and spirit unite.
                            </p>
                          </div>

                          <Link href="/about" className="relative z-10 flex items-center text-white font-semibold hover:gap-3 gap-2 transition-all mt-6 group bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg w-fit" onClick={closeAllDropdowns} style={{ fontFamily: 'Playfair Display' }}>
                            Learn More
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                className="flex items-center text-lg font-medium text-[#4D5557] hover:text-[#4A1A11] transition-colors gap-1"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    isDropdownOpen === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-screen max-w-6xl transition-all duration-300 ${
                  isDropdownOpen === "resources" 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                <div className="bg-gradient-to-b from-[#f6cf92] to-white border border-[#f6cf92]/30 rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-3 gap-8">
      
                    {/* Left Column */}
                    <div>
                      <ComingSoonLink 
                        icon={BookOpen}
                        title="Blogs"
                        description="Explore spiritual insights, energy healing tips, and mindfulness stories from our experts."
                      />

                      <ComingSoonLink 
                        icon={Music}
                        title="Healing Music"
                        description="Immerse yourself in serene frequencies crafted to relax, balance, and rejuvenate your soul."
                      />

                      <ComingSoonLink 
                        icon={FileText}
                        title="Reports"
                        description="Get personalized astrological and healing reports tailored to your unique spiritual path."
                      />
                    </div>

                    {/* Middle Column */}
                    <div>
                      <ComingSoonLink 
                        icon={Video}
                        title="Webinars"
                        description="Attend live sessions to deepen your awareness and connect with like-minded souls."
                      />

                      <ComingSoonLink 
                        icon={MapPin}
                        title="Locate Us"
                        description="Find our experience centers and certified healers near you for in-person sessions."
                      />
                    </div>

                    {/* Right Column - CTA */}
                    <div>
                      <div className="mt-6 bg-gradient-to-br from-[#32120b] via-[#4a1e16] to-[#4D5557] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6cf92] opacity-10 rounded-full -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ffd7a8] opacity-10 rounded-full -ml-12 -mb-12"></div>

                        <div className="relative z-10">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#f6cf92] to-[#ffd7a8] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                            <Sparkles className="w-8 h-8 text-[#4A1A11]" />
                          </div>
                          <h3 className="text-xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                            Begin Your Healing Journey
                          </h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            Step into holistic wellness with Celestials — where energy, stars, and spirit unite.
                          </p>
                        </div>

                        <Link href="/about" className="relative z-10 flex items-center text-white font-semibold hover:gap-3 gap-2 transition-all mt-6 group bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg w-fit" onClick={closeAllDropdowns} style={{ fontFamily: 'Playfair Display' }}>
                          Learn More
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                className="flex items-center text-lg font-medium text-[#4D5557] hover:text-[#4A1A11] transition-colors gap-1"
                onClick={() => toggleDropdown("about")}
              >
                About Us
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    isDropdownOpen === "about" ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-screen max-w-6xl transition-all duration-300 ${
                  isDropdownOpen === "about" 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                <div className="bg-gradient-to-b from-[#f6cf92] to-white border border-[#f6cf92]/30 rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-3 gap-8">

                    {/* Left Column */}
                    <div>
                      <ComingSoonLink 
                        icon={Sparkles}
                        title="About Us"
                        description="Learn about our mission, vision, and the spiritual philosophy that guides Celestials."
                      />

                      <ComingSoonLink 
                        icon={Phone}
                        title="Contact Us"
                        description="Reach out to our support team for inquiries, collaborations, or healing guidance."
                      />
                    </div>

                    {/* Middle Column */}
                    <div>
                      <ComingSoonLink 
                        icon={Users}
                        title="Our Experts"
                        description="Meet our team of astrologers, healers, and energy practitioners dedicated to your growth."
                      />

                      <ComingSoonLink 
                        icon={FileText}
                        title="Press Releases"
                        description="Stay updated on our latest news, announcements, and spiritual community highlights."
                      />

                      <ComingSoonLink 
                        icon={Briefcase}
                        title="Careers"
                        description="Join the Celestials family and help guide others on their path to healing and awareness."
                      />
                    </div>

                    {/* Right Column */}
                    <div>
                      <div className="mt-6 bg-gradient-to-br from-[#32120b] via-[#4a1e16] to-[#4D5557] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6cf92] opacity-10 rounded-full -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ffd7a8] opacity-10 rounded-full -ml-12 -mb-12"></div>

                        <div className="relative z-10">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#f6cf92] to-[#ffd7a8] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                            <Heart className="w-8 h-8 text-[#4A1A11]" />
                          </div>
                          <h3 className="text-xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                            Connect With Us
                          </h3>
                          <p className="text-white/90 text-sm leading-relaxed">
                            Follow us on social media for daily inspiration, cosmic updates, and healing wisdom.
                          </p>

                          <div className="flex space-x-4 mt-6">
                            <Link href="https://instagram.com" target="_blank">
                              <Instagram className="w-6 h-6 text-white hover:text-[#f6cf92] transition-colors" />
                            </Link>
                            <Link href="https://facebook.com" target="_blank">
                              <Facebook className="w-6 h-6 text-white hover:text-[#f6cf92] transition-colors" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank">
                              <Twitter className="w-6 h-6 text-white hover:text-[#f6cf92] transition-colors" />
                            </Link>
                            <Link href="https://youtube.com" target="_blank">
                              <Youtube className="w-6 h-6 text-white hover:text-[#f6cf92] transition-colors" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn && !isLoading && (
              <span className="text-sm text-[#4D5557]" style={{ fontFamily: 'Playfair Display' }}>
                Hi, {user?.firstName}!
              </span>
            )}

            {isAdmin && (
              <Link href="/admin">
                <button className="px-5 py-2 border-2 border-[#4D5557] text-[#4D5557] rounded-lg hover:bg-[#4D5557] hover:text-white transition-all" style={{ fontFamily: 'Playfair Display' }}>
                  Admin
                </button>
              </Link>
            )}
            
            {isLoading ? (
              <button 
                disabled
                className="px-5 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
              >
                Loading...
              </button>
            ) : isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="px-5 py-2 bg-gradient-to-r from-[#32120b] to-[#4a1e16] text-white rounded-lg hover:from-[#4D5557] hover:to-[#5d6769] transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="px-5 py-2 bg-gradient-to-r from-[#32120b] to-[#4a1e16] text-white rounded-lg hover:from-[#4D5557] hover:to-[#5d6769] transition-all shadow-md hover:shadow-lg" style={{ fontFamily: 'Playfair Display' }}>
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
        <div className="md:hidden border-t border-gray-200 shadow-lg bg-gradient-to-b from-white to-[#fef9f3]">
          <div className="px-4 py-4 space-y-4">
            {isLoggedIn && !isLoading && (
              <div className="text-sm text-[#4D5557] py-2 border-b border-[#f6cf92]/30" style={{ fontFamily: 'Playfair Display' }}>
                Hi, {user?.firstName}!
              </div>
            )}

            <Link href="/" className="block text-lg font-medium text-[#4D5557] py-2 border-b border-[#f6cf92]/30" onClick={closeMobileMenu}>
              Home Page
            </Link>
            <Link href="/about" className="block text-lg font-medium text-[#4D5557] py-2 border-b border-[#f6cf92]/30" onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link href="/ContactUs" className="block text-lg font-medium text-[#4D5557] py-2 border-b border-[#f6cf92]/30" onClick={closeMobileMenu}>
              Contact Us
            </Link>
            <Link href="/courses" className="block text-lg font-medium text-[#4D5557] py-2 border-b border-[#f6cf92]/30" onClick={closeMobileMenu}>
              Reiki
            </Link>
            <Link href="/Astrology" className="block text-lg font-medium text-[#4D5557] py-2 border-b border-[#f6cf92]/30" onClick={closeMobileMenu}>
              Astrology
            </Link>
            <Link href="/Yoga" className="block text-lg font-medium text-[#4D5557] py-2 border-b border-[#f6cf92]/30" onClick={closeMobileMenu}>
              Yoga
            </Link>

            <div className="pt-4 space-y-3">
              {isAdmin && (
                <Link href="/admin" className="block w-full">
                  <button className="w-full px-4 py-3 border-2 border-[#4D5557] text-[#4D5557] rounded-lg hover:bg-[#4D5557] hover:text-white transition-colors" onClick={closeMobileMenu} style={{ fontFamily: 'Playfair Display' }}>
                    Admin
                  </button>
                </Link>
              )}
              
              {isLoading ? (
                <button disabled className="w-full px-4 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                  Loading...
                </button>
              ) : isLoggedIn ? (
                <button onClick={() => { handleLogout(); closeMobileMenu(); }} className="w-full px-4 py-3 bg-gradient-to-r from-[#32120b] to-[#4a1e16] text-white rounded-lg hover:from-[#4D5557] hover:to-[#5d6769] transition-all" style={{ fontFamily: 'Playfair Display' }}>
                  Logout
                </button>
              ) : (
                <Link href="/login" className="block w-full">
                  <button onClick={closeMobileMenu} className="w-full px-4 py-3 bg-gradient-to-r from-[#32120b] to-[#4a1e16] text-white rounded-lg hover:from-[#4D5557] hover:to-[#5d6769] transition-all" style={{ fontFamily: 'Playfair Display' }}>
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