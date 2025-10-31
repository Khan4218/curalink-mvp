"use client";

import { useState } from "react";
import expertsData from "@/app/data/experts.json";
import { FaUserMd, FaSearch } from "react-icons/fa";

export default function ExpertsPage() {
  const [search, setSearch] = useState("");

  const filteredExperts = expertsData.filter((expert) => {
    return (
      expert.name.toLowerCase().includes(search.toLowerCase()) ||
      expert.specialty.toLowerCase().includes(search.toLowerCase()) ||
      expert.condition.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          <FaUserMd className="text-green-600 text-2xl" />
          Health Experts
        </h1>

        <p className="text-gray-600 mt-2">
          Browse recommended medical specialists based on your condition.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white p-3 rounded-xl border w-full shadow-sm">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search experts by name, specialty, or condition..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-gray-800"
        />
      </div>

      {/* Experts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredExperts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{expert.name}</h2>

            <p className="text-gray-600 mt-1"><strong>Specialty:</strong> {expert.specialty}</p>
            <p className="text-gray-600"><strong>Condition Focus:</strong> {expert.condition}</p>
            <p className="text-gray-600"><strong>Location:</strong> {expert.location}</p>
            <p className="text-gray-600"><strong>Experience:</strong> {expert.experience}</p>

            {/* Availability */}
            <p className="mt-3">
              <span className={`px-3 py-1 text-sm rounded-lg ${
                expert.available ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-700"
              }`}>
                {expert.available ? "Available for Meetings" : "Not Available"}
              </span>
            </p>

            {/* AI Summary */}
            <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg text-sm">
              <strong>Expert Summary:</strong> {expert.summary}
            </p>

            {/* Request Meeting */}
            <a
              href={`mailto:${expert.contact}`}
              className="text-green-600 mt-4 inline-block hover:underline font-medium"
            >
              Request Meeting →
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
