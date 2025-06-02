import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

function WScreenWrapper({ id, children }: Readonly<{ id: string; children: React.ReactNode }>) {
  return (
    <div>
      <section id={id} className="-mx-8 md:-mx-12 lg:-mx-16 ">
        {children}
      </section>
    </div>
  );
}

export default function page() {
  return (
    <section id="home">
      <WScreenWrapper id="hero">
        <Hero />
        <AboutMe />
      </WScreenWrapper>

      <div className="min-h-screen"></div>
    </section>
  );
}
