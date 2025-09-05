"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  ShoppingBagIcon, 
  InboxIcon, 
  DocumentTextIcon, 
  QuestionMarkCircleIcon, 
  UserIcon, 
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  collapsed?: boolean;
}

// interface TabButtonProps {
//   label: string;
//   active?: boolean;
// }

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href, active, collapsed }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={`flex items-center px-4 py-3 rounded-md ${active ? 'bg-[#4A1A11] text-white' : 'hover:bg-[#4A1A11] hover:text-white'}`}>
        <span className="text-gray-500">{icon}</span>
        {!collapsed && <span className={`ml-3 ${active ? 'font-medium' : ''} transition-opacity duration-200`}>{label}</span>}
      </a>
    </Link>
  );
}

// const TabButton: React.FC<TabButtonProps> = ({ label, active }) => {
//   return (
//     <button className={`px-6 py-3 text-sm font-medium ${active ? 'border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
//       {label}
//     </button>
//   );
// }
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showToggleButton?: boolean;
}


const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, showToggleButton = true })  => {
 
  const [isMobile, setIsMobile] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      const currentIsMobile = window.innerWidth < 1024;
      setIsMobile(currentIsMobile);
      
      if (window.innerWidth < 1024) {
        // Mobile view - sidebar defaults to closed
        setIsOpen(false);
      } else if (window.innerWidth < 1280) {
        // Tablet view - collapsed sidebar always visible
        setCollapsed(true);
        setIsOpen(true);
      } else {
        // Desktop view - full sidebar always visible
        setCollapsed(false);
        setIsOpen(true);
      }
    };

    // Run once on mount
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      {showToggleButton && (
        <button 
          onClick={toggleSidebar} 
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
          aria-label="Toggle sidebar"
        >
          {isOpen ? 
            <XMarkIcon className="w-6 h-6 text-gray-600" /> : 
            <Bars3Icon className="w-6 h-6 text-gray-600" />
          }
        </button>
      )}

      {/* Sidebar overlay for mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-[#f6cf92] bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`bg-#f6cf92 border-r border-[#4A1A11] fixed h-full z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${collapsed ? 'w-20' : 'w-64'} lg:translate-x-0`}
      >
        
        
        {!collapsed && <div className="px-4 py-2 text-sm text-[#4A1A11]">Main menu</div>}
        
        <nav className="px-2 space-y-1">
          <SidebarItem icon={<ChartBarIcon className="w-6 h-6" />} label="Dashboard" href="/admin" active collapsed={collapsed} />
          <SidebarItem icon={<ShoppingBagIcon className="w-6 h-6" />} label="Products" href="/admin/Products" collapsed={collapsed} />
          <SidebarItem icon={<InboxIcon className="w-6 h-6" />} label="Courses" href="/admin/Courses" collapsed={collapsed} />
        </nav>
        
        {!collapsed && <div className="mt-8 px-4 py-2 text-sm text-gray-500">FAQs</div>}
        {collapsed && <div className="mt-8 border-t border-gray-200 pt-4"></div>}
        
        <nav className="px-2 space-y-1">
          <SidebarItem icon={<DocumentTextIcon className="w-6 h-6" />} label="Resources" href="/resources" collapsed={collapsed} />
          <SidebarItem icon={<QuestionMarkCircleIcon className="w-6 h-6" />} label="Help" href="/help" collapsed={collapsed} />
        </nav>
        
        <div className={`absolute bottom-0 ${collapsed ? 'w-20' : 'w-64'} border-t border-[#4A1A11]`}>
          <div className={`flex items-center p-4 ${collapsed ? 'justify-center' : ''}`}>
            <div className="p-2 bg-[#4A1A11] rounded-full">
              <UserIcon className="w-5 h-5 text-white bg-[#4A1A11]" />
            </div>
            {!collapsed && (
              <>
                <div className="ml-3">
                  <div className="text-sm font-medium">Account</div>
                  <div className="text-xs text-[#4A1A11]">abcdef@gmail.com</div>
                </div>
                <div className="ml-auto">
                  <ChevronRightIcon className="w-5 h-5 text-[#4A1A11]" />
                </div>
              </>
            )}
          </div>
        </div>
      </aside>

      {/* Content area offset */}
      <div className={`transition-all duration-300 ${
        isOpen ? (collapsed ? 'lg:ml-20' : 'lg:ml-64') : 'lg:ml-0'
      }`}>
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default Sidebar;