import type { Realisation } from "@/types";
import { competences } from "@/data/competences";
import { PreuvesList } from "./PreuvesList";

interface RealisationCardProps {
  realisation: Realisation;
  /** Afficher en format dépliable (résumé + détail au clic) ou toujours étendu */
  expandable?: boolean;
}

/**
 * Carte / fiche d'une réalisation professionnelle avec preuves PDF intégrées.
 */
export function RealisationCard({ realisation, expandable = false }: RealisationCardProps) {
  const competenceLabels = realisation.competencesMobilisees.map(
    (id) => competences.find((c) => c.id === id)?.titre ?? id
  );

  const cardBody = (
    <div className="mt-3 space-y-3 text-sm">
      <div>
        <span className="font-medium text-neutral-700 dark:text-neutral-300">
          Contexte
        </span>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          {realisation.contexte}
        </p>
      </div>
      <div>
        <span className="font-medium text-neutral-700 dark:text-neutral-300">
          Tâches réalisées
        </span>
        <ul className="mt-1 list-inside list-disc space-y-0.5 text-neutral-600 dark:text-neutral-400">
          {realisation.tachesRealisees.map((tache, i) => (
            <li key={i}>{tache}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-medium text-neutral-700 dark:text-neutral-300">
          Compétences mobilisées
        </span>
        <ul className="mt-1 list-inside list-disc space-y-0.5 text-neutral-600 dark:text-neutral-400">
          {competenceLabels.map((label, i) => (
            <li key={i}>{label}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-medium text-neutral-700 dark:text-neutral-300">
          Preuves associées
        </span>
        <div className="mt-2">
          <PreuvesList
            preuves={realisation.preuves}
            ariaLabel={`Preuves pour ${realisation.titre}`}
          />
        </div>
      </div>
    </div>
  );

  if (expandable) {
    return (
      <details className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/50">
        <summary className="cursor-pointer list-none font-semibold text-neutral-900 dark:text-neutral-100">
          <span className="flex items-center justify-between gap-2">
            {realisation.titre}
            <span className="text-neutral-400 transition group-open:rotate-180">
              ▼
            </span>
          </span>
        </summary>
        <div className="mt-4 border-t border-neutral-100 pt-4 dark:border-neutral-700">
          {cardBody}
        </div>
      </details>
    );
  }

  return (
    <article
      className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/50"
      aria-labelledby={`realisation-${realisation.id}`}
    >
      <h3
        id={`realisation-${realisation.id}`}
        className="text-lg font-semibold text-neutral-900 dark:text-neutral-100"
      >
        {realisation.titre}
      </h3>
      {cardBody}
    </article>
  );
}
