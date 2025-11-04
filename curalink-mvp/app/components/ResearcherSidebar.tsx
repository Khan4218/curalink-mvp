"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const researcherLinks = [
  { name: "Dashboard", href: "/researcher/dashboard" },
  { name: "Add Trial", href: "/researcher/add-trial" },
  { name: "Collaborators", href: "/researcher/collaborators" },
  { name: "Forums", href: "/researcher/forums" },
  { name: "Favorites", href: "/researcher/favorites" },
];

export default function ResearcherSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen px-6 py-6">

      {/* Logo */}
      <h1 className="flex items-center gap-3 px-2 mb-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/curaLink-logo.svg"
            alt="CuraLink Logo"
            width={32}
            height={32}
            className="object-contain"
          />

          <span className="text-2xl font-bold tracking-tight">
            <span className="text-gray-900">Cura</span>
            <span className="text-blue-600">Link</span>
          </span>
        </Link>
      </h1>

      {/* Links */}
      <nav className="mt-1 flex flex-col space-y-1.5">
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
