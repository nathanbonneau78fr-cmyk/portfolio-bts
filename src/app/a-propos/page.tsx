import { PageSection } from "@/components/PageSection";

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            À propos
          </h1>
        </div>
      </section>

      <PageSection title="Profil">
        <p>
          [Placeholder – Présentez-vous en quelques lignes : formation, option
          SISR, année de BTS, établissement, et objectif professionnel.]
        </p>
      </PageSection>

      <PageSection title="Parcours BTS SIO option SISR">
        <p>
          BTS Services Informatiques aux Organisations, option Solutions
          d&apos;Infrastructure, Systèmes et Réseaux. Formation en alternance
          permettant de conjuguer enseignements théoriques et mise en situation
          professionnelle en entreprise.
        </p>
        <p className="mt-3">
          [Placeholder – Indiquez votre lycée / CFA, rythme d&apos;alternance,
          période concernée.]
        </p>
      </PageSection>

      <PageSection title="Alternance chez RTE">
        <p>
          RTE (Réseau de Transport d&apos;Électricité) est le gestionnaire du
          réseau de transport d&apos;électricité haute tension en France. L&apos;entreprise
          assure la sécurité, la qualité et l&apos;équilibre de l&apos;alimentation
          électrique et accompagne la transition énergétique.
        </p>
        <p className="mt-3">
          [Placeholder – Décrivez votre service ou direction, vos missions
          principales, le contexte technique (infrastructure, parc, outils).]
        </p>
      </PageSection>

      <PageSection title="Contexte de l'entreprise">
        <p>
          [Placeholder – Contexte métier et informatique : taille du SI, enjeux
          (disponibilité, sécurité, évolution), rôle de l&apos;équipe dans
          laquelle vous êtes intégré.]
        </p>
      </PageSection>
    </>
  );
}
