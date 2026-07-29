"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Framevolve
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="hidden md:block rounded-full bg-white text-black px-5 py-2 font-medium hover:scale-105 transition-transform">
          Book a Call
        </button>

        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </nav>
    </header>
  );
}
