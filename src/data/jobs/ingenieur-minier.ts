import { Job } from "./types";
import engineerImage from "@/assets/ingenieur minier.jpeg";

export const ingenieurMinier: Job = {
  id: "ingenieur-minier",
  title: "Ingénieur Minier",
  category: "Extraction",
  location: "Mine à ciel ouvert - Bureau technique",
  education: "Master",
  image: engineerImage,
  description: "Les ingénieurs et ingénieures miniers sont sollicités dans l'ensemble des phases de la vie d'une mine. Aux phases d'exploration et de construction, ils planifient, organisent et supervisent les travaux de développement et de contrôle de terrain. Ils conçoivent les plans des infrastructures permanentes et temporaires ou de limite d'exploitation. Ils sont responsables de la planification à court et à long terme. Ils évaluent la durée de vie des mines, mesurent les objectifs, préparent des plans et des études et supervisent les différents travaux miniers et en assurent le suivi.",
  certificates: [
    "Baccalauréat en génie des mines (4½-5 années)",
    "Permis général d'explosifs",
    "Formation modulaire du travailleur minier (FMTM) pour les mines souterraines",
    "Permis de conduire de la classe 5"
  ],
  prerequisites: {
    experience: "2-8 ans d'expérience en ingénierie minière",
    age: "25-55 ans",
    languages: ["Français", "Anglais professionnel"],
    physicalRequirements: ["Mobilité sur site", "Travail en altitude", "Résistance physique pour terrain accidenté"]
  },
  workplace: [
    "Bureau d'études techniques",
    "Site d'exploitation",
    "Laboratoire de contrôle",
    "Salle de planification",
    "Terrain d'extraction"
  ],
  dailyTasks: [
    "07:00 - Analyse des rapports de production",
    "08:30 - Visite des zones d'exploitation",
    "10:00 - Planification des travaux d'extraction",
    "13:00 - Conception et modification des plans",
    "15:00 - Supervision des équipes terrain",
    "17:00 - Optimisation des méthodes d'extraction"
  ],
  skills: {
    technical: [
      "Planification minière",
      "Conception des excavations",
      "Choix des méthodes d'extraction et à la séquence",
      "Mécanique des roches",
      "Forage et sautage",
      "Logiciels de modélisation 3D",
      "Analyse et résolution de problèmes",
      "Gestion de projets"
    ],
    soft: [
      "Autonomie",
      "Responsabilité",
      "Leadership",
      "Rigueur/souci du détail",
      "Capacité d'adaptation",
      "Sens de l'initiative",
      "Esprit d'équipe et de collaboration",
      "Sens de l'organisation/de la planification",
      "Gestion du temps et des priorités",
      "Travail consciencieux"
    ]
  },
  tips: [
    "Pour bien cerner ses intérêts et choisir le bon programme d'études, il est important de faire preuve de curiosité, de se poser des questions et de faire des recherches.",
    "Pour en apprendre davantage, on peut rencontrer des professeurs et professionnels du domaine des cours dans un programme précis ou des gens qui travaillent dans ce domaine s'il leur reste du temps d'explorer.",
    "Maintenir une veille technologique sur les innovations en extraction minière",
    "Développer ses compétences en gestion d'équipe et communication",
    "Se former continuellement aux nouvelles réglementations de sécurité"
  ],
  alternativeNames: [
    "Ingénieur en contrôle de terrain/mécanique des roches",
    "Ingénieur en exploration minière", 
    "Ingénieur en production minière",
    "Ingénieur de projets miniers",
    "Ingénieur minier/ière en ventilation",
    "Planificateur/trice minier/ière"
  ]
};
