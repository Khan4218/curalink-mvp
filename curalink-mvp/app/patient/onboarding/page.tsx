"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PatientOnboarding() {
  const router = useRouter();

  const [condition, setCondition] = useState("");
  const [extraCondition, setExtraCondition] = useState("");
  const [location, setLocation] = useState("");

  const handleContinue = () => {
    router.push("/patient/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white shadow-sm rounded-2xl p-8">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Patient Profile Setup
        </h1>

        <p className="text-gray-600 mt-2">
          Help us personalize your CuraLink experience.
        </p>

        {/* Condition Input */}
        <div className="mt-8">
          <label className="block text-gray-700 font-medium mb-1">
            Describe your condition
          </label>
          <input
            type="text"
            placeholder="e.g., I have Brain Cancer"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Extra Condition */}
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-1">
            Add another condition (optional)
          </label>
          <select
            value={extraCondition}
            onChange={(e) => setExtraCondition(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Condition</option>
            <option value="Glioma">Glioma</option>
            <option value="Lung Cancer">Lung Cancer</option>
            <option value="Brain Tumor">Brain Tumor</option>
            <option value="Heart Disease">Heart Disease</option>
          </select>
        </div>

        {/* Location */}
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-1">
            Your Location
          </label>
          <input
            type="text"
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="mt-8 w-full bg-blue-600 text-white py-3.5 rounded-xl text-lg hover:bg-blue-700 transition font-medium"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
