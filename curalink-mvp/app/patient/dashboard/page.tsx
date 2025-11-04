"use client";

import { FaFlask, FaUserMd, FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react"; 


export default function PatientDashboard() {
  const [profile, setProfile] = useState<any>(undefined);

  useEffect(() => {
    const stored = localStorage.getItem("patientProfile");
    if (stored && stored !== "undefined") {
      setProfile(JSON.parse(stored));
    } else {
      setProfile(null);
    }
  }, []);

  if (!profile) {
    return (
      <div className="text-center text-gray-500 p-10">
        Loading personalized data…
      </div>
    );
  }

  

  return (
  <div className="pt-6 pb-16 px-6 md:px-10 lg:px-16">
    <div className="max-w-7xl mx-auto space-y-12">

      {/* ================================== */}
      {/* ✅ HEADER SECTION */}
      {/* ================================== */}
      <div className="space-y-8">

        {/* Title + Condition Tag */}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold text-gray-900">
            Your Personalized Dashboard
          </h1>

          {profile?.condition && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {profile.condition}
            </span>
          )}
        </div>

        {/* Subtitle + Location Tag */}
        <div className="flex flex-wrap items-center gap-3 text-gray-600">
          <p>
            Exploring results tailored to{" "}
            <span className="font-medium">
              {profile?.condition || "your condition"}
            </span>
          </p>

          {profile?.location && (
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {profile.location}
            </span>
          )}
        </div>

      </div>

      {/* ================================== */}
      {/* ✅ GRID SECTION */}
      {/* ================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Clinical Trials Card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl p-6 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 group">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-50 group-hover:bg-blue-100">
              <FaFlask className="text-blue-600 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Clinical Trials</h2>
          </div>

          <p className="text-gray-600 mt-3">
            Recommended trials based on your condition.
          </p>

          <div className="mt-6 text-blue-600 font-medium group-hover:underline">
            <Link href="/patient/clinical-trials">
              View trials →
            </Link>
          </div>
        </div>


        {/* Health Experts Card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl p-6 border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300 group">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-green-50 group-hover:bg-green-100">
              <FaUserMd className="text-green-600 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Health Experts</h2>
          </div>

          <p className="text-gray-600 mt-3">
            Specialists related to your medical condition.
          </p>

          <div className="mt-6 text-green-600 font-medium group-hover:underline">
            <Link href="/patient/experts">
              View experts →
            </Link>
          </div>
        </div>


        {/* Publications Card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl p-6 border border-gray-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 group">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-50 group-hover:bg-purple-100">
              <FaBookOpen className="text-purple-600 text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Publications</h2>
          </div>

          <p className="text-gray-600 mt-3">
            Latest research related to your condition.
          </p>

          <div className="mt-6 text-purple-600 font-medium group-hover:underline">
            <Link href="/patient/publications">
              View publications →
            </Link>
          </div>
        </div>


      </div>

    </div>
  </div>
);

}
