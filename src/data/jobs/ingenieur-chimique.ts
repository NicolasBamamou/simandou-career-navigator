import { Job } from "./types";
import engineerImage from "@/assets/chemical engineer.png";

export const ingenieurChimique: Job = {
  id: "ingenieur-chimique",
  title: "Ingénieur.e Chimique",
  category: "Traitement",
  location: "Usine de traitement - Laboratoire",
  education: "Master",
  image: engineerImage,
  description: "Les ingénieurs et ingénieures chimiques travaillent en étroite collaboration avec les membres de l'équipe de production de l'usine. Ils analysent les procédés et proposent des améliorations au circuits de transformation du minerai, dans le but d'optimiser la quantité et la qualité de la récupération du minerai, la demande énergétique, la consommation de réactifs et la productivité de l'usine en général. Ils effectuent de la recherche sur des solutions, conçoivent des circuits expérimentaux, établissent des stratégies de contrôle et de remédiation et mettent des procédés, fournissent des services environnementaux comme le traitement de l'eau ou dans la gestion du parc à résidus. Ils jouent également un rôle important dans la phase de construction de l'usine, car ils dirigent le développement des installations et déterminent les caractéristiques techniques de la production.",
  certificates: [
    "Bac+5 en génie chimique",
    "Bac+5 en génie des matériaux et de la métallurgie",
    "Master ou spécialisation en traitement des minerais",
    "Permis de conduire véhicule léger"
  ],
  prerequisites: {
    experience: "2-10 ans d'expérience en génie chimique ou métallurgie",
    age: "25-50 ans",
    languages: ["Français", "Anglais technique", "Notions de Soussou/Peul local"],
    physicalRequirements: ["Mobilité en usine", "Travail en environnement industriel", "Port d'équipements de sécurité"]
  },
  workplace: [
    "Laboratoire d'analyse",
    "Usine de traitement",
    "Bureau d'études",
    "Zone de stockage des réactifs",
    "Installations de traitement des eaux"
  ],
  dailyTasks: [
    "07:00 - Analyse des paramètres de production",
    "08:30 - Contrôle qualité des procédés",
    "10:00 - Optimisation des circuits de traitement",
    "13:00 - Supervision des tests en laboratoire",
    "15:00 - Amélioration continue des procédés",
    "17:00 - Rédaction de rapports techniques"
  ],
  skills: {
    technical: [
      "Amélioration continue des méthodes de travail",
      "Analyse et résolution de problèmes",
      "Direction, gestion et motivation",
      "Gestion de projets",
      "Tests ou essais, contrôles des procédés",
      "Chimie analytique et industrielle",
      "Traitement des minerais",
      "Procédés métallurgiques"
    ],
    soft: [
      "Autonomie",
      "Capacité à synthétiser de l'information",
      "Créativité/originalité",
      "Entregent",
      "Esprit d'équipe et de collaboration",
      "Jugement et prise de décisions",
      "Pensée critique",
      "Résolution de problèmes",
      "Sens de l'initiative"
    ]
  },
  tips: [
    "Pour s'épanouir et exceller dans ses études et plans personnel et professionnel, il faut renforcer sa confiance en soi et ne pas avoir peur de se lancer. C'est important de faire preuve de curiosité et de ne pas hésiter à poser des questions pour mieux comprendre.",
    "Développer une solide compréhension des procédés métallurgiques spécifiques au fer et à la bauxite",
    "Se familiariser avec les normes environnementales de Guinée et internationales",
    "Maintenir une veille technologique sur les innovations en traitement des minerais",
    "Développer ses compétences en gestion de la sécurité industrielle"
  ],
  alternativeNames: [
    "Ingénieur.e chimiste",
    "Ingénieur.e de procédés",
    "Ingénieur.e en procédés industriels",
    "Métallurgiste",
    "Ingénieur.e en traitement des minerais",
    "Ingénieur.e de production"
  ]
};
