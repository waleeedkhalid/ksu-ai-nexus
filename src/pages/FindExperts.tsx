
import { LayoutWithSidebar } from "@/components/layout/LayoutWithSidebar";
import { ExpertSearch } from "@/components/experts/ExpertSearch";
import { ExpertList } from "@/components/experts/ExpertList";
import { ExpertFilters } from "@/components/experts/ExpertFilters";
import { useState } from "react";

export default function FindExperts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    department: [],
    expertise: [],
    availability: false,
  });

  return (
    <LayoutWithSidebar activeSidebarItem="experts">
      <div className="container py-6">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Find AI Experts</h1>
          <p className="text-muted-foreground">
            Connect with faculty members and researchers specializing in artificial intelligence
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <ExpertFilters 
              activeFilters={activeFilters} 
              setActiveFilters={setActiveFilters} 
            />
          </div>
          <div className="md:col-span-3">
            <ExpertSearch value={searchQuery} onChange={setSearchQuery} />
            <ExpertList searchQuery={searchQuery} filters={activeFilters} />
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
