"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const HubsPage = () => {
  const [hubs, setHubs] = useState([]);

  useEffect(() => {
    const fetchHubs = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get("/api/hubs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHubs(response.data);
      } catch (error) {
        console.error("Failed to fetch hubs:", error);
      }
    };
    fetchHubs();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hubs</h1>
      <ul className="space-y-2">
        {hubs.map((hub) => (
          <li key={hub.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">{hub.name}</h2>
            <p>Location: {hub.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HubsPage;
