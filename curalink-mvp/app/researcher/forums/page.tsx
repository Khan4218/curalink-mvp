"use client";

import Link from "next/link";
import forumsData from "@/app/data/researcher-forums.json";
import { FaQuestionCircle } from "react-icons/fa";

export default function ResearcherForumsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          <FaQuestionCircle className="text-orange-600 text-2xl" />
          Patient Questions
        </h1>
        <p className="text-gray-600 mt-2">
          Respond to patient questions related to their conditions.
        </p>
      </div>

      {/* List */}
      <div className="space-y-6">
        {forumsData.map((post) => (
          <Link
            key={post.id}
            href={`/researcher/forums/${post.id}`}
            className="block bg-white p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {post.title}
            </h2>

            <p className="text-gray-600 mt-1">{post.body}</p>

            <p className="mt-3 text-sm text-gray-500">
              Asked by: <span className="font-medium">{post.askedBy}</span>
            </p>

            <span
              className={`inline-block mt-4 px-3 py-1 text-sm rounded-lg ${
                post.answers.length > 0
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {post.answers.length > 0 ? "Answered" : "Unanswered"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
