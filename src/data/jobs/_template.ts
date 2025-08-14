import { Job } from "./types";
// Import image if using local asset:
// import jobImage from "@/assets/job-image.jpg";

export const newJobId: Job = {
  id: "new-job-id",
  title: "Job Title",
  category: "Category", // See categories in index.ts
  location: "Work Location",
  education: "Master", // Available: "Sans diplôme", "CAP/BEP", "Baccalauréat", "BTS/DUT", "Licence", "Master", "Doctorat"
  image: "/path/to/image.jpg", // or use imported image variable
  description: "Detailed description of the job role, responsibilities, and what the position entails...",
  certificates: [
    "Required Certificate 1",
    "Required Certificate 2",
    // Add more certificates as needed
  ],
  prerequisites: {
    experience: "X-Y ans d'expérience en [domain]",
    age: "X-Y ans",
    languages: ["Français", "Anglais"], // Add required languages
    physicalRequirements: [
      "Physical requirement 1",
      "Physical requirement 2"
      // Add specific physical requirements
    ]
  },
  workplace: [
    "Workplace 1",
    "Workplace 2",
    "Workplace 3"
    // List all possible work environments
  ],
  dailyTasks: [
    "06:00 - Task description",
    "08:00 - Task description", 
    "10:00 - Task description",
    "14:00 - Task description",
    "16:00 - Task description"
    // Add typical daily schedule with tasks
  ],
  skills: {
    technical: [
      "Technical skill 1",
      "Technical skill 2",
      "Technical skill 3"
      // List required technical competencies
    ],
    soft: [
      "Soft skill 1",
      "Soft skill 2", 
      "Soft skill 3"
      // List required soft skills/personal qualities
    ]
  },
  tips: [
    "Career tip 1",
    "Career tip 2",
    "Career tip 3"
    // Add helpful advice for this career path
  ],
  alternativeNames: [
    "Alternative job title 1",
    "Alternative job title 2",
    "Alternative job title 3"
    // List other names this job might be known by
  ]
};
