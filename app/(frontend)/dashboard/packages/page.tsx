"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const PackagesPage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/packages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPackages(response.data);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      }
    };
    fetchPackages();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">packages</h1>

      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100 capitalize">
          <tr>
            <th className="border px-4 py-2 uppercase">id</th>
            <th className="border px-4 py-2">status</th>
            <th className="border px-4 py-2">rider</th>
            <th className="border px-4 py-2">destination</th>
            <th className="border px-4 py-2">actins</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg?) => (
            <tr key={pkg?.id}>
              <td className="border px-4 py-2">{pkg?.id}</td>
              <td className="border px-4 py-2">{pkg.status}</td>
              <td className="border px-4 py-2">{pkg.rider || "Unassigned"}</td>
              <td className="border px-4 py-2">{pkg.destination}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  view
                </button>

                <button className="px-2 py-1 bg-green-500 text-white rounded ml-2">
                  Assign Rider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackagesPage;
