"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

import { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    if (process.env.NODE_ENV === "development") {
    }
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    autoPlay: true,
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: {
          enable: true,
        },
      },
    },
    particles: {
      move: {
        direction: "none",
        enable: true,
        speed: 3,
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
        path: {
          enable: true,
        },
        center: {
          x: 50,
          y: 50,
          mode: "percent",
          radius: 5,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      size: {
        value: { min: 2, max: 4 },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      color: {
        value: "#4A5568",
      },
    },
    zLayers: 100,
  }));

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="z-50"
        init={particlesInit}
        loaded={particlesLoaded}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
