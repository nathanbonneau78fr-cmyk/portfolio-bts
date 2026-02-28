/**
 * Types du portfolio E4 BTS SIO SISR
 * Bloc : Support et mise à disposition de services informatiques
 */

/** Identifiant des 6 compétences du bloc */
export type CompetenceId =
  | "patrimoine"
  | "incidents"
  | "presence-en-ligne"
  | "mode-projet"
  | "service-utilisateurs"
  | "dev-pro";

/** Preuve associée à une réalisation (document PDF) */
export interface Preuve {
  /** Libellé affiché (ex. "Rapport d'installation") */
  label: string;
  /** Chemin vers le PDF dans /public/documents/ */
  href: string;
  /** Optionnel : taille ou description pour l'accessibilité */
  description?: string;
}

/** Une réalisation professionnelle (mission / projet) */
export interface Realisation {
  /** Identifiant unique pour la navigation et le tableau de synthèse */
  id: string;
  /** Titre de la mission */
  titre: string;
  /** Contexte (entreprise, période, objectif) */
  contexte: string;
  /** Tâches réalisées (liste) */
  tachesRealisees: string[];
  /** Compétences mobilisées (référence aux 6 compétences) */
  competencesMobilisees: CompetenceId[];
  /** Preuves PDF rattachées à cette réalisation */
  preuves: Preuve[];
}

/** Définition d'une compétence du bloc */
export interface Competence {
  id: CompetenceId;
  titre: string;
  description: string;
  /** Exemples ou indicateurs pour le jury */
  indicateurs?: string[];
}
