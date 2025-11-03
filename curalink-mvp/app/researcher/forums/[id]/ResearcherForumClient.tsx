"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import forumsData from "@/app/data/researcher-forums.json";
import { FaReply } from "react-icons/fa";

export default  function ResearcherForumClient() {

  const params = useParams();                // ✅ Correct way in client component
  const postId = String(params.id);          // ✅ Now always correct

  

  const post = forumsData.find((p) => String(p.id) === postId);
  console.log(post);
  

  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!post) return <p>Post not found.</p>;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Answer submitted:", answer);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setAnswer("");
  };

  return (
    <div className="space-y-8">

      {/* Question */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h1 className="text-3xl font-semibold text-gray-900">{post.title}</h1>
        <p className="text-gray-700 mt-3">{post.body}</p>

        <p className="text-sm text-gray-500 mt-2">
          Asked by: <span className="font-medium">{post.askedBy}</span>
        </p>
      </div>

      {/* Answer Form */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <FaReply className="text-orange-600" />
          Your Answer
        </h2>

        {submitted && (
          <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-xl text-green-700">
            ✅ Answer submitted! (Mock)
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            placeholder="Write your expert answer here..."
            className="w-full p-3 border rounded-xl bg-gray-50 outline-none h-40"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition font-medium"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
}
