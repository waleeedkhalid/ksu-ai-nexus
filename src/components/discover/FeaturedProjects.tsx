
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export function FeaturedProjects() {
  const { toast } = useToast();
  
  const handleLearnMore = (title: string) => {
    toast({
      title: "Project Details",
      description: `Viewing details for: ${title}`,
    });
  };

  const projects = [
    {
      id: 1,
      title: "Smart City AI Solutions",
      description: "Developing AI-powered solutions for urban challenges in Saudi cities",
      status: "Ongoing",
      partners: ["KSU Computer Science", "KAUST", "Ministry of Communications"],
      tags: ["Smart Cities", "IoT", "Computer Vision"],
      progress: 65,
    },
    {
      id: 2,
      title: "Arabic Speech Recognition",
      description: "Building advanced models for dialectal Arabic speech recognition and transcription",
      status: "Ongoing",
      partners: ["KSU Linguistics", "KSU Computer Science", "SDAIA"],
      tags: ["NLP", "Speech Processing", "Arabic Language"],
      progress: 80,
    },
    {
      id: 3,
      title: "Predictive Healthcare Analytics",
      description: "Using machine learning to predict disease outbreaks and optimize healthcare resources",
      status: "Recruiting",
      partners: ["KSU Medicine", "KSU Computer Science", "Ministry of Health"],
      tags: ["Healthcare", "Predictive Analytics", "Data Science"],
      progress: 30,
    },
  ];

  return (
    <section className="space-y-4 pb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        <Button variant="outline">Explore All Projects</Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge variant={project.status === "Recruiting" ? "outline" : "default"}>
                  {project.status}
                </Badge>
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-sm font-medium mb-1">Collaboration:</p>
                <p className="text-sm text-muted-foreground">
                  {project.partners.join(", ")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="space-y-1.5">
                <p className="text-sm font-medium">Progress: {project.progress}%</p>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-ksu-primary"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleLearnMore(project.title)}
                className="w-full bg-ksu-primary hover:bg-ksu-dark"
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
