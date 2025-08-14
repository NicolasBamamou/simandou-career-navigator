import { Job } from "./types";
import engineerImage from "@/assets/electrical engeneer.png";

export const ingenieurElectrique: Job = {
  id: "ingenieur-electrique",
  title: "Ingénieur.e Électrique",
  category: "Maintenance",
  location: "Sous-stations - Installations industrielles",
  education: "Master",
  image: engineerImage,
  description: "Les ingénieurs et ingénieures électriques sont responsables de la conception et du développement de l'ensemble du réseau électrique de la mine. Ils assurent la mise en marche et le fonctionnement des équipements industriels en sélectionnant l'instrumentation nécessaire pour les systèmes d'alimentation électrique et de distribution. Ils supervisent la programmation, la communication dans les automates programmables industriels. Ils coordonnent les travaux d'entretien et fixent des périodes d'arrêt préventif afin de faire l'inspection des différents systèmes, dans le but de diagnostiquer les défaillances et d'apporter des ajustements. Ils veillent également à l'intégration de nouveaux équipements automatisés ou de nouvelles installations permettant d'optimiser le rendement, la durabilité et la sécurité des opérations. De plus, ils assurent la conformité des réseaux électrique et électronique aux règlements propre à ce champ d'expertise. Ils peuvent également apporter une assistance technique aux secteurs des opérations, de l'entretien et de la construction.",
  certificates: [
    "Baccalauréat en génie électrique (5 années)",
    "Baccalauréat en génie de la production automatisée",
    "Master en systèmes électriques industriels",
    "Certification en automates programmables (PLC)",
    "Formation modulaire du travailleur minier (FMTM) pour les mines souterraines",
    "Permis général d'explosifs (environnements à risque)",
    "Habilitation électrique haute tension",
    "Permis de conduire véhicule léger"
  ],
  prerequisites: {
    experience: "3-10 ans d'expérience en génie électrique industriel",
    age: "25-50 ans",
    languages: ["Français technique", "Anglais professionnel", "Notions de langues locales"],
    physicalRequirements: [
      "Travail en hauteur (pylônes, transformateurs)",
      "Mobilité dans installations industrielles",
      "Port d'équipements de sécurité électrique",
      "Travail en environnement haute tension"
    ]
  },
  workplace: [
    "Sous-stations électriques",
    "Salles de contrôle automatisé",
    "Ateliers de maintenance électrique",
    "Sites d'installation des équipements",
    "Bureaux d'ingénierie et de conception",
    "Installations de distribution électrique",
    "Centres de commande à distance"
  ],
  dailyTasks: [
    "07:00 - Inspection des systèmes électriques critiques",
    "08:30 - Analyse des données de performance énergétique",
    "10:00 - Programmation et diagnostic des automates",
    "11:30 - Coordination avec les équipes de maintenance",
    "13:00 - Conception et modification des schémas électriques",
    "15:00 - Tests et mise en service d'équipements",
    "16:30 - Optimisation des réseaux de distribution",
    "17:30 - Planification des arrêts programmés"
  ],
  skills: {
    technical: [
      "Amélioration continue des méthodes de travail",
      "Analyse et résolution de problèmes électriques",
      "CAO électrique (AutoCAD Electrical, EPLAN)",
      "Innovation technologique et R&D",
      "Inspection, évaluation et diagnostic",
      "Lecture de plans et schémas électriques",
      "Programmation d'automates (Siemens, Allen-Bradley)",
      "Systèmes de contrôle SCADA/HMI",
      "Réseaux industriels (Profinet, Ethernet IP)",
      "Variateurs de fréquence et moteurs industriels",
      "Systèmes de protection électrique",
      "Analyse de qualité de l'énergie",
      "Maintenance prédictive par thermographie",
      "Conformité aux normes IEC et IEEE"
    ],
    soft: [
      "Autonomie et initiative",
      "Capacité à synthétiser l'information technique",
      "Esprit axé sur les résultats",
      "Esprit d'équipe et de collaboration",
      "Gestion du temps et des priorités",
      "Minutie et précision",
      "Résolution de problèmes complexes",
      "Sens de l'organisation et planification",
      "Souci du travail bien fait",
      "Adaptabilité aux nouvelles technologies",
      "Leadership technique",
      "Communication technique claire"
    ]
  },
  tips: [
    "L'industrie minière fonctionne 24 heures sur 24, 7 jours sur 7. Ce rythme entraîne certaines exigences pour les professionnels. Il faut apprendre à se libérer de la pression pour être en mesure de bien canaliser son énergie et en tirer le maximum pour l'entreprise et pour soi-même, cela permet également de garder en tête les règles de santé et sécurité mise en place sur le lieu de travail.",
    "Maîtriser les logiciels de CAO électrique est essentiel pour la conception moderne",
    "Développer une expertise en systèmes d'automatisation industrielle (Industry 4.0)",
    "Se tenir informé des évolutions technologiques en électronique de puissance",
    "Comprendre les enjeux énergétiques et d'efficacité des installations minières",
    "Développer des compétences en cyber-sécurité pour les systèmes industriels",
    "Acquérir une certification en sécurité électrique et travail en hauteur",
    "Maîtriser les protocoles de communication industriels modernes"
  ],
  alternativeNames: [
    "Fiabiliste électrique",
    "Ingénieur.e en automatisation",
    "Ingénieur.e en instrumentation et contrôle",
    "Ingénieur.e en production automatisée",
    "Spécialiste en systèmes électriques miniers",
    "Ingénieur.e en électronique industrielle",
    "Responsable maintenance électrique",
    "Ingénieur.e en réseaux électriques"
  ]
};
