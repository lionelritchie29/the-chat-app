import { ReactNode } from "react";
import SidebarHeader from "./SidebarHeader";
import {
  ChatBubbleLeftEllipsisIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { SidebarNav } from "./SidebarNav";

export default function AppSidebar({ children }: { children: ReactNode }) {
  const navItems = [
    {
      title: "Chats",
      href: "/",
      icon: <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />,
    },
    {
      title: "Friends",
      href: "/friends",
      icon: <UsersIcon className="h-5 w-5" />,
    },
  ];

  return (
    <main className="flex">
      <section className="w-48 border-r">
        <SidebarHeader />
        <SidebarNav items={navItems} />
      </section>

      <section className="flex-grow">{children}</section>
    </main>
  );
}
