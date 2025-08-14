// Import all individual job files
import { geologue } from "./geologue";
import { operateurPelle } from "./operateur-pelle";
import { ingenieurMinier } from "./ingenieur-minier";
import { ingenieurChimique } from "./ingenieur-chimique";
import { ingenieurElectrique } from "./ingenieur-electrique";
import { managerHSE } from "./manager-hse";

// Export types
export type { Job } from "./types";

// Export all jobs as an array
export const jobsData = [
  geologue,
  operateurPelle,
  ingenieurMinier,
  ingenieurChimique,
  ingenieurElectrique,
  managerHSE
];

// Export individual jobs (for direct access if needed)
export {
  geologue,
  operateurPelle,
  ingenieurMinier,
  ingenieurChimique,
  ingenieurElectrique,
  managerHSE
};

// Export categories and education levels
export const categories = [
  "Tous",
  "Exploration",
  "Extraction",
  "Traitement",
  "Transport",
  "Maintenance",
  "Sécurité",
  "Administration",
  "Environnement"
];

export const educationLevels = [
  "Tous niveaux",
  "Sans diplôme",
  "CAP/BEP",
  "Baccalauréat",
  "BTS/DUT",
  "Licence",
  "Master",
  "Doctorat"
];
