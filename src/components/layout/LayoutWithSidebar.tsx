
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

interface LayoutWithSidebarProps {
  children: React.ReactNode;
  activeSidebarItem?: string;
}

export function LayoutWithSidebar({
  children,
  activeSidebarItem,
}: LayoutWithSidebarProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar active={activeSidebarItem} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
