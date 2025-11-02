import { FaFlask, FaUsers, FaBookOpen, FaPlusCircle, FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

export default function ResearcherDashboard() {
  return (
    <div className="space-y-10 p-2 bg-[radial-gradient(circle_at_top_right,#fafafa,#ffffff)] rounded-xl">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">
          Researcher Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Manage trials, collaborate with researchers, and respond to patient queries.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Active Trials */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition">
          <div className="flex items-center gap-4">
            <FaFlask className="text-blue-600 text-3xl" />
            <div>
              <p className="text-gray-600">Active Trials</p>
              <h2 className="text-2xl font-semibold text-gray-900">12</h2>

              <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-lg mt-1 inline-block">
                Updated today
              </span>
            </div>
          </div>
        </div>

        {/* Collaborators */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition">
          <div className="flex items-center gap-4">
            <FaUsers className="text-green-600 text-3xl" />
            <div>
              <p className="text-gray-600">Collaborators</p>
              <h2 className="text-2xl font-semibold text-gray-900">28</h2>

              <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-lg mt-1 inline-block">
                Active network
              </span>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition">
          <div className="flex items-center gap-4">
            <FaBookOpen className="text-purple-600 text-3xl" />
            <div>
              <p className="text-gray-600">Publications</p>
              <h2 className="text-2xl font-semibold text-gray-900">14</h2>

              <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded-lg mt-1 inline-block">
                New insights
              </span>
            </div>
          </div>
        </div>

        {/* Pending Questions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition">
          <div className="flex items-center gap-4">
            <FaQuestionCircle className="text-orange-600 text-3xl" />
            <div>
              <p className="text-gray-600">Pending Questions</p>
              <h2 className="text-2xl font-semibold text-gray-900">5</h2>

              <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded-lg mt-1 inline-block">
                Requires review
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Main Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Add New Trial */}
        <Link
          href="/researcher/add-trial"
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all block"
        >
          <div className="flex items-center gap-3">
            <FaPlusCircle className="text-blue-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Add New Clinical Trial
            </h2>
          </div>

          <p className="text-gray-600 mt-2">
            Create and manage your clinical trials.
          </p>

          <div className="mt-4 text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
            Create a trial <span className="text-lg">→</span>
          </div>
        </Link>

        {/* Collaborator Search */}
        <Link
          href="/researcher/collaborators"
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all block"
        >
          <div className="flex items-center gap-3">
            <FaUsers className="text-green-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Find Collaborators
            </h2>
          </div>

          <p className="text-gray-600 mt-2">
            Connect with global experts in your field.
          </p>

          <div className="mt-4 text-green-600 font-medium hover:underline inline-flex items-center gap-1">
            Search collaborators <span className="text-lg">→</span>
          </div>
        </Link>

        {/* Respond to Forum Questions */}
        <Link
          href="/researcher/forums"
          className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all block"
        >
          <div className="flex items-center gap-3">
            <FaQuestionCircle className="text-orange-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Answer Patient Questions
            </h2>
          </div>

          <p className="text-gray-600 mt-2">
            Help patients by answering their condition-related queries.
          </p>

          <div className="mt-4 text-orange-600 font-medium hover:underline inline-flex items-center gap-1">
            View questions <span className="text-lg">→</span>
          </div>
        </Link>

      </div>
    </div>
  );
}
