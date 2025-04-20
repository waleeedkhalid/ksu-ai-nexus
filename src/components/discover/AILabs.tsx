
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function AILabs() {
  const { toast } = useToast();
  
  const handleVisit = (name: string) => {
    toast({
      title: "Lab Information",
      description: `You are viewing details for: ${name}`,
    });
  };

  const labs = [
    {
      id: 1,
      name: "Natural Language Processing Lab",
      description: "Research focused on Arabic language understanding and generation",
      location: "Computer Science Building, Floor 3",
      equipment: "GPU Clusters, Specialized Corpus Storage",
      image: "https://images.unsplash.com/photo-1581092921461-7b0c33686328?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbXB1dGVyJTIwbGFifGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Robotics and Computer Vision Lab",
      description: "Development of autonomous robots and visual perception systems",
      location: "Engineering Complex, Building B",
      equipment: "Robot Prototypes, 3D Sensors, Testing Arena",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvYm90aWNzJTIwbGFifGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Machine Learning & Data Science Lab",
      description: "Research on advanced ML algorithms and applications",
      location: "Information Technology Center, Floor 2",
      equipment: "High-Performance Computing Cluster, Big Data Storage",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">AI Research Labs</h2>
        <Button variant="outline">View All Labs</Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {labs.map((lab) => (
          <Card key={lab.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={lab.image}
                alt={lab.name}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{lab.name}</CardTitle>
              <CardDescription>{lab.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{lab.description}</p>
              <Button
                onClick={() => handleVisit(lab.name)}
                className="w-full bg-ksu-primary hover:bg-ksu-dark"
              >
                Visit Lab
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
