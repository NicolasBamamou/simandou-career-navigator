import { MapPin, Navigation, Layers } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Map() {
  const sites = [
    {
      id: "pit-a",
      name: "Fosse d'extraction A",
      location: "Mine à ciel ouvert",
      jobs: ["Géologue", "Opérateur de Pelle", "Foreur"],
      coordinates: { x: 40, y: 30 },
      status: "Actif"
    },
    {
      id: "processing",
      name: "Usine de traitement",
      location: "Complexe industriel",
      jobs: ["Métallurgiste", "Opérateur CIL", "Technicien qualité"],
      coordinates: { x: 60, y: 50 },
      status: "En développement"
    },
    {
      id: "port",
      name: "Terminal portuaire",
      location: "Côte maritime",
      jobs: ["Logisticien portuaire", "Surveyor", "Conducteur train"],
      coordinates: { x: 80, y: 70 },
      status: "Planifié"
    },
    {
      id: "admin",
      name: "Centre administratif",
      location: "Bureaux centraux",
      jobs: ["Manager HSE", "Community Relations", "Directeur RH"],
      coordinates: { x: 50, y: 40 },
      status: "Actif"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif": return "bg-green-500";
      case "En développement": return "bg-yellow-500";
      case "Planifié": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <Header showSearch={false} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
              Carte interactive Simandou
            </h1>
            <p className="text-muted-foreground">
              Explorez les différents sites du projet et découvrez les métiers associés
            </p>
          </div>

          {/* Legend */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="h-4 w-4" />
              <span className="font-medium">Légende</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Site actif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span>En développement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span>Planifié</span>
              </div>
            </div>
          </Card>

          {/* Interactive Map */}
          <Card className="p-6">
            <div className="relative w-full h-96 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg overflow-hidden">
              {/* Guinea outline (simplified) */}
              <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg" />
              
              {/* Sites */}
              {sites.map((site) => (
                <div
                  key={site.id}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${site.coordinates.x}%`,
                    top: `${site.coordinates.y}%`
                  }}
                >
                  <div className={`w-4 h-4 ${getStatusColor(site.status)} rounded-full shadow-lg group-hover:scale-125 transition-transform animate-pulse`} />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="bg-card border border-border rounded-lg p-3 shadow-lg min-w-48">
                      <h3 className="font-semibold text-sm mb-1">{site.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{site.location}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {site.jobs.slice(0, 2).map((job, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {job}
                          </Badge>
                        ))}
                        {site.jobs.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{site.jobs.length - 2}
                          </Badge>
                        )}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${site.status === 'Actif' ? 'bg-green-100 text-green-800' : 
                          site.status === 'En développement' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'}`}
                      >
                        {site.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}

              {/* Compass */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg">
                <Navigation className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          {/* Sites List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sites.map((site) => (
              <Card key={site.id} className="p-4 hover:shadow-card transition-smooth">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{site.name}</h3>
                    <p className="text-sm text-muted-foreground">{site.location}</p>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={`text-xs ${site.status === 'Actif' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 
                      site.status === 'En développement' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' : 
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'}`}
                  >
                    {site.status}
                  </Badge>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm font-medium mb-2">Métiers disponibles:</p>
                  <div className="flex flex-wrap gap-1">
                    {site.jobs.map((job, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {job}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="w-full">
                  Voir les offres d'emploi
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}