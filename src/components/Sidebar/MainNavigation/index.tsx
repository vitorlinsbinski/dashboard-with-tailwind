import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} hasArrowDown />
      <NavItem title="Dashboard" icon={BarChart} hasArrowDown />
      <NavItem title="Projects" icon={SquareStack} hasArrowDown />
      <NavItem title="Tasks" icon={CheckSquare} hasArrowDown />
      <NavItem title="Reporting" icon={Flag} hasArrowDown />
      <NavItem title="Users" icon={Users} hasArrowDown />
    </nav>
  );
}
