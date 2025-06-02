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
    <main className="px-8 md:px-12 lg:px-16 bg-opacity-90 bg-fixed bg-center bg-cover bg-linear-to-r from-cyan-500 from-40% to-blue-500">
      <Navbar />
      {children}
    </main>
  );
}
