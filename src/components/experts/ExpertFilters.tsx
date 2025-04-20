
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface ExpertFiltersProps {
  activeFilters: {
    department: string[];
    expertise: string[];
    availability: boolean;
  };
  setActiveFilters: React.Dispatch<
    React.SetStateAction<{
      department: string[];
      expertise: string[];
      availability: boolean;
    }>
  >;
}

export function ExpertFilters({
  activeFilters,
  setActiveFilters,
}: ExpertFiltersProps) {
  const departments = [
    { id: "cs", label: "Computer Science" },
    { id: "is", label: "Information Systems" },
    { id: "ee", label: "Electrical Engineering" },
    { id: "math", label: "Mathematics" },
    { id: "stat", label: "Statistics" },
  ];

  const expertiseAreas = [
    { id: "ml", label: "Machine Learning" },
    { id: "nlp", label: "Natural Language Processing" },
    { id: "cv", label: "Computer Vision" },
    { id: "robotics", label: "Robotics" },
    { id: "ds", label: "Data Science" },
    { id: "dl", label: "Deep Learning" },
  ];

  const handleDepartmentChange = (id: string, checked: boolean) => {
    setActiveFilters((prev) => ({
      ...prev,
      department: checked
        ? [...prev.department, id]
        : prev.department.filter((d) => d !== id),
    }));
  };

  const handleExpertiseChange = (id: string, checked: boolean) => {
    setActiveFilters((prev) => ({
      ...prev,
      expertise: checked
        ? [...prev.expertise, id]
        : prev.expertise.filter((e) => e !== id),
    }));
  };

  const handleAvailabilityChange = (checked: boolean) => {
    setActiveFilters((prev) => ({
      ...prev,
      availability: checked,
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      department: [],
      expertise: [],
      availability: false,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <Accordion type="single" collapsible defaultValue="department">
        <AccordionItem value="department">
          <AccordionTrigger>Department</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {departments.map((dept) => (
                <div key={dept.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`dept-${dept.id}`}
                    checked={activeFilters.department.includes(dept.id)}
                    onCheckedChange={(checked) =>
                      handleDepartmentChange(
                        dept.id,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={`dept-${dept.id}`}>{dept.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="expertise">
          <AccordionTrigger>Expertise</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {expertiseAreas.map((area) => (
                <div key={area.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`area-${area.id}`}
                    checked={activeFilters.expertise.includes(area.id)}
                    onCheckedChange={(checked) =>
                      handleExpertiseChange(
                        area.id,
                        checked as boolean
                      )
                    }
                  />
                  <Label htmlFor={`area-${area.id}`}>{area.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="availability">Available for Consultation</Label>
          <Switch
            id="availability"
            checked={activeFilters.availability}
            onCheckedChange={handleAvailabilityChange}
          />
        </div>
      </div>
    </div>
  );
}
