import type { Competence } from "@/types";

/**
 * Les 6 compétences du bloc "Support et mise à disposition de services informatiques"
 * BTS SIO option SISR – à personnaliser si besoin
 */
export const competences: Competence[] = [
  {
    id: "patrimoine",
    titre: "Gérer le patrimoine informatique",
    description:
      "Recenser et identifier les ressources matérielles et logicielles, assurer leur suivi (inventaire, étiquetage, lifecycle), et contribuer à leur rationalisation et leur sécurisation.",
    indicateurs: [
      "Inventaire du matériel et des logiciels",
      "Étiquetage et traçabilité",
      "Gestion des licences et des contrats",
    ],
  },
  {
    id: "incidents",
    titre: "Répondre aux incidents et aux demandes d'assistance / d'évolution",
    description:
      "Traiter les incidents et les demandes d'assistance ou d'évolution des utilisateurs, diagnostiquer les dysfonctionnements, et proposer des solutions ou des évolutions adaptées.",
    indicateurs: [
      "Traitement des tickets et demandes",
      "Diagnostic et résolution d'incidents",
      "Documentation des solutions",
    ],
  },
  {
    id: "presence-en-ligne",
    titre: "Développer la présence en ligne de l'organisation",
    description:
      "Participer à la mise en place et à l'évolution de la présence en ligne (sites, outils collaboratifs, communication) en respectant les normes et la stratégie de l'organisation.",
    indicateurs: [
      "Sites web, intranet, outils collaboratifs",
      "Communication numérique",
      "Veille et bonnes pratiques",
    ],
  },
  {
    id: "mode-projet",
    titre: "Travailler en mode projet",
    description:
      "Contribuer à un projet informatique en respectant les délais, les livrables et la coordination avec les acteurs (planning, suivi, compte-rendu).",
    indicateurs: [
      "Respect des jalons et livrables",
      "Coordination avec les équipes",
      "Compte-rendu et reporting",
    ],
  },
  {
    id: "service-utilisateurs",
    titre: "Mettre à disposition un service informatique aux utilisateurs",
    description:
      "Assurer la disponibilité, la qualité et l'évolution des services informatiques (déploiement, formation, support, documentation) pour répondre aux besoins des utilisateurs.",
    indicateurs: [
      "Déploiement et mise à jour des postes",
      "Formation et accompagnement des utilisateurs",
      "Documentation et procédures",
    ],
  },
  {
    id: "dev-pro",
    titre: "Organiser son développement professionnel",
    description:
      "Mettre en œuvre une veille technologique, se former en continu et faire évoluer ses compétences en lien avec les besoins du métier et de l'organisation.",
    indicateurs: [
      "Veille technologique (outils, méthodes)",
      "Autoformation et montée en compétences",
      "Capitalisation et partage des connaissances",
    ],
  },
];
