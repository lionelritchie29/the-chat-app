import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface IProps {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[];
  className: string;
}

export function SidebarNav({ items, className }: IProps) {
  return (
    <nav className={cn("flex flex-col space-y-2 mx-5 mt-2", className)}>
      {items.map((item) => (
        <NavLink
          className={({ isActive }) =>
            cn(
              "py-2 font-semibold hover:text-blue-600 flex items-center space-x-2",
              isActive && "text-blue-600"
            )
          }
          key={item.href}
          to={item.href}
        >
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </NavLink>
      ))}
    </nav>
  );
}
