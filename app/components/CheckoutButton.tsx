"use client";
import React, { useState, useEffect } from "react";
import { loadRazorpayScript } from "../utils/loadRazorpay";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api-client"; // ✅ same client as Navbar

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: { name: string; email: string; contact: string };
  notes?: Record<string, string | number | boolean>;
  theme?: { color: string };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayConstructor {
  new (options: RazorpayOptions): RazorpayInstance;
}
declare global {
  interface Window {
    Razorpay: RazorpayConstructor;
  }
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isVerified: boolean;
}

const CheckoutButton: React.FC<{ amount: number }> = ({ amount }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  // ✅ Fetch current user when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      if (apiClient.isAuthenticated()) {
        const res = await apiClient.getCurrentUser();
        if (res.success && res.user) {
          setUser(res.user);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const handlePayment = async () => {
    // ✅ Check login first
    if (!user) {
      
      router.push("/login");
      return;
    }

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // ✅ Create Razorpay order
    const orderRes = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const orderData = await orderRes.json();

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Celestial Healing",
      description: "Transaction",
      order_id: orderData.id,
      handler: async function (response) {
  try {
    // Send payment data to backend for verification
    const verifyRes = await fetch("/api/razorpay/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        amount: orderData.amount,
        user: {
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        },
      }),
    });

    const verifyData = await verifyRes.json();

    if (verifyData.success) {
      alert("Payment verified & saved successfully!");
      // redirect to success page if you want
      // router.push("/payment-success");
    } else {
      alert("Payment verification failed!");
    }
  } catch (error) {
    console.error("Verification error:", error);
    alert("Something went wrong while saving payment.");
  }
},

      prefill: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        contact: "7303089983", // you can store phone in user if available
      },
      theme: { color: "#3399cc" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button onClick={handlePayment} className="w-full">
      Buy Now
    </button>
  );
};

export default CheckoutButton;
