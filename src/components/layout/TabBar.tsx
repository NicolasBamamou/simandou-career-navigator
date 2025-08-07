import { Home, Briefcase, Heart, Map, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "home", label: "Accueil", icon: Home, path: "/" },
  { id: "jobs", label: "Métiers", icon: Briefcase, path: "/metiers" },
  { id: "favorites", label: "Favoris", icon: Heart, path: "/favoris" },
  { id: "map", label: "Carte", icon: Map, path: "/carte" },
  { id: "profile", label: "Profil", icon: User, path: "/profil" },
];

export function TabBar() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          
          return (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg min-w-0 flex-1 transition-smooth",
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 transition-smooth",
                isActive && "text-primary"
              )} />
              <span className="text-xs font-medium truncate">
                {tab.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}