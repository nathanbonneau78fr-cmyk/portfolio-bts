import { PageSection } from "@/components/PageSection";

export default function DeveloppementProPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Développement professionnel
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Veille technologique, autoformation et montée en compétences
          </p>
        </div>
      </section>

      <PageSection title="Veille technologique">
        <p>
          [Placeholder – Décrivez vos sources de veille (sites, newsletters,
          communautés), les sujets suivis (ex. COSMOS, infrastructures, sécurité,
          cloud) et la fréquence de votre veille.]
        </p>
      </PageSection>

      <PageSection title="Autoformation">
        <p>
          [Placeholder – Formations en ligne, tutoriels, certifications ou
          parcours suivis dans le cadre de votre alternance ou en complément.]
        </p>
      </PageSection>

      <PageSection title="Montée en compétences">
        <p>
          [Placeholder – Évolutions concrètes : nouvelles technologies ou outils
          maîtrisés, projets qui vous ont fait progresser, objectifs pour la
          suite.]
        </p>
      </PageSection>
    </>
  );
}
