// Re-export everything from the jobs folder for backward compatibility
export { 
  jobsData, 
  categories, 
  educationLevels,
  geologue,
  operateurPelle,
  ingenieurMinier,
  managerHSE
} from "./jobs/index";
export type { Job } from "./jobs/index";