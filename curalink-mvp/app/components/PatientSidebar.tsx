"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHeartbeat } from "react-icons/fa";

const patientLinks = [
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
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen px-6 py-6 shadow-sm">

  {/* Logo */}
  <h1 className="flex items-center gap-3 px-2 mb-8">
    <Link href="/" className="flex items-center gap-3 group">
      <Image
        src="/curaLink-logo.svg"
        alt="CuraLink Logo"
        width={36}
        height={36}
        className="transition-transform group-hover:scale-110"
      />

      <span className="text-2xl font-bold tracking-tight">
        <span className="text-gray-900">Cura</span>
        <span className="text-blue-600">Link</span>
      </span>
    </Link>
  </h1>

  {/* Patient Links */}
  <nav className="flex flex-col space-y-1.5">
    {patientLinks.map((link) => {
      const active = pathname === link.href;

      return (
        <Link
          key={link.name}
          href={link.href}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
            ${active
              ? "bg-blue-600 text-white shadow-sm scale-[1.02]"
              : "text-gray-700 hover:bg-gray-100 hover:scale-[1.01]"
            }
          `}
        >
          {/* Bullet indicator left */}
          <span
            className={`
              w-2 h-2 rounded-full transition
              ${active ? "bg-white" : "bg-gray-300 group-hover:bg-blue-400"}
            `}
          />

          {link.name}
        </Link>
      );
    })}
  </nav>
</aside>

  );
}

