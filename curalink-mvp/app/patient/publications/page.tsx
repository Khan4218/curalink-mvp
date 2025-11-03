"use client";

import { useState,useEffect} from "react";
import publicationsData from "@/app/data/publications.json";
import { FaBookOpen, FaSearch } from "react-icons/fa";
import { useFavorites } from "@/app/hooks/useFavorites";
import { FaHeart, FaRegHeart, FaStar, FaRegStar, FaBookmark, FaRegBookmark } from "react-icons/fa";


export default function PublicationsPage() { 
  const [search, setSearch] = useState("");
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

   const [profile, setProfile] = useState<any>(null);

    // ✅ Load patient profile (condition)
    useEffect(() => {
      const stored = localStorage.getItem("patientProfile");
      if (stored) setProfile(JSON.parse(stored));
    }, []);

    const personalized = profile?.condition
    ? publicationsData.filter((pub) =>
        (pub.title + pub.summary + pub.journal)
          .toLowerCase()
          .includes(profile.condition.toLowerCase())
      )
    : publicationsData;

    const filteredPublications = personalized.filter((pub) => {
      return (
        pub.title.toLowerCase().includes(search.toLowerCase()) ||
        pub.authors.toLowerCase().includes(search.toLowerCase()) ||
        pub.journal.toLowerCase().includes(search.toLowerCase())
      );
    });


  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          <FaBookOpen className="text-purple-600 text-2xl" />
          Publications
        </h1>
        <p className="text-gray-600 mt-2">
          Explore research related to your medical condition.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white p-3 rounded-xl border w-full shadow-sm">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search publications by title, author, or journal..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-gray-800"
        />
      </div>

      {/* Publications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPublications.map((pub) => {
           const favKey = `pub-${pub.id}`;
          return (
            <div
              key={pub.id}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-900">{pub.title}</h2>

              <p className="text-gray-600 mt-1"><strong>Authors:</strong> {pub.authors}</p>
              <p className="text-gray-600"><strong>Journal:</strong> {pub.journal}</p>
              <p className="text-gray-600"><strong>Year:</strong> {pub.year}</p>

              {/* AI Summary */}
              <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg text-sm">
                <strong>AI Summary:</strong> {pub.summary}
              </p>

              <a
                href={pub.url}
                target="_blank"
                className="text-purple-600 mt-4 inline-block hover:underline font-medium"
              >
                View Full Publication →
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  isFavorite(favKey)
                    ? removeFavorite(favKey)
                    : addFavorite({ key: favKey, type: "publications", ...pub });
                }}
                 className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isFavorite(favKey)
                    ? "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100"
                    : "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100"
                  }
                `}
              >
                {isFavorite(favKey) ? (
                  <FaBookmark className="text-purple-600" />
                ) : (
                  <FaRegBookmark className="text-indigo-600" />
                )}
                {isFavorite(favKey) ? "Bookmarked" : "Add to Favorites"}
              </button>

            </div>
          )
        }
          
        )}
      </div>

    </div>
  );
}
