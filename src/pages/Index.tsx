import { ArrowRight, Users, MapPin, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { JobCard } from "@/components/jobs/JobCard";
import { jobsData } from "@/data/jobs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-mining.jpg";

function Index() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  
  const featuredJobs = jobsData.slice(0, 3).map(job => ({
    ...job,
    isFavorite: favorites.has(job.id)
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

  const stats = [
    { icon: Users, label: "Métiers référencés", value: "50+", color: "text-primary" },
    { icon: MapPin, label: "Sites d'exploitation", value: "12", color: "text-secondary" },
    { icon: Award, label: "Certifications", value: "200+", color: "text-primary" },
    { icon: TrendingUp, label: "Taux d'emploi", value: "95%", color: "text-secondary" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <Header showSearch={false} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Projet minier Simandou" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 animate-float">
            SIMANDOU2040
            <span className="block text-2xl md:text-3xl font-normal text-white/90 mt-2">
              Carrière Professionnel
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez tous les métiers du plus grand projet minier de Guinée. 
            Explorez les opportunités, les formations requises et construisez votre carrière.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate('/metiers')}
              className="group"
            >
              Explorer les métiers
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="gold" 
              size="xl"
              onClick={() => navigate('/carte')}
            >
              Voir la carte interactive
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-smooth">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="font-heading text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Métiers populaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les métiers les plus recherchés dans le projet Simandou
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job) => (
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
              size="lg"
              onClick={() => navigate('/metiers')}
              className="group"
            >
              Voir tous les métiers
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Prêt à construire votre carrière ?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Explorez les opportunités du projet Simandou et trouvez le métier qui vous correspond
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => navigate('/metiers')}
            className="group shadow-float"
          >
            Commencer l'exploration
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
