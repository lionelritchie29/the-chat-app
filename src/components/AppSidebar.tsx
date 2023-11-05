import { ReactNode } from "react";
import SidebarHeader from "./nav-sidebar/SidebarHeader";

export default function AppSidebar({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <section className="w-48 border-r">
        <SidebarHeader />
      </section>

      <section className="flex-grow">{children}</section>
    </main>
  );
}
