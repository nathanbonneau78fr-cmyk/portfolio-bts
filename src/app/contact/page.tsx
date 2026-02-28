import { PageSection } from "@/components/PageSection";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Contact / Conclusion
          </h1>
        </div>
      </section>

      <PageSection title="Synthèse finale">
        <p>
          [Placeholder – Synthèse en quelques lignes : ce que ce portfolio
          démontre (maîtrise du bloc, diversité des réalisations, preuves
          apportées), et message pour le jury.]
        </p>
      </PageSection>

      <PageSection title="Coordonnées">
        <ul className="list-none space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Nom :</strong> [Placeholder – Prénom NOM]
          </li>
          <li>
            <strong>Formation :</strong> BTS SIO option SISR · [Établissement]
          </li>
          <li>
            <strong>Entreprise :</strong> RTE · [Service / direction si pertinent]
          </li>
          <li>
            <strong>E-mail :</strong> [Placeholder – votre.email@exemple.fr]
          </li>
        </ul>
      </PageSection>
    </>
  );
}
