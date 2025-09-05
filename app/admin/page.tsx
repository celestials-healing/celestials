"use client";

import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import dynamic from 'next/dynamic';
import Sidebar from './sidebar';
import SalesAreaChart from './salechart';

import { 
  BellIcon, 
  // ChartBarIcon, 
  // Cog6ToothIcon as CogIcon, 
  // DocumentTextIcon, 
  // HomeIcon, 
  // InboxIcon, 
  // QuestionMarkCircleIcon, 
  // ShoppingBagIcon, 
  // UserIcon, 
  // WalletIcon,
  CalendarIcon,
  // PlusCircleIcon,
  // ChevronRightIcon,
  Bars3Icon,
  // XMarkIcon
} from '@heroicons/react/24/outline';

// Properly import the LineChart component
// const DynamicLineChart = dynamic(
//   () => import('@mui/x-charts').then((mod) => mod.LineChart),
//   { ssr: false, loading: () => <p>Loading chart...</p> }
// );

interface TabButtonProps {
  label: string;
  active?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active }) => {
  return (
    <button className={`px-4 py-3 text-sm font-medium ${active ? 'border-b-2 border-gray-900' : 'text-gray-500 hover:text-gray-700'}`}>
      {label}
    </button>
  );
}

const Analytics: React.FC = () => {
  // State to track if we're on the client side
  // const [isClient, setIsClient] = useState(false);
  
  // State for mobile sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Effect to set isClient to true when component mounts on client
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // Sample data for the chart
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // const salesData = [500, 700, 1200, 1800, 2200, 2700, 1000, 3200, 3400, 1600, 3900, 4200];

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
    
    // Close sidebar when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  // Rest of the code remains the same

  return (
    <div className="flex min-h-screen bg-[#f6cf92] text-black border border-[#4A1A11]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar - hidden on mobile, shown on toggle */}
    {/* Sidebar - hidden on mobile, shown on toggle */}
<aside className={`fixed inset-y-0 left-0 z-50 w-64  transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto ${
  sidebarOpen ? 'translate-x-0' : '-translate-x-full'
}`}>
  {/* Use the Sidebar component directly with proper props */}
  <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} /> {/* This is just rendering the component, but not passing any props */}
</aside>

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Header */}
        <header className=" border-b border-[#4A1A11] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button 
                className="mr-4 lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
              
              <div>
                <h1 className="text-3xl font-bold">Good morning, <span className="text-[#4A1A11] font-bold">Jonathan</span>!</h1>
                <p className="text-sm text-gray-500 hidden sm:block">Here&apos;s the latest from your store today!</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden md:flex items-center bg-[#4A1A11] rounded-md px-3 py-2">
                <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-white mr-2" />
                <span className="text-xs md:text-sm truncate max-w-[150px] lg:max-w-none text-white">
                  {currentDate}
                </span>
              </div>
              <div className="relative">
                <div className="relative">
                  <BellIcon className="w-5 h-5 md:w-6 md:h-6 text-[#4A1A11]" />
                  <span className="absolute top-0 right-0 block w-2 h-2 bg-[#4A1A11] rounded-full"></span>
                </div>
              </div>
             
            </div>
          </div>
        </header>

        {/* Analytics Content */}
        <div className="p-4 md:p-6">
          

          {/* Tabs */}
          <div className="border-b border-[#4A1A11] mb-6 overflow-x-auto">
            <div className="flex whitespace-nowrap">
              <TabButton label="General" active />
             
            </div>
          </div>

        
          {/* Analytics KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className=" rounded-md p-4 md:p-8 flex-1 border border-[#4A1A11]">
              <div className="text-sm text-[#4A1A11] mb-1 md:mb-2">Orders</div>
              <div className="text-2xl md:text-4xl text-[#4A1A11] font-semibold">2436</div>
            </div>
            <div className=" rounded-md p-4 md:p-8 flex-1 border border-[#4A1A11]">
              <div className="text-sm text-[#4A1A11] mb-1 md:mb-2">Est. revenue</div>
              <div className="text-2xl md:text-4xl text-[#4A1A11] font-semibold">$323,254.98</div>
            </div>
          </div>

          {/* Chart */}
          <div className=" rounded-md p-4 md:p-6 border border-[#4A1A11] overflow-hidden">
            <SalesAreaChart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analytics;