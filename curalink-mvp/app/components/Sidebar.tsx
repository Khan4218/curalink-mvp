"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const patientLinks = [
  { name: "Patient Dashboard", href: "/patient/dashboard" },
  { name: "Clinical Trials", href: "/patient/clinical-trials" },
  { name: "Health Experts", href: "/patient/experts" },
  { name: "Publications", href: "/patient/publications" },
  { name: "Forums", href: "/patient/forums" },
  { name: "Favorites", href: "/patient/favorites" },
];

const researcherLinks = [
  { name: "Researcher Dashboard", href: "/researcher/dashboard" },
  { name: "Add Trial", href: "/researcher/add-trial" },
  { name: "Collaborators", href: "/researcher/collaborators" },
  { name: "Forums", href: "/researcher/forums" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen px-6 py-6">

      {/* Logo */}
      <h2 className="text-4xl text-gray-900 text-center mb-6 tracking-tight">
        <Link href="/" className="hover:text-blue-600 transition font-semibold">
          CuraLink
        </Link>
      </h2>

      {/* Patient Section */}
      <h3 className="text-[11px] tracking-widest text-gray-500 font-medium px-3 mt-4 uppercase">
        Patient
      </h3>

      <nav className="mt-3 flex flex-col space-y-1.5">
        {patientLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2.5 rounded-xl transition
                ${
                  active
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="mx-3 my-6 h-px bg-gray-200 rounded-full opacity-40"></div>

      {/* Researcher Section */}
      <h3 className="text-[11px] tracking-widest text-gray-500 font-medium px-3 uppercase">
        Researcher
      </h3>

      <nav className="mt-3 flex flex-col space-y-1.5">
        {researcherLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2.5 rounded-xl transition
                ${
                  active
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
