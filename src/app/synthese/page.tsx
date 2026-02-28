import { realisations } from "@/data/realisations";
import { competences } from "@/data/competences";
import type { CompetenceId } from "@/types";
import { PageSection } from "@/components/PageSection";

function getCompetenceLabel(id: CompetenceId): string {
  return competences.find((c) => c.id === id)?.titre ?? id;
}

export default function SynthesePage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Tableau de synthèse
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Correspondance entre les réalisations et les compétences du bloc.
          </p>
        </div>
      </section>

      <PageSection className="overflow-x-auto">
        <div className="min-w-[640px]">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="bg-neutral-100 px-4 py-3 font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100">
                  Réalisation
                </th>
                {competences.map((c) => (
                  <th
                    key={c.id}
                    className="bg-neutral-100 px-3 py-3 font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    title={c.titre}
                  >
                    <span className="block max-w-[100px] truncate sm:max-w-[140px]">
                      {c.titre}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {realisations.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-neutral-100 dark:border-neutral-800"
                >
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">
                    {r.titre}
                  </td>
                  {competences.map((c) => {
                    const mobilisee = r.competencesMobilisees.includes(c.id);
                    return (
                      <td
                        key={c.id}
                        className="px-3 py-3 text-center"
                        aria-label={mobilisee ? `${getCompetenceLabel(c.id)} mobilisée` : ""}
                      >
                        {mobilisee ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 font-medium text-white dark:bg-primary-500" title="Compétence mobilisée">
                            <span className="sr-only">Oui</span>
                            <span aria-hidden>✓</span>
                          </span>
                        ) : (
                          <span className="text-neutral-300 dark:text-neutral-600">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>
    </>
  );
}
