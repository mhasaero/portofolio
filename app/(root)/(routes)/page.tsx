import Hero from "@/components/Hero";

export default function page() {
  return (
    <section id="home">
      <section id="hero" className="-mx-8 md:-mx-12 lg:-mx-16">
        <Hero />
      </section>
      <div className="min-h-screen"></div>
    </section>
  );
}
