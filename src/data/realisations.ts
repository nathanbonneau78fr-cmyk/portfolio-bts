import type { Realisation } from "@/types";

/**
 * Réalisations professionnelles – exemples pour un alternant BTS SIO SISR chez RTE.
 * À remplacer par vos vraies missions et preuves (PDF dans /public/documents/).
 */
export const realisations: Realisation[] = [
  {
    id: "mise-a-jour-windows-11",
    titre: "Mise à jour Windows 11 23H2 des postes de dispatching et VIP",
    contexte:
      "Dans le cadre de la modernisation du parc RTE, mise à jour planifiée des postes de dispatching et des postes VIP vers Windows 11 23H2, en respectant les plages de maintenance et la continuité du service.",
    tachesRealisees: [
      "Préparation des postes (vérification compatibilité, sauvegardes)",
      "Planification des créneaux de mise à jour avec les utilisateurs",
      "Exécution des mises à jour et vérification post-déploiement",
      "Documentation des éventuels retours d’expérience et incidents",
    ],
    competencesMobilisees: ["patrimoine", "service-utilisateurs", "incidents"],
    preuves: [
      {
        label: "Procédure de mise à jour (PDF)",
        href: "/documents/placeholder-procedure-windows11.pdf",
        description: "Document de procédure – à remplacer par votre PDF",
      },
    ],
  },
  {
    id: "formation-accompagnement-si",
    titre: "Former et accompagner les utilisateurs dans leur montée en compétences du SI",
    contexte:
      "Accompagnement des équipes utilisatrices sur les nouveaux outils et processus du système d’information, dans le cadre des évolutions du SI RTE.",
    tachesRealisees: [
      "Identification des besoins de formation avec les responsables",
      "Préparation de supports et de démonstrations",
      "Animation de sessions d’accompagnement ou de formation",
      "Suivi des questions et remontée des besoins d’évolution",
    ],
    competencesMobilisees: ["service-utilisateurs", "incidents", "dev-pro"],
    preuves: [
      {
        label: "Support de formation (PDF)",
        href: "/documents/placeholder-formation.pdf",
      },
    ],
  },
  {
    id: "amelioration-diaporama-alternants",
    titre: "Participation à l'amélioration du diaporama de présentation pour les alternants RTE",
    contexte:
      "Projet interne RTE visant à améliorer le support de présentation et la FAQ destinés aux alternants, pour faciliter leur intégration et l’accès à l’information.",
    tachesRealisees: [
      "Analyse du diaporama existant et du questionnaire FAQ",
      "Proposition d’évolutions (structure, contenu, visuels)",
      "Mise à jour des supports et relecture",
      "Tests avec des alternants et ajustements",
    ],
    competencesMobilisees: ["mode-projet", "presence-en-ligne", "service-utilisateurs"],
    preuves: [
      {
        label: "Synthèse des modifications (PDF)",
        href: "/documents/placeholder-diaporama.pdf",
      },
    ],
  },
  {
    id: "inventaire-etiquetage",
    titre: "Inventaire du matériel et étiquetage",
    contexte:
      "Mission de recensement et d’étiquetage du matériel informatique sur un périmètre donné (bureau, site ou parc), pour mettre à jour l’inventaire et faciliter la traçabilité.",
    tachesRealisees: [
      "Recensement physique des équipements (postes, écrans, périphériques)",
      "Vérification et mise à jour de l’inventaire dans l’outil de gestion",
      "Pose d’étiquettes et suivi des emplacements",
      "Rapport ou mise à jour de la base d’inventaire",
    ],
    competencesMobilisees: ["patrimoine", "mode-projet"],
    preuves: [
      {
        label: "Rapport d’inventaire (PDF)",
        href: "/documents/placeholder-inventaire.pdf",
      },
    ],
  },
  {
    id: "serveur-windows-ucarp",
    titre: "Installation et administration d'un serveur Windows Server (services de base, rôles, maintenance)",
    contexte:
      "Réalisation en centre de formation : mise en place d’un serveur Windows Server avec services de base, rôles, et mise en œuvre de la haute disponibilité avec UCARP.",
    tachesRealisees: [
      "Installation et configuration de Windows Server",
      "Mise en place des rôles et services (AD, DNS, fichiers, etc.)",
      "Configuration de la haute disponibilité avec UCARP",
      "Maintenance et documentation (rapports, procédures)",
    ],
    competencesMobilisees: ["patrimoine", "service-utilisateurs", "mode-projet"],
    preuves: [
      {
        label: "Rapport BTS SIO UCARP (PDF)",
        href: "/documents/rapport_bts_sio_ucarp.pdf",
      },
      {
        label: "Haute disponibilité avec UCARP (PDF)",
        href: "/documents/ha_avec_ucarp.pdf",
      },
    ],
  },
  {
    id: "veille-cosmos",
    titre: "Mission veille sur COSMOS",
    contexte:
      "Veille technologique et organisationnelle sur l’écosystème COSMOS (ou outil équivalent selon votre contexte RTE), pour alimenter la stratégie et les projets de l’équipe.",
    tachesRealisees: [
      "Identification des sources (sites, communautés, docs officielles)",
      "Suivi régulier des évolutions et actualités",
      "Synthèse et restitution (notes, présentation ou rapport)",
      "Proposition d’actions ou d’évolutions si pertinent",
    ],
    competencesMobilisees: ["dev-pro", "presence-en-ligne"],
    preuves: [
      {
        label: "Synthèse de veille (PDF)",
        href: "/documents/placeholder-veille-cosmos.pdf",
      },
    ],
  },
];
