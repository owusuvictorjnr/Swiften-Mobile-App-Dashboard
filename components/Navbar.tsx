import Link from "next/link";
import React from "react";

const Headers = () => {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold capitalize">swiften dashboard</h2>

        <Link
          href="/dashboard"
          className="block py-2 px-4 hover:bg-gray-700 rounded capitalize"
        >
          home
        </Link>

        <Link
          href="/dashboard/packages"
          className="block py-2 px-4 hover:bg-gray-700 rounded capitalize"
        >
          packages
        </Link>

        <Link
          href="/dashboard/riders"
          className="block py-2 px-4 hover:bg-gray-700 rounded capitalize"
        >
          riders
        </Link>

        <Link
          href="/dashboard/hubs"
          className="block py-2 px-4 hover:bg-gray-700 rounded capitalize"
        >
          hubs
        </Link>

        <Link
          href="/dashboard/notifications"
          className="block py-2 px-4 hover:bg-gray-700 rounded capitalize"
        >
          Notifications
        </Link>

        <Link
          href="/dashboard/settings"
          className="block py-2 px-4 hover:bg-gray-700 rounded capitalize"
        >
          settings
        </Link>
      </nav>
    </div>
  );
};

export default Headers;
