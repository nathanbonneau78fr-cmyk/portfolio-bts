import { realisations } from "@/data/realisations";
import { RealisationCard } from "@/components/RealisationCard";
import { PageSection } from "@/components/PageSection";

export default function RealisationsPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Réalisations professionnelles et preuves
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Chaque fiche présente une mission avec son contexte, les tâches
            réalisées, les compétences mobilisées et les preuves PDF associées.
          </p>
        </div>
      </section>

      <PageSection>
        <ul className="space-y-6">
          {realisations.map((realisation) => (
            <li key={realisation.id}>
              <RealisationCard realisation={realisation} expandable={false} />
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
