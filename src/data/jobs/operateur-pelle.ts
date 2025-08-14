import { Job } from "./types";

export const operateurPelle: Job = {
  id: "operateur-pelle",
  title: "Opérateur de Pelle 100t",
  category: "Extraction",
  location: "Mine à ciel ouvert - Pit A",
  education: "CAP/BEP",
  image: "/simandou-career-navigator/images/operateur pelle.png",
  description: "Conduit et manœuvre des pelles hydrauliques de grande capacité pour l'extraction de minerai et le déblayage des stériles dans les zones d'exploitation.",
  certificates: ["CACES R482", "Certificat de conduite d'engins", "Formation sécurité minière"],
  prerequisites: {
    experience: "3-8 ans sur engins lourds",
    age: "21-50 ans",
    languages: ["Français", "Notions d'anglais"],
    physicalRequirements: ["Excellente coordination", "Acuité visuelle", "Résistance aux vibrations"]
  },
  workplace: ["Fosse d'extraction", "Zone de stockage", "Aire de maintenance", "Poste de contrôle"],
  dailyTasks: [
    "05:30 - Contrôle pré-utilisation engin",
    "06:00 - Prise de poste et briefing",
    "06:30 - Début extraction minerai",
    "12:00 - Pause et maintenance préventive",
    "13:00 - Reprise extraction après-midi",
    "17:00 - Nettoyage et parking engin"
  ],
  skills: {
    technical: ["Conduite engins lourds", "Mécanique de base", "Lecture plans extraction", "Maintenance préventive"],
    soft: ["Concentration soutenue", "Respect consignes", "Précision gestuelle", "Responsabilité"]
  },
  tips: [
    "Effectuer systématiquement la check-list avant démarrage",
    "Communiquer régulièrement avec le dispatcher",
    "Surveiller constamment l'environnement de travail",
    "Signaler immédiatement toute anomalie technique"
  ],
  alternativeNames: ["Conducteur pelle hydraulique", "Machiniste", "Opérateur engins extraction", "Pelleur"]
};
