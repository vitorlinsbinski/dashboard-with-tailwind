import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

interface NavItemProps {
  title: string;
  icon: ElementType;
  hasArrowDown?: boolean;
}

export function NavItem({
  icon: Icon,
  title,
  hasArrowDown = false,
}: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 transition-colors duration-200 hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-500 dark:group-hover:text-violet-400" />
      <span className="font-medium text-zinc-700 transition-colors duration-200 group-hover:text-violet-500 dark:text-zinc-100 dark:group-hover:text-violet-300">
        {title}
      </span>

      {hasArrowDown && (
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-colors duration-200 group-hover:text-violet-300 dark:text-zinc-600" />
      )}
    </a>
  );
}
