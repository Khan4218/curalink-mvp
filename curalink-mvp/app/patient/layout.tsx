"use client";

import Sidebar from "../components/Sidebar";
import { usePathname } from "next/navigation";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log("patient layout loaded, pathname:", pathname);

  // Hide sidebar for onboarding route
  if (pathname.startsWith("/patient/onboarding")) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}

