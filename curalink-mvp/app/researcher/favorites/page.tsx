"use client";

import { useFavorites } from "@/app/hooks/useFavorites";
import { FaFlask, FaUsers, FaBookOpen, FaTrash } from "react-icons/fa";

export default function ResearcherFavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  console.log(favorites);
  

  // Group favorites by type
  const trials = favorites.filter((f) => f.type === "trial");
  const collaborators = favorites.filter((f) => f.type === "collaborator");
  const publications = favorites.filter((f) => f.type === "publication");

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Saved Items
        </h1>
        <p className="text-gray-600 mt-2">
          Your saved trials, collaborators, and publications.
        </p>
      </div>

      {/* NOTHING SAVED */}
      {favorites.length === 0 && (
        <p className="text-gray-500 text-lg">No favorites yet.</p>
      )}

      {/* TRIALS */}
      {trials.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-blue-700 mb-4">
            <FaFlask /> Clinical Trials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trials.map((item) => (
              <div
                key={item.key}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600"><strong>Condition:</strong> {item.condition}</p>
                <p className="text-gray-600"><strong>Status:</strong> {item.status}</p>

                <button
                  onClick={() => removeFavorite(item.key)}
                  className="mt-4 flex items-center gap-2 text-red-600 hover:underline text-sm"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* COLLABORATORS */}
      {collaborators.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-green-700 mb-4">
            <FaUsers /> Collaborators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborators.map((item) => (
              <div
                key={item.key}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-gray-600"><strong>Specialty:</strong> {item.specialty}</p>
                <p className="text-gray-600"><strong>Interests:</strong> {item.interests}</p>

                <button
                  onClick={() => removeFavorite(item.key)}
                  className="mt-4 flex items-center gap-2 text-red-600 hover:underline text-sm"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PUBLICATIONS */}
      {publications.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-3 text-purple-700 mb-4">
            <FaBookOpen /> Publications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((item) => (
              <div
                key={item.key}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600"><strong>Journal:</strong> {item.journal}</p>
                <p className="text-gray-600"><strong>Year:</strong> {item.year}</p>

                <button
                  onClick={() => removeFavorite(item.key)}
                  className="mt-4 flex items-center gap-2 text-red-600 hover:underline text-sm"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
