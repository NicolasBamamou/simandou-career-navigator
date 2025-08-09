import { Heart, MapPin, GraduationCap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    category: string;
    location: string;
    education: string;
    image: string;
    description: string;
    isFavorite?: boolean;
  };
  onFavoriteToggle?: (id: string) => void;
  onClick?: (id: string) => void;
}

export function JobCard({ job, onFavoriteToggle, onClick }: JobCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFavoriteToggle?.(job.id);
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-spring hover:shadow-float hover:-translate-y-1 bg-card border-border/50"
      onClick={() => onClick?.(job.id)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={job.image}
          alt={job.title}
          className={cn(
            "w-full h-full object-cover object-center transition-transform duration-500 scale-100 group-hover:scale-135",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 gradient-card opacity-60 group-hover:opacity-40 transition-smooth" />
        
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3 bg-background/90 text-foreground border-0 shadow-card"
        >
          {job.education}
        </Badge>

        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 left-3 h-8 w-8 bg-background/20 backdrop-blur-sm border-0 transition-spring",
            job.isFavorite 
              ? "text-red-500 hover:text-red-600 scale-110" 
              : "text-white/80 hover:text-red-500"
          )}
          onClick={handleFavoriteClick}
        >
          <Heart 
            className={cn(
              "h-4 w-4 transition-smooth",
              job.isFavorite && "fill-current animate-pulse-slow"
            )} 
          />
        </Button>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading font-semibold text-lg text-white mb-2 line-clamp-2">
            {job.title}
          </h3>
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{job.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {job.description}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <GraduationCap className="h-3 w-3" />
            <span>Niveau requis</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary hover:text-primary/80 px-0 h-auto font-medium"
          >
            Voir détails →
          </Button>
        </div>
      </div>
    </Card>
  );
}