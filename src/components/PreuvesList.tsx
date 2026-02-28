import type { Preuve } from "@/types";

interface PreuvesListProps {
  preuves: Preuve[];
  /** Préfixe pour l'accessibilité (ex. "Preuves de la réalisation") */
  ariaLabel?: string;
}

/**
 * Affiche les preuves PDF d'une réalisation : liens consultation / téléchargement.
 */
export function PreuvesList({ preuves, ariaLabel = "Preuves associées" }: PreuvesListProps) {
  if (preuves.length === 0) {
    return (
      <p className="text-sm italic text-neutral-500 dark:text-neutral-400">
        [Aucune preuve PDF renseignée – à compléter]
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap gap-3" aria-label={ariaLabel}>
      {preuves.map((preuve, index) => (
        <li key={index}>
          <a
            href={preuve.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-primary-700 shadow-sm transition hover:bg-primary-50 hover:border-primary-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-primary-400 dark:hover:bg-primary-900/30"
            download
          >
            <PdfIcon />
            <span>{preuve.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function PdfIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 9h6M9 13h6M9 17h4"
      />
    </svg>
  );
}
