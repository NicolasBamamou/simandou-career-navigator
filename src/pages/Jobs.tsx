import { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { JobCard } from "@/components/jobs/JobCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { jobsData, categories, educationLevels, type Job } from "@/data/jobs";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedEducation, setSelectedEducation] = useState("Tous niveaux");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "Tous" || job.category === selectedCategory;
      const matchesEducation = selectedEducation === "Tous niveaux" || job.education === selectedEducation;
      
      return matchesSearch && matchesCategory && matchesEducation;
    }).map(job => ({
      ...job,
      isFavorite: favorites.has(job.id)
    }));
  }, [searchTerm, selectedCategory, selectedEducation, favorites]);

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

  const FilterContent = () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Catégorie</label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Niveau d'éducation</label>
        <Select value={selectedEducation} onValueChange={setSelectedEducation}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {educationLevels.map((level) => (
              <SelectItem key={level} value={level}>
                {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <Header onSearchChange={setSearchTerm} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h1 className="font-heading text-2xl font-bold text-foreground">
                Métiers du Projet Simandou
              </h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filtres de recherche</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher un métier..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filtres:</span>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedEducation} onValueChange={setSelectedEducation}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {educationLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground">
              {filteredJobs.length} métier{filteredJobs.length > 1 ? 's' : ''} trouvé{filteredJobs.length > 1 ? 's' : ''}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onFavoriteToggle={handleFavoriteToggle}
                onClick={handleJobClick}
              />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                Aucun métier trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}