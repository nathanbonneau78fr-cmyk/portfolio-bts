import { competences } from "@/data/competences";
import { PageSection } from "@/components/PageSection";

export default function CompetencesPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Compétences
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Les 6 compétences du bloc « Support et mise à disposition de
            services informatiques »
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <ul className="space-y-8">
          {competences.map((comp) => (
            <li key={comp.id}>
              <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-700 dark:bg-neutral-800/50">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {comp.titre}
                </h2>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {comp.description}
                </p>
                {comp.indicateurs && comp.indicateurs.length > 0 && (
                  <div className="mt-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                      Exemples / indicateurs
                    </span>
                    <ul className="mt-1 list-inside list-disc text-sm text-neutral-600 dark:text-neutral-400">
                      {comp.indicateurs.map((ind, i) => (
                        <li key={i}>{ind}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
