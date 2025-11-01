import Link from "next/link";
import forumsData from "@/app/data/forums.json";
import { FaComments } from "react-icons/fa";

export default function ForumsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-3">
          <FaComments className="text-blue-600 text-2xl" />
          Forums
        </h1>
        <p className="text-gray-600 mt-2">
          Ask questions about clinical trials, conditions, and research. Researchers will respond.
        </p>
      </div>

      {/* Ask Question Button */}
      <Link
        href="/patient/forums/ask"
        className="inline-block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Ask a Question +
      </Link>

      {/* Forum Posts */}
      <div className="space-y-6">
        {forumsData.map((post) => (
          <Link
            key={post.id}
            href={`/patient/forums/${post.id}`}
            className="block bg-white border shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <p className="text-sm text-blue-600 font-medium">{post.category}</p>
            <h2 className="text-xl font-semibold text-gray-900 mt-1">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.question.slice(0, 120)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
