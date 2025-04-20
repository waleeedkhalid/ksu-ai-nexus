
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

export function RecommendedExperts() {
  const { toast } = useToast();
  
  const handleConnect = (name: string) => {
    toast({
      title: "Connection Request",
      description: `Your request to connect with ${name} has been sent.`,
    });
  };

  const experts = [
    {
      id: 1,
      name: "Dr. Ahmad Al-Fahad",
      role: "Professor of Machine Learning",
      department: "Computer Science",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Dr. Fatima Al-Sudairi",
      role: "Associate Professor of NLP",
      department: "Information Systems",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 3,
      name: "Dr. Omar Al-Harbi",
      role: "Assistant Professor of Robotics",
      department: "Electrical Engineering",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Recommended Experts</CardTitle>
          <Button variant="link" size="sm" asChild>
            <Link to="/experts">View All</Link>
          </Button>
        </div>
        <CardDescription>
          Based on your research interests
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="flex items-center gap-4 rounded-md p-2 hover:bg-muted/50"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1 space-y-1">
                <p className="font-medium leading-none">{expert.name}</p>
                <p className="text-sm text-muted-foreground">{expert.role}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleConnect(expert.name)}
              >
                Connect
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
