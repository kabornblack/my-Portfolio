"use client";
import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
// import Header from "@/components/Header";
import Clients from "@/components/Clients";
import AnimatedCircles from "@/components/AnimatedCircles";
// import Header1 from "@/components/Header1";

// function page() {

function Page() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowAnimation(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const heroSection = document.querySelector("#me");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* <Header /> */}
      {/* <Header1 /> */}
      {showAnimation && <AnimatedCircles />}

      <section
        id="me"
        className="snap-start min-h-screen flex items-center justify-center "
      >
        <Hero />
      </section>
      <section
        id="about"
        className="snap-start min-h-screen flex items-center justify-center"
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
        id="clients"
        className="snap-start min-h-screen flex items-center justify-center"
      >
        <Clients />
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

export default Page;
