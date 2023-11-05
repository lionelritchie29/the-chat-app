import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface IProps {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[];
}

export function SidebarNav({ items }: IProps) {
  return (
    <nav className="flex flex-col space-y-2 mx-5 mt-2">
      {items.map((item) => (
        <NavLink
          className={({ isActive }) =>
            cn(
              "py-2 font-medium hover:text-blue-600 flex items-center space-x-2",
              isActive && "text-blue-600 font-semibold"
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
