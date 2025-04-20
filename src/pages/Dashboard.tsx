
import { LayoutWithSidebar } from "@/components/layout/LayoutWithSidebar";
import { RecommendedExperts } from "@/components/dashboard/RecommendedExperts";
import { ResearchHighlights } from "@/components/dashboard/ResearchHighlights";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { AIStats } from "@/components/dashboard/AIStats";
import { WelcomeHero } from "@/components/dashboard/WelcomeHero";

export default function Dashboard() {
  return (
    <LayoutWithSidebar activeSidebarItem="dashboard">
      <div className="container py-6">
        <WelcomeHero />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-3">
            <ResearchHighlights />
            <div className="mt-6">
              <AIStats />
            </div>
          </div>
          <div className="space-y-6">
            <RecommendedExperts />
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
