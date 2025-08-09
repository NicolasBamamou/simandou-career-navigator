import { Search, Bell, Menu, Home, Briefcase, Heart, Map, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

interface HeaderProps {
  onSearchChange?: (value: string) => void;
  showSearch?: boolean;
}

export function Header({ onSearchChange, showSearch = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-foreground">
                SIMANDOU2040
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Carrière Professionnel
              </p>
            </div>
          </div>
        </div>

        {showSearch && (
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un métier..."
                className="pl-10 border-border/50 focus:border-primary transition-smooth"
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-6">
                {showSearch && (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher un métier..."
                      className="pl-10"
                      onChange={(e) => onSearchChange?.(e.target.value)}
                    />
                  </div>
                )}

                <nav className="grid gap-2">
                  <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/60">
                    <Home className="h-5 w-5" />
                    <span>Accueil</span>
                  </Link>
                  <Link to="/metiers" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/60">
                    <Briefcase className="h-5 w-5" />
                    <span>Métiers</span>
                  </Link>
                  <Link to="/favoris" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/60">
                    <Heart className="h-5 w-5" />
                    <span>Favoris</span>
                  </Link>
                  <Link to="/carte" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/60">
                    <Map className="h-5 w-5" />
                    <span>Carte</span>
                  </Link>
                  <Link to="/profil" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/60">
                    <User className="h-5 w-5" />
                    <span>Profil</span>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}