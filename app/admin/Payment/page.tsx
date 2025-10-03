"use client";
import { useEffect, useState } from "react";

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

export default function PaymentPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/razorpay/Payments");
        const data = await res.json();
        if (data.success) {
          setPayments(data.payments);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  if (loading) return <p className="p-4">Loading payments...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl text-black font-bold mb-6">Payments</h1>
      {payments.length === 0 ? (
        <p>No payments found</p>
      ) : (
        <table className="w-full border text-black border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Order ID</th>
              <th className="p-2 border">Payment ID</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p._id} className="text-center">
                <td className="p-2 border">{p.orderId}</td>
                <td className="p-2 border">{p.paymentId}</td>
                <td className="p-2 border">₹{p.amount}</td>
                <td className="p-2 border">
                  {p.userName} <br />
                  <span className="text-gray-500 text-sm">{p.userEmail}</span>
                </td>
                <td
                  className={`p-2 border font-semibold ${
                    p.status === "SUCCESS"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {p.status}
                </td>
                <td className="p-2 border">
                  {new Date(p.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
