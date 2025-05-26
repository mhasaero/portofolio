import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <MainLayout>
      <section id="hero" className="-mx-8 md:-mx-12 lg:-mx-16">
        <Hero />
      </section>
    </MainLayout>
  );
}
