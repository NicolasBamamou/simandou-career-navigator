export interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  education: string;
  image: string;
  description: string;
  certificates: string[];
  prerequisites: {
    experience: string;
    age: string;
    languages: string[];
    physicalRequirements: string[];
  };
  workplace: string[];
  dailyTasks: string[];
  skills: {
    technical: string[];
    soft: string[];
  };
  tips: string[];
  alternativeNames: string[];
  isFavorite?: boolean;
}

export const jobsData: Job[] = [
  {
    id: "geologue",
    title: "Géologue",
    category: "Exploration",
    location: "Mine à ciel ouvert - Secteur A",
    education: "Master",
    image: "/src/assets/engineer.jpg",
    description: "Analyse la composition géologique du site minier, identifie les gisements de minerai et optimise les méthodes d'extraction pour maximiser le rendement.",
    certificates: ["Master en Géologie", "Certification HSE", "Permis de conduire poids lourds"],
    prerequisites: {
      experience: "2-5 ans d'expérience en géologie minière",
      age: "25-55 ans",
      languages: ["Français", "Anglais technique"],
      physicalRequirements: ["Aptitude au travail en extérieur", "Résistance physique", "Absence de vertige"]
    },
    workplace: ["Laboratoire géologique", "Terrain de forage", "Bureau d'études", "Site d'extraction"],
    dailyTasks: [
      "06:00 - Briefing sécurité équipe",
      "07:00 - Analyse échantillons terrain",
      "10:00 - Cartographie géologique",
      "14:00 - Rédaction rapports techniques",
      "16:00 - Coordination avec équipe forage"
    ],
    skills: {
      technical: ["Analyse pétrographique", "Cartographie géologique", "Logiciels SIG", "Échantillonnage"],
      soft: ["Rigueur scientifique", "Travail en équipe", "Communication technique", "Adaptabilité"]
    },
    tips: [
      "Toujours porter les EPI lors des sorties terrain",
      "Maintenir une veille technologique sur les nouveaux outils d'analyse",
      "Développer un réseau professionnel dans le secteur minier",
      "Se former aux réglementations environnementales locales"
    ],
    alternativeNames: ["Géologue minier", "Géologue d'exploration", "Géoscientifique", "Expert géologique"]
  },
  {
    id: "operateur-pelle",
    title: "Opérateur de Pelle 100t",
    category: "Extraction",
    location: "Mine à ciel ouvert - Pit A",
    education: "CAP/BEP",
    image: "/src/assets/operator.jpg",
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
  },
  {
    id: "manager-hse",
    title: "Manager HSE",
    category: "Sécurité",
    location: "Bureau central - Tous secteurs",
    education: "Master",
    image: "/src/assets/safety.jpg",
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
  }
];

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
  "Ingénieur",
  "Doctorat"
];