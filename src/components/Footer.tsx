import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Portfolio E4 · BTS SIO option SISR · Bloc « Support et mise à
            disposition de services informatiques »
          </p>
          <nav aria-label="Pied de page">
            <Link
              href="/contact"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
