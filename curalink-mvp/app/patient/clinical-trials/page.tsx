"use client";

import {useEffect, useState } from "react";
import trialsData from "@/app/data/trials.json";
import { FaFlask, FaSearch } from "react-icons/fa";
import { useFavorites } from "@/app/hooks/useFavorites";
import { FaHeart, FaRegHeart, FaStar, FaRegStar, FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function ClinicalTrialsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [profile, setProfile] = useState<any>(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // ✅ Load patient profile (condition + location)
  useEffect(() => {
    const stored = localStorage.getItem("patientProfile");
    if (stored) setProfile(JSON.parse(stored));
  }, []);

  // ✅ STEP 1 — Personalization filter
  const personalized = profile?.condition
    ? trialsData.filter((t) =>
        t.condition.toLowerCase().includes(profile.condition.toLowerCase())
      )
    : trialsData;

  // ✅ STEP 2 — Apply search + status filters on top
  const filteredTrials = personalized.filter((trial) => {
    const matchesSearch =
      trial.title.toLowerCase().includes(search.toLowerCase()) ||
      trial.condition.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || trial.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          <FaFlask className="text-blue-600 text-2xl" />
          Clinical Trials
        </h1>
        <p className="text-gray-600 mt-2">
          Browse recommended clinical trials based on your condition.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex items-center bg-white p-3 rounded-xl border w-full shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search trials (e.g., Lung Cancer, Immunotherapy)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-800"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 rounded-xl border bg-white shadow-sm text-gray-800"
        >
          <option value="all">All Status</option>
          <option value="recruiting">Recruiting</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Trial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTrials.map((trial) => {
          const favKey = `trial-${trial.id}`;

          return (
            <div
              key={trial.id}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
              >
              <h2 className="text-xl font-semibold text-gray-900">{trial.title}</h2>

              <p className="text-gray-600 mt-1">
                <strong>Condition:</strong> {trial.condition}
              </p>

              <p className="text-gray-600">
                <strong>Status:</strong> {trial.status}
              </p>

              <p className="text-gray-600">
                <strong>Location:</strong> {trial.location}
              </p>

              {/* AI Summary Placeholder */}
              <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg text-sm">
                <strong>AI Summary:</strong> {trial.summary}
              </p>

              <a
                href={`mailto:${trial.contact}`}
                className="text-blue-600 mt-4 inline-block hover:underline font-medium"
              >
                Contact Trial Coordinator →
              </a>
            

              <button
                onClick={(e) => {
                  e.preventDefault();
                  isFavorite(favKey)
                    ? removeFavorite(favKey)
                    : addFavorite({ key: favKey, type: "trial", ...trial });
                }}
                 className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${isFavorite(favKey)
                    ? "bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100"
                    : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                  }
                `}
              >
                {isFavorite(favKey) ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaRegStar className="text-blue-600" />
                )}
                {isFavorite(favKey) ? "Saved ★" : "Save to Favorites"}
              </button>

            </div>
       );
        })}
      </div>
    </div>
  );
}
