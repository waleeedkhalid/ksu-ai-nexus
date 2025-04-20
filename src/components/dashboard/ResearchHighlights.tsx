
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ResearchHighlights() {
  const { toast } = useToast();
  
  const handleRead = (title: string) => {
    toast({
      title: "Research Highlight",
      description: `You are now reading: ${title}`,
    });
  };

  const highlights = [
    {
      id: 1,
      title: "Advances in Arabic Natural Language Processing",
      description: "A collaborative study between Computer Science and Linguistics departments on improving Arabic NLP models.",
      authors: "Al-Fahad, A., Al-Sudairi, F., et al.",
      date: "January 2025",
      category: "NLP",
    },
    {
      id: 2,
      title: "AI-Driven Healthcare Diagnostics",
      description: "Research on using deep learning for early detection of diseases from medical imagery.",
      authors: "Al-Harbi, O., Al-Otaibi, S., et al.",
      date: "February 2025",
      category: "Healthcare AI",
    },
    {
      id: 3,
      title: "Autonomous Vehicle Navigation in Urban Settings",
      description: "Novel approach to real-time object detection and path planning for autonomous vehicles.",
      authors: "Al-Qahtani, M., Al-Dosari, H., et al.",
      date: "March 2025",
      category: "Robotics",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Highlights</CardTitle>
        <CardDescription>
          Latest AI research from KSU researchers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {highlights.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.authors} • {item.date}
                  </p>
                </div>
                <span className="rounded-full bg-ksu-light px-2 py-1 text-xs font-medium text-ksu-primary">
                  {item.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <Button
                variant="link"
                className="px-0 text-ksu-primary"
                onClick={() => handleRead(item.title)}
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
