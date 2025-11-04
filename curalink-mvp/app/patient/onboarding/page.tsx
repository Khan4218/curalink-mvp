"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PatientOnboarding() {
  const router = useRouter();

  const [condition, setCondition] = useState("Lung Cancer");
  const [location, setLocation] = useState("India");
  const [tags, setTags] = useState<string[]>(["lung cancer"]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const patientProfile = {
      condition,
      location,
      tags,
    };

    localStorage.setItem("patientProfile", JSON.stringify(patientProfile));

    router.push("/patient/dashboard");
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6 border"
      >
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900">
          Patient Onboarding
        </h1>
        <p className="text-gray-600">Tell us about your condition to personalize your dashboard.</p>
        <button
          onClick={() => {
            localStorage.removeItem("patientProfile");
            window.location.href = "/patient/onboarding";
          }}
          className="text-sm text-red-500 underline mt-2"
        >
          Reset profile
        </button>


        {/* Condition Dropdown */}
        <div>
          <label className="text-gray-700 font-medium">Primary Condition</label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
            className="w-full p-3 mt-2 border rounded-xl bg-gray-50 outline-none"
          >
            <option value="">Select your condition</option>
            <option value="Brain Cancer">Brain Cancer</option>
            <option value="Glioma">Glioma</option>
            <option value="Lung Cancer">Lung Cancer</option>
            <option value="Breast Cancer">Breast Cancer</option>
            <option value="Heart Disease">Heart Disease</option>
          </select>
        </div>

        {/* Location Input */}
        <div>
          <label className="text-gray-700 font-medium">Your Location</label>
          <input
            type="text"
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 mt-2 border rounded-xl bg-gray-50 outline-none"
            required
          />
        </div>

        {/* Additional Conditions (Tags) */}
        <div>
          <label className="text-gray-700 font-medium">Additional Conditions (Optional)</label>

          <div className="flex gap-3 mt-2">
            <input
              type="text"
              placeholder="e.g., Tumor, Migraine..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="flex-1 p-3 border rounded-xl bg-gray-50 outline-none"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>

          {/* Tag Pills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium"
        >
          Continue →
        </button>
          <p className="text-gray-500 text-sm">
          (Pre-filled for demo — you can edit if needed)
          </p>
      </form>
    </div>
  );
}
