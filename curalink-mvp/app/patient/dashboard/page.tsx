export default function PatientDashboard() {
  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Personalized recommendations based on your condition.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recommended Trials</h2>
          <p className="text-gray-600 mt-1 text-sm">Based on your condition.</p>
          <p className="mt-4 text-gray-500">Coming soon...</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Health Experts</h2>
          <p className="text-gray-600 mt-1 text-sm">Relevant specialists.</p>
          <p className="mt-4 text-gray-500">Coming soon...</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Publications</h2>
          <p className="text-gray-600 mt-1 text-sm">Latest findings.</p>
          <p className="mt-4 text-gray-500">Coming soon...</p>
        </div>

      </div>
    </div>
  );
}
