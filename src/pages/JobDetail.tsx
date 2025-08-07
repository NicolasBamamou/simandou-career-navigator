import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Clock, GraduationCap, Award, Users, Lightbulb, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { jobsData } from "@/data/jobs";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const job = jobsData.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Métier non trouvé</h1>
          <Button onClick={() => navigate('/metiers')}>
            Retour aux métiers
          </Button>
        </div>
      </div>
    );
  }

  const IconSection = ({ icon: Icon, title, children, className = "" }: {
    icon: any;
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </Card>
  );

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/metiers')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              className={cn(
                "transition-spring",
                isFavorite ? "text-red-500 scale-110" : "text-muted-foreground"
              )}
            >
              <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
            </Button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="relative mb-8 rounded-xl overflow-hidden">
          <div className="aspect-video md:aspect-[2/1] relative">
            <img 
              src={job.image} 
              alt={job.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-card" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge variant="secondary" className="mb-4">
                {job.education}
              </Badge>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{job.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <Card className="p-6 mb-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {job.description}
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Certificates & Prerequisites */}
          <div className="space-y-6">
            <IconSection icon={Award} title="Certificats & Diplômes">
              <div className="flex flex-wrap gap-2">
                {job.certificates.map((cert, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {cert}
                  </Badge>
                ))}
              </div>
            </IconSection>

            <IconSection icon={GraduationCap} title="Prérequis">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Expérience</h4>
                  <p className="text-sm">{job.prerequisites.experience}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Âge</h4>
                  <p className="text-sm">{job.prerequisites.age}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Langues</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.prerequisites.languages.map((lang, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-1">Exigences physiques</h4>
                  <ul className="text-sm space-y-1">
                    {job.prerequisites.physicalRequirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </IconSection>
          </div>

          {/* Workplace & Tasks */}
          <div className="space-y-6">
            <IconSection icon={MapPin} title="Lieux d'exercice">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {job.workplace.map((place, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm">{place}</span>
                  </div>
                ))}
              </div>
            </IconSection>

            <IconSection icon={Clock} title="Tâches quotidiennes">
              <div className="space-y-2">
                {job.dailyTasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </div>
                    <span className="text-sm">{task}</span>
                  </div>
                ))}
              </div>
            </IconSection>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <IconSection icon={Users} title="Compétences techniques">
            <div className="flex flex-wrap gap-2">
              {job.skills.technical.map((skill, index) => (
                <Badge key={index} className="bg-primary/10 text-primary border-primary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </IconSection>

          <IconSection icon={Users} title="Savoir-être">
            <div className="flex flex-wrap gap-2">
              {job.skills.soft.map((skill, index) => (
                <Badge key={index} className="bg-secondary/10 text-secondary border-secondary/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </IconSection>
        </div>

        {/* Tips & Alternative Names */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <IconSection icon={Lightbulb} title="Conseils & Astuces">
            <ul className="space-y-2">
              {job.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </IconSection>

          <IconSection icon={Tags} title="Autres appellations">
            <div className="flex flex-wrap gap-2">
              {job.alternativeNames.map((name, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted">
                  {name}
                </Badge>
              ))}
            </div>
          </IconSection>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 p-6 bg-muted/30 rounded-xl">
          <Button size="lg" className="flex-1 gradient-primary">
            Postuler maintenant
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            Télécharger la fiche PDF
          </Button>
        </div>
      </main>
    </div>
  );
}