import { ReactNode } from "react";

export default function AppSidebar({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <section className="w-48 border-r">Sidebar</section>

      <section className="flex-grow">{children}</section>
    </main>
  );
}
