"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/patient/dashboard" },
  { name: "Clinical Trials", href: "/patient/clinical-trials" },
  { name: "Health Experts", href: "/patient/experts" },
  { name: "Publications", href: "/patient/publications" },
  { name: "Forums", href: "/patient/forums" },
  { name: "Favorites", href: "/patient/favorites" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen px-6 py-6">
      <h2 className="text-2xl font-semibold text-gray-900">CuraLink</h2>

      <nav className="mt-8 flex flex-col gap-2">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition ${
                active ? "bg-blue-600 text-white hover:bg-blue-600" : ""
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
