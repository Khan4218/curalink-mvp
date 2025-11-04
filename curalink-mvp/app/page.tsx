import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Top Logo */}
      <div className="w-full flex justify-center mt-10">
        <div className="flex items-center gap-3">
          <img 
            src="/curaLink-logo.svg" 
            alt="CuraLink Logo" 
            className="w-10 h-10"
          />
          <h1 className="text-3xl font-bold text-gray-900">
            Cura<span className="text-blue-600">Link</span>
          </h1>
        </div>
      </div>

      {/* ✅ CENTER EVERYTHING PERFECTLY */}
      <div className="flex-1 flex items-center justify-center flex-col">
        <section className="max-w-4xl text-center px-6 mt-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Connecting Patients & Researchers,
            <span className="text-blue-600"> Seamlessly.</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover personalized clinical trials, health experts, and medical publications —
            all in one intelligent platform designed to guide you through your health journey.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
            <Link
              href="/patient/onboarding"
              className="w-full rounded-xl py-4 text-center bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition"
            >
              I am a Patient / Caregiver
            </Link>

            <Link
              href="/researcher/onboarding"
              className="w-full rounded-xl py-4 text-center bg-gray-100 text-gray-900 text-lg font-medium border hover:bg-gray-200 transition"
            >
              I am a Researcher
            </Link>
          </div>
        </section>
      </div>

      {/* Trusted logos */}
      <section className="mt-10 mb-12 px-6 text-center">
        <p className="text-gray-500 text-sm uppercase tracking-wide">
          Trusted by global researchers & institutions
        </p>

        <div className="flex flex-wrap justify-center mt-6 gap-10 opacity-70">
          <span className="text-xl font-semibold">NIH</span>
          <span className="text-xl font-semibold">Harvard Med</span>
          <span className="text-xl font-semibold">Mayo Clinic</span>
          <span className="text-xl font-semibold">Stanford</span>
        </div>
      </section>

      {/* Footer */}
      <p className="mb-6 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} CuraLink — Empowering Medical Discovery
      </p>

    </main>
  );
}
