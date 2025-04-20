
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      toast({
        title: "Search Initiated",
        description: `Searching for: "${query}"`,
      });
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for labs, research areas, or projects..."
          className="pl-10 py-6 text-base"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          className="absolute right-1 top-1 bg-ksu-primary hover:bg-ksu-dark"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
