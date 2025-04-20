
import { LayoutWithSidebar } from "@/components/layout/LayoutWithSidebar";
import { AILabs } from "@/components/discover/AILabs";
import { ResearchAreas } from "@/components/discover/ResearchAreas";
import { FeaturedProjects } from "@/components/discover/FeaturedProjects";
import { SearchBar } from "@/components/discover/SearchBar";

export default function Discover() {
  return (
    <LayoutWithSidebar activeSidebarItem="discover">
      <div className="container py-6">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Discover AI Resources</h1>
          <p className="text-muted-foreground">
            Explore labs, research areas, and projects across King Saud University
          </p>
          <SearchBar />
        </div>
        
        <div className="space-y-8">
          <AILabs />
          <ResearchAreas />
          <FeaturedProjects />
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
