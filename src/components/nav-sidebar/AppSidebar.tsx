import { ReactNode } from "react";
import SidebarHeader from "./SidebarHeader";
import {
  ChatBubbleLeftEllipsisIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { SidebarNav } from "./SidebarNav";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

export default function AppSidebar({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isLoggedOut: isNotLoggedIn } = useAuth();

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

  const onSignOut = () => {
    auth.signOut();
    navigate("/auth");
  };

  if (isNotLoggedIn === null) {
    return children;
  }

  return (
    <main className="flex">
      <section className="w-48 border-r flex flex-col items-start">
        <SidebarHeader className="" />
        <SidebarNav items={navItems} className="flex-grow" />
        <button
          onClick={onSignOut}
          className="mx-auto mb-5 text-red-600 hover:text-red-700 font-semibold"
        >
          Sign out
        </button>
      </section>

      <section className="flex-grow">{children}</section>
    </main>
  );
}
