"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";

interface Order {
  _id: string;
  user: { name: string; email: string };
  course: { title: string; price: number };
  amountPaid: number;
  paymentStatus: "Paid" | "Pending" | "Failed";
  orderDate: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/admin/orders");
      setOrders(res.data.orders);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="text-black">
      <h1 className="text-2xl font-bold mb-4">Orders & Payments Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full border text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">User</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Course</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Amount Paid</th>
              <th className="p-3 border">Payment Status</th>
              <th className="p-3 border">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <td className="p-3 border">{order.user.name}</td>
                <td className="p-3 border">{order.user.email}</td>
                <td className="p-3 border">{order.course.title}</td>
                <td className="p-3 border">{order.course.price}</td>
                <td className="p-3 border">{order.amountPaid}</td>
                <td className={`p-3 border font-semibold ${order.paymentStatus === "Paid" ? "text-green-600" : order.paymentStatus === "Pending" ? "text-yellow-500" : "text-red-600"}`}>
                  {order.paymentStatus}
                </td>
                <td className="p-3 border">{new Date(order.orderDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
