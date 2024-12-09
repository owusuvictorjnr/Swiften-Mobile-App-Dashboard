"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const RidersPage = () => {
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    const fetchRiders = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/riders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRiders(response.data);
      } catch (error) {
        console.error("Failed to fetch riders:", error);
      }
    };
    fetchRiders();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Riders</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {riders.map((rider: any) => (
            <tr key={rider.id}>
              <td className="border px-4 py-2">{rider.id}</td>
              <td className="border px-4 py-2">{rider.name}</td>
              <td className="border px-4 py-2">{rider.status}</td>
              <td className="border px-4 py-2">
                <button className="px-2 py-1 bg-blue-500 text-white rounded">
                  Assign Package
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RidersPage;
