
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function WelcomeHero() {
  const { toast } = useToast();
  
  const handleExplore = () => {
    toast({
      title: "Welcome!",
      description: "Explore our AI resources and connect with experts.",
    });
  };

  return (
    <div className="mb-8 rounded-lg bg-gradient-to-r from-ksu-primary to-ksu-secondary p-8 text-white">
      <div className="max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Welcome to KSU AI Nexus
        </h1>
        <p className="mb-6 text-lg text-white/90">
          Your central hub for AI collaboration at King Saud University. Connect with experts,
          discover resources, and advance your research with our intelligent
          recommendation system.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={handleExplore}
            className="bg-white text-ksu-primary hover:bg-ksu-light"
          >
            Explore Resources
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/20"
            asChild
          >
            <a href="/discover">Find Collaborators</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
