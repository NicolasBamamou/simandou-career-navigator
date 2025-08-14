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
