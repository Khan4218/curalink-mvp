import { FaFlask, FaUserMd, FaBookOpen } from "react-icons/fa";
import Link from "next/link";


export default function PatientDashboard() {
  return (
    <div className="space-y-10">

      {/* Header Section */}
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">
          Your Personalized Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Explore trials, experts, and research tailored to your condition.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Clinical Trials Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center gap-3">
            <FaFlask className="text-blue-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Clinical Trials
            </h2>
          </div>

          <p className="text-gray-600 mt-2">
            Recommended trials based on your condition.
          </p>

          <div className="mt-6 text-blue-600 font-medium cursor-pointer hover:underline">
            <Link
            href="/patient/clinical-trials"
            className="mt-6 text-blue-600 font-medium hover:underline"
            >
            View trials →
           </Link>

          </div>
        </div>

        {/* Health Experts Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center gap-3">
            <FaUserMd className="text-green-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Health Experts
            </h2>
          </div>

          <p className="text-gray-600 mt-2">
            Specialists related to your medical condition.
          </p>

          <div className="mt-6 text-green-600 font-medium cursor-pointer hover:underline">
           <Link
              href="/patient/experts"
              className="mt-6 text-green-600 font-medium hover:underline"
            >
              View experts →
            </Link>
          </div>
        </div>

        {/* Publications Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition">
          <div className="flex items-center gap-3">
            <FaBookOpen className="text-purple-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Publications
            </h2>
          </div>

          <p className="text-gray-600 mt-2">
            Latest research related to your condition.
          </p>

          <div className="mt-6 text-purple-600 font-medium cursor-pointer hover:underline">
           <Link
            href="/patient/publications"
            className="mt-6 text-purple-600 font-medium hover:underline"
          >
            View publications →
          </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
