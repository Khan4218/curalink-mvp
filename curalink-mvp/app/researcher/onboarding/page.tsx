"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResearcherOnboarding() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [interests, setInterests] = useState("");
  const [orcid, setOrcid] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-xl border">

        <h1 className="text-3xl font-semibold text-gray-900">
          Researcher Onboarding
        </h1>

        <p className="text-gray-600 mt-2">
          Tell us a bit about your background to personalize your dashboard.
        </p>

        {/* FORM */}
        <div className="mt-8 space-y-5">

          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Dr. John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Specialty */}
          <div>
            <label className="text-gray-700 font-medium">
              Primary Specialty
            </label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select specialty</option>
              <option value="Oncology">Oncology</option>
              <option value="Neurology">Neurology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Immunology">Immunology</option>
              <option value="Genetics">Genetics</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
          </div>

          {/* Research Interests */}
          <div>
            <label className="text-gray-700 font-medium">Research Interests</label>
            <input
              type="text"
              placeholder="e.g., Immunotherapy, AI in diagnostics"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ORCID */}
          <div>
            <label className="text-gray-700 font-medium">
              ORCID (optional)
            </label>
            <input
              type="text"
              placeholder="https://orcid.org/0000-0000-0000-0000"
              value={orcid}
              onChange={(e) => setOrcid(e.target.value)}
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="text-gray-700 font-medium">
              Years of Experience
            </label>
            <input
              type="number"
              placeholder="5"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full mt-2 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Continue Button */}
        <Link
          href="/researcher/dashboard"
          className="mt-8 w-full block bg-blue-600 text-center text-white py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Continue →
        </Link>

      </div>
    </div>
  );
}

