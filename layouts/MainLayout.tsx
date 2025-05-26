import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="px-8 md:px-12 lg:px-16">
      <nav className="-mx-8 md:-mx-12 lg:-mx-16">
        <Navbar />
      </nav>
      {children}
    </main>
  );
}
