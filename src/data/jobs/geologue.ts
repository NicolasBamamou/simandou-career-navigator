import { Job } from "./types";

export const geologue: Job = {
  id: "geologue",
  title: "Géologue",
  category: "Exploration",
  location: "Mine à ciel ouvert - Secteur A",
  education: "Master",
  image: "/simandou-career-navigator/images/Geologue.png",
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
};
