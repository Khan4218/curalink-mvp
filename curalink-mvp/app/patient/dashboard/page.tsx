export default function PatientDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-semibold text-gray-900">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Personalized recommendations based on your condition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Recommended Trials */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h2 className="text-xl font-semibold text-gray-900">
            Recommended Trials
          </h2>
          <p className="text-gray-600 mt-1 text-sm">Based on your condition.</p>
          <div className="mt-4 text-gray-500">Coming soon...</div>
        </div>

        {/* Experts */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h2 className="text-xl font-semibold text-gray-900">
            Health Experts
          </h2>
          <p className="text-gray-600 mt-1 text-sm">Relevant specialists.</p>
          <div className="mt-4 text-gray-500">Coming soon...</div>
        </div>

        {/* Publications */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border">
          <h2 className="text-xl font-semibold text-gray-900">
            Publications
          </h2>
          <p className="text-gray-600 mt-1 text-sm">Latest findings.</p>
          <div className="mt-4 text-gray-500">Coming soon...</div>
        </div>

      </div>
    </div>
  );
}
