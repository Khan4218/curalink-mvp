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
  <div className="space-y-10">

    {/* Header */}
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
        <FaFlask className="text-blue-600 text-3xl" />
        Clinical Trials
      </h1>
      <p className="text-gray-600 text-lg">
        Browse recommended clinical trials based on your condition.
      </p>
    </div>

    {/* Search + Filters */}
    <div className="flex flex-col md:flex-row gap-4">

      {/* Search Bar */}
      <div className="flex items-center bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
        <FaSearch className="text-gray-500 mr-3 text-lg" />
        <input
          type="text"
          placeholder="Search trials (e.g., Lung Cancer, Immunotherapy)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-gray-800 text-base"
        />
      </div>

      {/* Status Filter */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition text-gray-800 text-base"
      >
        <option value="all">All Status</option>
        <option value="recruiting">Recruiting</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    {/* Trial Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredTrials.map((trial) => {
        const favKey = `trial-${trial.id}`;

        return (
          <div
            key={trial.id}
            className="bg-white/90 backdrop-blur rounded-2xl p-6 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 leading-snug">
              {trial.title}
            </h2>

            {/* Details */}
            <div className="mt-3 space-y-1.5 text-gray-700">
              <p><strong>Condition:</strong> {trial.condition}</p>
              <p><strong>Status:</strong> {trial.status}</p>
              <p><strong>Location:</strong> {trial.location}</p>
            </div>

            {/* AI Summary */}
            <p className="mt-4 text-gray-700 bg-gray-50 p-4 rounded-xl text-sm leading-relaxed border border-gray-100">
              <strong className="text-gray-900">AI Summary:</strong> {trial.summary}
            </p>

            {/* Contact */}
            <a
              href={`mailto:${trial.contact}`}
              className="text-blue-600 mt-4 inline-block hover:underline font-medium"
            >
              Contact Trial Coordinator →
            </a>

            {/* Favorite Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                isFavorite(favKey)
                  ? removeFavorite(favKey)
                  : addFavorite({ key: favKey, type: "trial", ...trial });
              }}
              className={`mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  isFavorite(favKey)
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
