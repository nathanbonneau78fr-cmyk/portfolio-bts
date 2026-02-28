"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/competences", label: "Compétences" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/synthese", label: "Tableau de synthèse" },
  { href: "/developpement-pro", label: "Développement pro" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-neutral-800 dark:bg-neutral-950/95">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-primary-700 dark:text-primary-400"
        >
          Portfolio E4 · BTS SIO SISR
        </Link>

        {/* Menu desktop */}
        <nav
          className="hidden md:flex md:items-center md:gap-1"
          aria-label="Navigation principale"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile dépliant */}
      <div
        id="mobile-menu"
        className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
        role="dialog"
        aria-label="Menu de navigation"
      >
        <nav
          className="border-t border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300"
                        : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
