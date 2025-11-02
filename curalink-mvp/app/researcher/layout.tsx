import Sidebar from "@/app/components/Sidebar";

export default function ResearcherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-10 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
