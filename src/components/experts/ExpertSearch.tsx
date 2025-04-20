
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ExpertSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ExpertSearch({ value, onChange }: ExpertSearchProps) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
      <Input
        placeholder="Search experts by name, expertise, or department..."
        className="pl-10 py-6 text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
