"use client";

import PatientSidebar from "../components/PatientSidebar";
import { usePathname } from "next/navigation";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ✅ Hide sidebar on onboarding
  if (pathname.startsWith("/patient/onboarding")) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-6">
        {children}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ✅ Sidebar stays fixed */}
      <div className="w-64 border-r border-gray-200 bg-white fixed inset-y-0 left-0">
        <PatientSidebar />
      </div>

      {/* ✅ Main Content */}
      <main className="flex-1 ml-64 px-10 py-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-10">
          {children}
        </div>
      </main>
    </div>
  );
}
