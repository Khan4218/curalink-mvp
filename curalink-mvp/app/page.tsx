import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      {/* Title */}
      <h1 className="text-4xl text-gray-900 text-center">
        CuraLink
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-center text-gray-600 max-w-md">
        Connecting patients and researchers to discover clinical trials, publications, and health experts.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col gap-4 w-full max-w-sm">
        <Link
          href="/patient/onboarding"
          className="w-full rounded-xl py-4 text-center bg-blue-600 text-white text-lg transition hover:bg-blue-700"
        >
          I am a Patient / Caregiver
        </Link>

        <Link
          href="/researcher/onboarding"
          className="w-full rounded-xl py-4 text-center bg-gray-100 text-gray-900 text-lg border border-gray-300 transition hover:bg-gray-200"
        >
          I am a Researcher
        </Link>
      </div>

      {/* Footer */}
      <p className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} CuraLink
      </p>
    </main>
  );
}
