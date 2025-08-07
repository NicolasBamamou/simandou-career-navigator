import { User, Settings, Award, BookOpen, Heart, MapPin, LogOut } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
  const userStats = [
    { label: "Métiers consultés", value: "12", icon: BookOpen },
    { label: "Favoris", value: "3", icon: Heart },
    { label: "Sites visités", value: "4", icon: MapPin },
  ];

  const badges = [
    { name: "Explorateur", description: "Premier métier consulté", earned: true },
    { name: "Curieux", description: "5 métiers consultés", earned: true },
    { name: "Collectionneur", description: "10 favoris ajoutés", earned: false },
    { name: "Expert", description: "Toutes les sections consultées", earned: false },
  ];

  const recentActivity = [
    { action: "Métier consulté", item: "Géologue", time: "Il y a 2h" },
    { action: "Ajouté aux favoris", item: "Opérateur de Pelle", time: "Hier" },
    { action: "Site exploré", item: "Fosse d'extraction A", time: "Il y a 3 jours" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <Header showSearch={false} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          {/* Profile Header */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="font-heading text-xl font-bold">Jean Dupont</h1>
                <p className="text-muted-foreground">Candidat Simandou2040</p>
                <p className="text-sm text-muted-foreground">Membre depuis janvier 2024</p>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {userStats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                  <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-lg">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Badges Section */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-primary" />
              <h2 className="font-heading text-lg font-semibold">Badges de progression</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {badges.map((badge, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg border text-center transition-smooth ${
                    badge.earned 
                      ? 'bg-primary/10 border-primary/30' 
                      : 'bg-muted/30 border-border'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${
                    badge.earned ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Award className="h-4 w-4" />
                  </div>
                  <div className={`font-semibold text-sm ${badge.earned ? 'text-primary' : 'text-muted-foreground'}`}>
                    {badge.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {badge.description}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6">
            <h2 className="font-heading text-lg font-semibold mb-4">Activité récente</h2>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div>
                      <span className="text-sm font-medium">{activity.action}</span>
                      <span className="text-sm text-muted-foreground"> - {activity.item}</span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="font-heading text-lg font-semibold mb-4">Actions rapides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="outline" className="justify-start h-auto p-4">
                <BookOpen className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Reprendre ma navigation</div>
                  <div className="text-sm text-muted-foreground">Continuer où vous vous êtes arrêté</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <Heart className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Mes favoris</div>
                  <div className="text-sm text-muted-foreground">Revoir mes métiers sauvegardés</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <MapPin className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Explorer la carte</div>
                  <div className="text-sm text-muted-foreground">Découvrir les sites du projet</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto p-4">
                <Award className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">Mes certifications</div>
                  <div className="text-sm text-muted-foreground">Gérer mes diplômes et formations</div>
                </div>
              </Button>
            </div>
          </Card>

          {/* Logout */}
          <Card className="p-6">
            <Separator className="mb-4" />
            <Button variant="ghost" className="w-full text-destructive hover:text-destructive">
              <LogOut className="h-4 w-4 mr-2" />
              Se déconnecter
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
}