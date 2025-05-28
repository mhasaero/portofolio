import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = true;

  if (!user) return <Login />;

  return (
    <main className="px-8 md:px-12 lg:px-16">
      <nav className="-mx-8 md:-mx-12 lg:-mx-16">
        <Navbar />
      </nav>
      {children}
    </main>
  );
}
