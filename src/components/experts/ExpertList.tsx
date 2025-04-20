
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

interface ExpertListProps {
  searchQuery: string;
  filters: {
    department: string[];
    expertise: string[];
    availability: boolean;
  };
}

export function ExpertList({ searchQuery, filters }: ExpertListProps) {
  const { toast } = useToast();
  
  const handleConnect = (name: string) => {
    toast({
      title: "Connection Request",
      description: `Your request to connect with ${name} has been sent.`,
    });
  };

  // Mock data for experts
  const experts = [
    {
      id: 1,
      name: "Dr. Ahmad Al-Fahad",
      title: "Professor of Machine Learning",
      department: "Computer Science",
      departmentId: "cs",
      expertise: ["Machine Learning", "Deep Learning", "AI Ethics"],
      expertiseIds: ["ml", "dl"],
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      available: true,
      publications: 47,
      researchInterests:
        "Deep learning models, transfer learning, and computational efficiency",
    },
    {
      id: 2,
      name: "Dr. Fatima Al-Sudairi",
      title: "Associate Professor of NLP",
      department: "Information Systems",
      departmentId: "is",
      expertise: ["Natural Language Processing", "Machine Learning"],
      expertiseIds: ["nlp", "ml"],
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      available: true,
      publications: 32,
      researchInterests:
        "Arabic NLP, sentiment analysis, and language representation models",
    },
    {
      id: 3,
      name: "Dr. Omar Al-Harbi",
      title: "Assistant Professor of Robotics",
      department: "Electrical Engineering",
      departmentId: "ee",
      expertise: ["Robotics", "Computer Vision", "AI Systems"],
      expertiseIds: ["robotics", "cv"],
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      available: false,
      publications: 28,
      researchInterests:
        "Autonomous navigation, robotic perception, and human-robot interaction",
    },
    {
      id: 4,
      name: "Dr. Sarah Al-Ghamdi",
      title: "Professor of Data Science",
      department: "Statistics",
      departmentId: "stat",
      expertise: ["Data Science", "Machine Learning", "Statistical Methods"],
      expertiseIds: ["ds", "ml"],
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      available: true,
      publications: 53,
      researchInterests:
        "Big data analytics, predictive modeling, and statistical learning",
    },
    {
      id: 5,
      name: "Dr. Mohammed Al-Otaibi",
      title: "Associate Professor of AI",
      department: "Computer Science",
      departmentId: "cs",
      expertise: ["Computer Vision", "Deep Learning"],
      expertiseIds: ["cv", "dl"],
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      available: false,
      publications: 34,
      researchInterests:
        "Image segmentation, object detection, and visual reasoning",
    },
    {
      id: 6,
      name: "Dr. Layla Al-Dosari",
      title: "Assistant Professor of AI",
      department: "Mathematics",
      departmentId: "math",
      expertise: ["Mathematical Foundations of AI", "Machine Learning"],
      expertiseIds: ["ml"],
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      available: true,
      publications: 19,
      researchInterests:
        "Theoretical foundations of machine learning, optimization algorithms",
    },
  ];

  // Filter experts based on search query and filters
  const filteredExperts = experts.filter((expert) => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const nameMatch = expert.name.toLowerCase().includes(query);
      const titleMatch = expert.title.toLowerCase().includes(query);
      const deptMatch = expert.department.toLowerCase().includes(query);
      const expertiseMatch = expert.expertise.some((e) =>
        e.toLowerCase().includes(query)
      );
      
      if (!(nameMatch || titleMatch || deptMatch || expertiseMatch)) {
        return false;
      }
    }

    // Department filter
    if (
      filters.department.length > 0 &&
      !filters.department.includes(expert.departmentId)
    ) {
      return false;
    }

    // Expertise filter
    if (
      filters.expertise.length > 0 &&
      !expert.expertiseIds.some((e) => filters.expertise.includes(e))
    ) {
      return false;
    }

    // Availability filter
    if (filters.availability && !expert.available) {
      return false;
    }

    return true;
  });

  return (
    <div className="space-y-6">
      {filteredExperts.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-lg text-muted-foreground">
            No experts found matching your criteria. Try adjusting your filters.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredExperts.map((expert) => (
            <Card key={expert.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start gap-4">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {expert.name}
                      {expert.available && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Available
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{expert.title}</CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {expert.department}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="mb-3">
                  <p className="text-sm font-medium">Expertise:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {expert.expertise.map((item) => (
                      <Badge key={item} variant="secondary" className="font-normal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Research Interests:</p>
                  <p className="text-sm text-muted-foreground">
                    {expert.researchInterests}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{expert.publications}</span> Publications
                </div>
                <Button
                  onClick={() => handleConnect(expert.name)}
                  className="bg-ksu-primary hover:bg-ksu-dark"
                >
                  Connect
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
