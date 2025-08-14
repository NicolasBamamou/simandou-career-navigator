# Jobs Data Structure

This folder contains the modular job data structure for the Simandou Career Navigator.

## Structure

```
src/data/jobs/
├── types.ts                 # Job interface definition
├── index.ts                 # Main export file
├── geologue.ts             # Geologist job data
├── operateur-pelle.ts      # Excavator operator job data
├── ingenieur-minier.ts     # Mining engineer job data
├── manager-hse.ts          # HSE manager job data
└── README.md               # This file
```

## How to Add a New Job

### 1. Create a New Job File

Create a new file in this folder following the naming convention: `job-id.ts`

Example: `metallurgiste.ts`

```typescript
import { Job } from "./types";
import metallurgisteImage from "@/assets/metallurgiste.jpg"; // If using local image

export const metallurgiste: Job = {
  id: "metallurgiste",
  title: "Métallurgiste",
  category: "Traitement",
  location: "Usine de traitement - Laboratoire",
  education: "Master",
  image: metallurgisteImage, // or use external URL
  description: "Description complète du métier...",
  certificates: [
    "Master en Métallurgie",
    // ... other certificates
  ],
  prerequisites: {
    experience: "3-7 ans d'expérience",
    age: "25-50 ans",
    languages: ["Français", "Anglais"],
    physicalRequirements: ["Travail en laboratoire", "Manipulation produits chimiques"]
  },
  workplace: ["Laboratoire", "Usine de traitement", "Bureau études"],
  dailyTasks: [
    "08:00 - Analyse échantillons minerai",
    "10:00 - Contrôle procédés extraction",
    // ... other tasks
  ],
  skills: {
    technical: ["Analyse chimique", "Procédés métallurgiques", "..."],
    soft: ["Rigueur", "Analyse", "..."]
  },
  tips: [
    "Conseil 1",
    "Conseil 2",
    // ...
  ],
  alternativeNames: ["Ingénieur métallurgie", "Spécialiste traitement", "..."]
};
```

### 2. Add to Index File

In `index.ts`, add your new job:

```typescript
// 1. Import the new job
import { metallurgiste } from "./metallurgiste";

// 2. Add to jobsData array
export const jobsData = [
  geologue,
  operateurPelle,
  ingenieurMinier,
  managerHSE,
  metallurgiste, // Add here
];

// 3. Add to individual exports
export {
  geologue,
  operateurPelle,
  ingenieurMinier,
  managerHSE,
  metallurgiste, // Add here
};
```

### 3. Add Image (if local)

If using a local image:
1. Add the image file to `src/assets/`
2. Import it in your job file
3. Use the imported variable as the `image` value

### 4. Update Categories (if needed)

If your job uses a new category, add it to the `categories` array in `index.ts`:

```typescript
export const categories = [
  "Tous",
  "Exploration",
  "Extraction",
  "Traitement",
  "Transport",
  "Maintenance",
  "Sécurité",
  "Administration",
  "Environnement",
  "Nouvelle Catégorie", // Add here if needed
];
```

## Job Interface

See `types.ts` for the complete `Job` interface that all job objects must implement.

### Required Fields

- `id`: Unique identifier (kebab-case)
- `title`: Job title
- `category`: Job category
- `location`: Work location
- `education`: Required education level (see available levels below)
- `image`: Image URL or imported asset
- `description`: Detailed job description
- `certificates`: Array of required certificates/qualifications
- `prerequisites`: Object with experience, age, languages, physical requirements
- `workplace`: Array of work locations/environments
- `dailyTasks`: Array of daily tasks with time stamps
- `skills`: Object with technical and soft skills arrays
- `tips`: Array of career tips
- `alternativeNames`: Array of alternative job titles

### Available Education Levels

- `"Sans diplôme"` - No formal education required
- `"CAP/BEP"` - Vocational certificate level
- `"Baccalauréat"` - High school diploma
- `"BTS/DUT"` - 2-year technical degree
- `"Licence"` - Bachelor's degree (3 years)
- `"Master"` - Master's degree (5 years) - Use this for engineering positions
- `"Doctorat"` - Doctorate degree

### Available Categories

- `"Exploration"` - Geological surveys, prospecting
- `"Extraction"` - Mining operations, equipment operation
- `"Traitement"` - Ore processing, metallurgy
- `"Transport"` - Logistics, materials handling
- `"Maintenance"` - Equipment maintenance, repairs
- `"Sécurité"` - Safety, health, environment (HSE)
- `"Administration"` - Management, HR, finance
- `"Environnement"` - Environmental compliance, sustainability

## Benefits of This Structure

✅ **Modular**: Each job is in its own file
✅ **Maintainable**: Easy to find and edit specific jobs
✅ **Scalable**: Simple to add new jobs
✅ **Type Safe**: TypeScript ensures all jobs follow the same structure
✅ **Reusable**: Individual jobs can be imported separately if needed
✅ **Clean**: Main jobs.ts file remains small and focused
