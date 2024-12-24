"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Header from "@/components/Header";

function page() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Header />
      <section
        id="hero"
        className="snap-start min-h-screen flex items-center justify-center "
      >
        <Hero />
      </section>
      <section
        id="about"
        className="snap-center min-h-screen flex items-center justify-center"
      >
        <About />
      </section>

      <section
        id="skills"
        className="snap-start min-h-screen flex items-center justify-center"
      >
        <Skills />
      </section>

      <section
        id="contact"
        className="snap-start min-h-screen flex items-center justify-center "
      >
        <Contact />
      </section>
    </main>
  );
}

export default page;
