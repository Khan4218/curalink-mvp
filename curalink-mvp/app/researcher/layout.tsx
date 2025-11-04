"use client";

import ResearcherSidebar from "../components/ResearcherSidebar";
import { usePathname } from "next/navigation";

export default function ResearcherLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log("researcher layout loaded, pathname:", pathname);

  // ✅ Hide sidebar for onboarding route
  if (pathname.startsWith("/researcher/onboarding")) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  return (
    <div className="flex">
      <ResearcherSidebar />

      <main className="flex-1 bg-gray-50 px-10 py-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-10">
          {children}
        </div>
      </main>
    </div>
  );
}
