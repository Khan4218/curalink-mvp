"use client";

import { useFavorites } from "@/app/hooks/useFavorites";
import {
  FaHeart,
  FaStar,
  FaBookmark,
} from "react-icons/fa";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  const trials = favorites.filter((f) => f.type === "trial");
  const experts = favorites.filter((f) => f.type === "expert");
  const publications = favorites.filter((f) => f.type === "publications");

  const Section = ({ title, icon, items }: any) => {
    if (items.length === 0) return null;

    return (
      <div className="space-y-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mt-6 mb-2">
          {icon}
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item: any) => (
            <div
              key={item.key}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title || item.name}
              </h3>
              <p className="text-gray-500 mt-1 capitalize">
                <strong>Type:</strong> {item.type}
              </p>

              <button
                onClick={() => removeFavorite(item.key)}
                className="mt-4 w-full py-2.5 rounded-xl text-sm font-medium text-red-600 border border-red-300 hover:bg-red-50 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold text-gray-900">My Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">You haven't saved anything yet.</p>
      ) : (
        <>
          <Section
            title="Clinical Trials"
            icon={<FaStar className="text-yellow-500 text-2xl" />}
            items={trials}
          />

          <Section
            title="Experts"
            icon={<FaHeart className="text-red-500 text-2xl" />}
            items={experts}
          />

          <Section
            title="Publications"
            icon={<FaBookmark className="text-purple-600 text-2xl" />}
            items={publications}
          />
        </>
      )}
    </div>
  );
}
