import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Obaida — IT Engineer · Cloud & Automation" },
      {
        name: "description",
        content:
          "Personal portfolio of Obaida, an IT Engineer focused on Cloud Computing, Automation, and System Engineering.",
      },
      { property: "og:title", content: "Obaida — IT Engineer" },
      {
        property: "og:description",
        content: "Building systems, automating workflows, and designing scalable infrastructure.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
