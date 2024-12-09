"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalDeliveries: 0,
    packagesInTransit: 0,
    completedDeliveries: 0,
    activeHubs: 0,
    activeRiders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/dashboard/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchStats();
  }, []);
  return (
    <div className="flex flex-col justify-center w-full text-center px-10 space-y-5 lg:space-y-0 mb-5">
      <h1 className="text-2xl font-bold mb-6 mt-10">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-4 space-y-10 lg:space-y-0">
        {Object.entries(stats).map(([key, value]) => (
          <div
            key={key}
            className="bg-white p-4 rounded shadow odd:bg-green-500 even:bg-red-500"
          >
            <div className="space-y-5">
              <h2 className="text-gray-600 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </h2>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
