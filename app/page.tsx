import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Experience />
        <Publications />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
