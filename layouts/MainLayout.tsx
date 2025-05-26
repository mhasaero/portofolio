import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="px-16">
      <Navbar />
      {children}
    </main>
  );
}
