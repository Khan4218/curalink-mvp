import forumsData from "@/app/data/forums.json";

export default async function ForumPost({ params }: any) {
  const { postId } = await params;

  const post = forumsData.find((p: any) => String(p.id) === String(postId));
 
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <p className="text-blue-600 font-medium text-sm">{post.category}</p>
        <h1 className="text-3xl font-semibold text-gray-900 mt-2">{post.title}</h1>
      </div>

      {/* Patient Question */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Patient Question</h2>
        <p className="text-gray-700 mt-2">{post.question}</p>
      </div>

      {/* Researcher Reply */}
      <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
        <h2 className="text-lg font-semibold text-green-800">
          Researcher Reply — {post.researcher}
        </h2>
        <p className="text-gray-700 mt-2">{post.reply}</p>
      </div>
    </div>
  );
}
