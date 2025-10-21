"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import SalesAreaChart from "./salechart";
import { BellIcon, CalendarIcon, Bars3Icon } from "@heroicons/react/24/outline";

interface Payment {
  _id: string;
  orderId: string;
  paymentId: string;
  amount: number;
  userEmail: string;
  userName: string;
  status: string;
  createdAt: string;
}

const Analytics: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Load username
    

    // ✅ Set current date
    const date = new Date();
    setCurrentDate(
      date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );

    // ✅ Fetch payments
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/razorpay/Payments");
        const data = await res.json();
        if (data.success) {
          setPayments(data.payments);
        }
      } catch (err) {
        console.error("Error fetching payments:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  // ✅ Compute analytics
  const successfulPayments = payments.filter((p) => p.status === "SUCCESS");
  const totalOrders = successfulPayments.length;
  const totalRevenue = successfulPayments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="flex min-h-screen bg-[#f6cf92] text-black border border-[#4A1A11]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      </aside>

      {/* Main */}
      <main className="flex-1 w-full">
        {/* Header */}
        <header className="border-b border-[#4A1A11] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="mr-4 lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-3xl font-bold">
                  Good morning,{" "}
                  
                </h1>
                <p className="text-sm text-gray-500 hidden sm:block">
                  Here&apos;s the latest from your store today!
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="hidden md:flex items-center bg-[#4A1A11] rounded-md px-3 py-2">
                <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-white mr-2" />
                <span className="text-xs md:text-sm text-white">
                  {currentDate}
                </span>
              </div>
              <div className="relative">
                <BellIcon className="w-5 h-5 md:w-6 md:h-6 text-[#4A1A11]" />
                <span className="absolute top-0 right-0 block w-2 h-2 bg-[#4A1A11] rounded-full"></span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          <div className="border-b border-[#4A1A11] mb-6 overflow-x-auto">
            <div className="flex whitespace-nowrap">
              <button className="px-4 py-3 text-sm font-medium border-b-2 border-gray-900">
                General
              </button>
            </div>
          </div>

          {loading ? (
            <p className="text-center text-[#4A1A11]">Loading analytics...</p>
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div className="rounded-md p-4 md:p-8 flex-1 border border-[#4A1A11]">
                  <div className="text-sm text-[#4A1A11] mb-1 md:mb-2">
                    Orders
                  </div>
                  <div className="text-2xl md:text-4xl text-[#4A1A11] font-semibold">
                    {totalOrders}
                  </div>
                </div>

                <div className="rounded-md p-4 md:p-8 flex-1 border border-[#4A1A11]">
                  <div className="text-sm text-[#4A1A11] mb-1 md:mb-2">
                    Est. revenue
                  </div>
                  <div className="text-2xl md:text-4xl text-[#4A1A11] font-semibold">
                    ₹{totalRevenue.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="rounded-md p-4 md:p-6 border border-[#4A1A11] overflow-hidden">
                <SalesAreaChart />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Analytics;
