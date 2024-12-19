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
        className="snap-start h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="snap-start h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <About />
      </section>

      <section
        id="skills"
        className="snap-start h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <Skills />
      </section>

      <section
        id="contact"
        className="snap-start h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
      >
        <Contact />
      </section>
    </main>
  );
}

export default page;
