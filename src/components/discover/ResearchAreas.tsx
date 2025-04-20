
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export function ResearchAreas() {
  const { toast } = useToast();
  
  const handleAreaClick = (name: string) => {
    toast({
      title: "Research Area",
      description: `Exploring: ${name}`,
    });
  };

  const researchAreas = [
    {
      id: 1,
      name: "Natural Language Processing",
      description: "Research on understanding and generating human language text",
      topics: ["Arabic NLP", "Sentiment Analysis", "Machine Translation", "Text Summarization"],
      projects: 15,
      publications: 47,
    },
    {
      id: 2,
      name: "Computer Vision",
      description: "Development of methods to gain high-level understanding from digital images or videos",
      topics: ["Object Detection", "Image Segmentation", "Face Recognition", "Scene Understanding"],
      projects: 12,
      publications: 38,
    },
    {
      id: 3,
      name: "Robotics & Automation",
      description: "Research on intelligent machines capable of performing tasks autonomously",
      topics: ["Autonomous Navigation", "Robot Manipulation", "Swarm Robotics", "Human-Robot Interaction"],
      projects: 9,
      publications: 26,
    },
    {
      id: 4,
      name: "AI in Healthcare",
      description: "Applications of AI in medical diagnosis, treatment, and healthcare management",
      topics: ["Medical Imaging", "Disease Prediction", "Drug Discovery", "Health Monitoring"],
      projects: 14,
      publications: 42,
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Research Areas</h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {researchAreas.map((area) => (
          <Card 
            key={area.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleAreaClick(area.name)}
          >
            <CardHeader>
              <CardTitle>{area.name}</CardTitle>
              <CardDescription>{area.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {area.topics.map((topic) => (
                  <Badge key={topic} variant="secondary">{topic}</Badge>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  <strong>{area.projects}</strong> Active Projects
                </span>
                <span className="text-muted-foreground">
                  <strong>{area.publications}</strong> Publications
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
