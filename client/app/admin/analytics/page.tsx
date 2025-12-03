"use client";
import { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
} from "chart.js";
import api from "@/lib/api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

export default function AnalyticsPage() {
  const [revenueData, setRevenueData] = useState<number[]>([]);
  const [userData, setUserData] = useState<number[]>([]);
  const [months, setMonths] = useState<string[]>([]);

  const fetchAnalytics = async () => {
    try {
      const res = await api.get("/admin/analytics");
      setRevenueData(res.data.revenue);
      setUserData(res.data.users);
      setMonths(res.data.months);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold mb-2">Monthly Revenue</h2>
          <Chart
            type="bar"
            data={{
              labels: months,
              datasets: [{ label: "Revenue (₹)", data: revenueData, backgroundColor: "rgba(34,197,94,0.7)" }]
            }}
          />
        </div>

        {/* Users Chart */}
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold mb-2">New Users per Month</h2>
          <Chart
            type="line"
            data={{
              labels: months,
              datasets: [{ label: "Users", data: userData, borderColor: "rgba(59,130,246,1)", backgroundColor: "rgba(59,130,246,0.2)", tension: 0.3 }]
            }}
          />
        </div>
      </div>
    </div>
  );
}
