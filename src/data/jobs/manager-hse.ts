import { Job } from "./types";

export const managerHSE: Job = {
  id: "manager-hse",
  title: "Manager HSE",
  category: "Sécurité",
  location: "Bureau central - Tous secteurs",
  education: "Master",
  image: "/simandou-career-navigator/images/HSE.png",
  description: "Supervise et coordonne toutes les activités liées à l'hygiène, la sécurité et l'environnement sur l'ensemble du site minier pour garantir la conformité réglementaire.",
  certificates: ["Master HSE/QHSE", "SAMTRAC", "Certification ISO 45001", "Formation gestion crise"],
  prerequisites: {
    experience: "5-10 ans en management HSE",
    age: "30-55 ans",
    languages: ["Français", "Anglais professionnel"],
    physicalRequirements: ["Mobilité sur tout le site", "Résistance stress", "Disponibilité 24h/24"]
  },
  workplace: ["Bureau HSE", "Tous secteurs opérationnels", "Salle de crise", "Laboratoire environnemental"],
  dailyTasks: [
    "07:00 - Revue incidents 24h",
    "08:00 - Visite terrain sécuritaire",
    "10:00 - Réunion équipe HSE",
    "14:00 - Audit conformité réglementaire",
    "16:00 - Formation équipes",
    "18:00 - Rapport direction"
  ],
  skills: {
    technical: ["Réglementation minière", "Analyse risques", "Audit HSE", "Gestion environnementale"],
    soft: ["Leadership", "Communication persuasive", "Gestion stress", "Pédagogie"]
  },
  tips: [
    "Maintenir une présence terrain visible et régulière",
    "Développer une culture sécurité participative",
    "Tenir à jour la veille réglementaire",
    "Créer des partenariats avec autorités locales"
  ],
  alternativeNames: ["Responsable HSE", "Directeur sécurité", "Manager QHSE", "Coordinateur sécurité"]
};
