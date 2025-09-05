import React from "react";
import { loadRazorpayScript } from "../utils/loadRazorpay";

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



const CheckoutButton: React.FC<{ amount: number }> = ({ amount }) => {
  const handlePayment = async () => {
    const loaded = await loadRazorpayScript();

    if (!loaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

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
      name: "My Next.js Store",
      description: "Test Transaction",
      order_id: orderData.id,
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
      },
      prefill: {
        name: "Durgesh Tiwari",
        email: "test@example.com",
        contact: "9999999999",
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
