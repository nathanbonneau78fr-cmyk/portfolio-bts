import Link from "next/link";
import { PageSection } from "@/components/PageSection";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/30">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-3xl">
            Portfolio E4 · BTS SIO option SISR
          </h1>
          <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
            Support et mise à disposition de services informatiques
          </p>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            [Prénom NOM] · Alternance RTE
          </p>
        </div>
      </section>

      <PageSection title="Objectif de l'épreuve E4">
        <p>
          Ce portfolio présente mon parcours de professionnalisation en
          alternance chez <strong>RTE</strong> (Réseau de Transport
          d&apos;Électricité). Il vise à démontrer la maîtrise du bloc de
          compétences « Support et mise à disposition de services
          informatiques » à travers des réalisations concrètes et des preuves
          documentées.
        </p>
        <p className="mt-4">
          Vous y trouverez : mon profil et le contexte de l&apos;entreprise, les
          six compétences du bloc, les réalisations professionnelles avec les
          preuves associées, un tableau de synthèse et une section dédiée au
          développement professionnel.
        </p>
      </PageSection>

      <PageSection title="Accès rapide">
        <ul className="grid gap-2 sm:grid-cols-2">
          <li>
            <Link
              href="/a-propos"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/competences"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              href="/realisations"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Réalisations et preuves
            </Link>
          </li>
          <li>
            <Link
              href="/synthese"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Tableau de synthèse
            </Link>
          </li>
          <li>
            <Link
              href="/developpement-pro"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Développement professionnel
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </PageSection>
    </>
  );
}
