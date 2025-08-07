import { useState } from "react";
import { Heart, Search, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { JobCard } from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { jobsData } from "@/data/jobs";
import { useNavigate } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set(["geologue", "operateur-pelle"]));
  const navigate = useNavigate();

  const favoriteJobs = jobsData
    .filter(job => favorites.has(job.id))
    .map(job => ({
      ...job,
      isFavorite: true
    }));

  const handleFavoriteToggle = (jobId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(jobId)) {
        newFavorites.delete(jobId);
      } else {
        newFavorites.add(jobId);
      }
      return newFavorites;
    });
  };

  const handleJobClick = (jobId: string) => {
    navigate(`/metiers/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <Header showSearch={false} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
              Mes métiers favoris
            </h1>
            <p className="text-muted-foreground">
              Retrouvez ici tous les métiers que vous avez sauvegardés
            </p>
          </div>

          {favoriteJobs.length > 0 ? (
            <>
              <div className="text-sm text-muted-foreground text-center">
                {favoriteJobs.length} métier{favoriteJobs.length > 1 ? 's' : ''} en favoris
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onFavoriteToggle={handleFavoriteToggle}
                    onClick={handleJobClick}
                  />
                ))}
              </div>

              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/metiers')}
                  className="group"
                >
                  Découvrir d'autres métiers
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                Aucun favori pour l'instant
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Explorez notre catalogue de métiers et ajoutez vos préférés en cliquant sur le cœur
              </p>
              <Button 
                onClick={() => navigate('/metiers')}
                className="group"
              >
                Explorer les métiers
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}