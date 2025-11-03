"use client";

import { useState } from "react";
import collaboratorsData from "@/app/data/collaborators.json";
import { FaUsers, FaSearch, FaEnvelope } from "react-icons/fa";

export default function CollaboratorsPage() {
  const [search, setSearch] = useState("");

  const filtered = collaboratorsData.filter((c) =>
    (c.name + c.specialty + c.interests + c.institution)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          <FaUsers className="text-green-600 text-2xl" />
          Collaborators
        </h1>
        <p className="text-gray-600 mt-2">
          Find researchers working on similar fields and collaborate.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white p-3 rounded-xl border w-full shadow-sm">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by name, specialty, interest, or institution..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-gray-800"
        />
      </div>

      {/* Collaborator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((col) => (
          <div
            key={col.id}
            className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">{col.name}</h2>

            <p className="text-gray-600 mt-1">
              <strong>Specialty:</strong> {col.specialty}
            </p>

            <p className="text-gray-600">
              <strong>Interests:</strong> {col.interests}
            </p>

            <p className="text-gray-600">
              <strong>Institution:</strong> {col.institution}
            </p>

            <p className="text-gray-600">
              <strong>Publications:</strong> {col.publications}
            </p>

            {/* Summary */}
            <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-lg text-sm">
              <strong>Summary:</strong> {col.summary}
            </p>

            {/* Email */}
            <a
              href={`mailto:${col.email}`}
              className="text-green-600 mt-4 inline-block hover:underline font-medium flex items-center gap-2"
            >
              <FaEnvelope />
              Contact Researcher →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
