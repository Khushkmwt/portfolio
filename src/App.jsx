import React, { useEffect, useRef } from "react";
import { create } from "zustand";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects, { ProjectModal } from "./components/Projects.jsx"; // ✅ fixed here
import Resume from "./components/Resume.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import TechStack from "./components/TechStack.jsx";

/***********************
 * Zustand Store
 ***********************/
const useUIStore = create((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),
  navOpen: false,
  setNavOpen: (v) => set({ navOpen: v }),
  modalProject: null,
  setModalProject: (p) => set({ modalProject: p }),
}));

export default function App() {
  const {
    theme,
    toggleTheme,
    navOpen,
    setNavOpen,
    modalProject,
    setModalProject,
  } = useUIStore();
  const rootRef = useRef(null);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Sync theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-50"
    >
      <NavBar
        sections={sections}
        theme={theme}
        onToggleTheme={toggleTheme}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <main>
        <Hero />
        <About />
        <Projects onOpen={(p) => setModalProject(p)} />
        <Resume />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />

      {/* ✅ Correct modal usage */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
}
