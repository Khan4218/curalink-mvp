"use client";

import { useState } from "react";

export default function AskQuestion() {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-3xl font-semibold text-gray-900">Ask a Question</h1>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Question Title</label>
        <input
          className="w-full p-3 border rounded-xl mt-1"
          placeholder="E.g., Am I eligible for immunotherapy?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Question Text */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Your Question</label>
        <textarea
          className="w-full p-3 border rounded-xl mt-1 h-40"
          placeholder="Write your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      {/* Fake Submit */}
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        onClick={() => alert("Submitted! (MVP – no backend yet)")}
      >
        Submit Question
      </button>
    </div>
  );
}
