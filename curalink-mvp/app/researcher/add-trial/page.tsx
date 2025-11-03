"use client";

import { useState } from "react";
import { FaFlask, FaSave } from "react-icons/fa";

export default function AddTrialPage() {
  const [form, setForm] = useState({
    title: "",
    condition: "",
    status: "recruiting",
    location: "",
    contact: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Trial submitted:", form);

    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          <FaFlask className="text-blue-600" />
          Add New Clinical Trial
        </h1>
        <p className="text-gray-600 mt-2">
          Fill out the details below to publish a new clinical trial.
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="p-4 bg-green-100 text-green-700 rounded-xl border border-green-300">
          ✅ Trial created successfully! (Mock save)
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg border space-y-6 max-w-2xl"
      >
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Trial Title
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="e.g., Phase II Lung Cancer Immunotherapy Trial"
            className="w-full p-3 border rounded-xl bg-gray-50 outline-none"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Condition
          </label>
          <input
            name="condition"
            value={form.condition}
            onChange={handleChange}
            required
            placeholder="e.g., Lung Cancer"
            className="w-full p-3 border rounded-xl bg-gray-50 outline-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl bg-gray-50 outline-none"
          >
            <option value="recruiting">Recruiting</option>
            <option value="completed">Completed</option>
            <option value="paused">Paused</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Location
          </label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            placeholder="e.g., Boston, MA"
            className="w-full p-3 border rounded-xl bg-gray-50 outline-none"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Contact Email
          </label>
          <input
            type="email"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            placeholder="e.g., trial-coordinator@hospital.org"
            className="w-full p-3 border rounded-xl bg-gray-50 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Trial Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            placeholder="Provide a brief description of the clinical trial..."
            className="w-full p-3 border rounded-xl bg-gray-50 outline-none h-40"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium"
        >
          <FaSave />
          Save Trial
        </button>
      </form>
    </div>
  );
}
