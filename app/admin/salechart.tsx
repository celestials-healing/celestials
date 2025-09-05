import React, { useState, useEffect } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  // Legend
} from 'recharts';

const SalesAreaChart = () => {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to check viewport size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Check on mount
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Sample data for the 12 months
  const data = [
    { name: 'Jan', sales: 40 },
    { name: 'Feb', sales: 30 },
    { name: 'Mar', sales: 60 },
    { name: 'Apr', sales: 70 },
    { name: 'May', sales: 90 },
    { name: 'Jun', sales: 40 },
    { name: 'Jul', sales: 55 },
    { name: 'Aug', sales: 70 },
    { name: 'Sep', sales: 60 },
    { name: 'Oct', sales: 90 },
    { name: 'Nov', sales: 80 },
    { name: 'Dec', sales: 95 },
  ];

  return (
    <div className="w-full  rounded-lg shadow-sm border border-[#4A1A11]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 border-b border-[#4A1A11]">
        <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto mb-3 sm:mb-0">
          <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-0">Sales</h3>
          <div className="ml-0 sm:ml-2 bg-[#4A1A11] text-white px-2 sm:px-3 py-1 rounded-md">
            <div className="text-lg  bg-transparent border-none outline-none">
              <>Monthly</>
              
            </div>
          </div>
        </div>
        
        {/* Optional: Add a legend or additional controls for larger screens */}
        <div className="hidden sm:flex items-center text-xs text-gray-500">
          <div className="flex items-center mr-4">
            <span className="inline-block w-3 h-3 bg-[#4A1A11] mr-1 rounded-sm"></span>
            <span>Sales</span>
          </div>
        </div>
      </div>
      
      <div className="p-0">
        <div className="h-60 sm:h-72 md:h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ 
                top: 10, 
                right: isMobile ? 10 : 30, 
                left: isMobile ? -20 : 0, 
                bottom: isMobile ? 10 : 20 
              }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4A1A11" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4A1A11" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid 
                vertical={false} 
                strokeDasharray="3 3" 
                stroke="#f6cf92" 
                strokeOpacity={isMobile ? 0.5 : 1}
              />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: isMobile ? 10 : 12, fill: '#4A1A11' }}
                padding={{ left: isMobile ? 10 : 20, right: isMobile ? 10 : 20 }}
                interval={isMobile ? 'preserveStartEnd' : 0}
              />
              <YAxis 
                hide={true}
              />
              <Tooltip 
                formatter={(value) => [`${value}`, 'Sales']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #4A1A11',
                  borderRadius: '4px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  fontSize: isMobile ? '10px' : '12px',
                  padding: isMobile ? '4px 8px' : '8px 10px'
                }}
                itemStyle={{ color: '#4A1A11' }}
                cursor={{ strokeDasharray: '3 3' }}
                wrapperStyle={{ zIndex: 100 }}
              />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#4A1A11" 
                fillOpacity={1} 
                fill="url(#colorSales)" 
                strokeWidth={isMobile ? 1.5 : 2}
                activeDot={{ r: isMobile ? 4 : 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Mobile legend */}
        <div className="flex justify-center sm:hidden pb-2">
          <div className="flex items-center text-xs text-gray-500">
            <span className="inline-block w-3 h-3 bg-[#4A1A11] mr-1 rounded-sm"></span>
            <span>Sales</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAreaChart;