import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import About from "@/components/sub/About";
import Certifications from "@/components/sub/Certifications";
import Baraqex from "@/components/sub/Baraqex";
import Contact from "@/components/sub/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
        <Baraqex />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
