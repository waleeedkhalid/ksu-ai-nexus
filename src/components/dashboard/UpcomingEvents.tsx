
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function UpcomingEvents() {
  const { toast } = useToast();
  
  const handleRegister = (title: string) => {
    toast({
      title: "Event Registration",
      description: `You have registered for: ${title}`,
    });
  };

  const events = [
    {
      id: 1,
      title: "AI Research Symposium",
      date: "April 25, 2025",
      location: "Main Campus, Hall A",
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      date: "May 10, 2025",
      location: "Computer Science Building",
    },
    {
      id: 3,
      title: "Industry-Academia AI Summit",
      date: "June 5, 2025",
      location: "KSU Conference Center",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Upcoming Events</CardTitle>
        <CardDescription>AI conferences and workshops</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="space-y-2 rounded-md border p-3 hover:bg-muted/50"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-ksu-primary">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div>
                <h4 className="font-medium leading-none">{event.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {event.location}
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full"
                onClick={() => handleRegister(event.title)}
              >
                Register
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
