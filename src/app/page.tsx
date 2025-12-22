import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import IsometricServices from "@/components/main/IsometricServices";
import About from "@/components/sub/About";
import Certifications from "@/components/sub/Certifications";
import Workshops from "@/components/sub/Workshops";
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
        <IsometricServices />
        <Projects />
        <Workshops />
        <Baraqex />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
