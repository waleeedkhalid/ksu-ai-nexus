
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AIStats() {
  const stats = [
    {
      title: "AI Labs",
      value: "12",
      description: "Active research laboratories",
      trend: "+2 this year",
      trendUp: true,
    },
    {
      title: "AI Experts",
      value: "86",
      description: "Faculty members & researchers",
      trend: "+15 this year",
      trendUp: true,
    },
    {
      title: "Publications",
      value: "243",
      description: "Research papers published",
      trend: "+68 this year",
      trendUp: true,
    },
    {
      title: "Active Projects",
      value: "37",
      description: "Ongoing research initiatives",
      trend: "+12 this year",
      trendUp: true,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Research at KSU</CardTitle>
        <CardDescription>Summary of our AI ecosystem</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-0 shadow-none">
              <CardContent className="p-6">
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <div className="mt-2 text-xs font-medium text-muted-foreground">
                  <span
                    className={
                      stat.trendUp ? "text-green-600" : "text-red-600"
                    }
                  >
                    {stat.trend}
                  </span>
                </div>
                <div className="mt-2 text-base font-semibold">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
