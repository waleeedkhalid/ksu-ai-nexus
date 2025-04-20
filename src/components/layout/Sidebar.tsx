
import {
  Calendar,
  Compass,
  Database,
  FileText,
  Group,
  Handshake,
  Search,
  User,
  UserSearch,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

function SidebarItem({ icon: Icon, label, href, active }: SidebarItemProps) {
  const { toast } = useToast();
  
  const handleClick = (e: React.MouseEvent) => {
    if (href !== "/" && href !== "/discover" && href !== "/experts") {
      e.preventDefault();
      toast({
        title: "Coming Soon",
        description: `The ${label} feature will be available in the next version.`,
      });
    }
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
        active
          ? "bg-ksu-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-ksu-light hover:text-ksu-primary"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
}

interface SidebarProps {
  className?: string;
  active?: string;
}

export function Sidebar({ className, active }: SidebarProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen w-64 flex-col border-r bg-background p-4",
        className
      )}
    >
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Main Menu
        </h2>
        <div className="space-y-1">
          <SidebarItem
            icon={Compass}
            label="Dashboard"
            href="/"
            active={active === "dashboard"}
          />
          <SidebarItem
            icon={Search}
            label="Discover"
            href="/discover"
            active={active === "discover"}
          />
          <SidebarItem
            icon={UserSearch}
            label="Find Experts"
            href="/experts"
            active={active === "experts"}
          />
        </div>
      </div>
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Collaboration
        </h2>
        <div className="space-y-1">
          <SidebarItem
            icon={Group}
            label="Research Teams"
            href="/teams"
            active={active === "teams"}
          />
          <SidebarItem
            icon={Handshake}
            label="Partnerships"
            href="/partnerships"
            active={active === "partnerships"}
          />
          <SidebarItem
            icon={Calendar}
            label="Events"
            href="/events"
            active={active === "events"}
          />
        </div>
      </div>
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Resources
        </h2>
        <div className="space-y-1">
          <SidebarItem
            icon={Database}
            label="AI Labs"
            href="/labs"
            active={active === "labs"}
          />
          <SidebarItem
            icon={FileText}
            label="Publications"
            href="/publications"
            active={active === "publications"}
          />
          <SidebarItem
            icon={User}
            label="My Profile"
            href="/profile"
            active={active === "profile"}
          />
        </div>
      </div>
    </div>
  );
}
