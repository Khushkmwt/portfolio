import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GridGlow, FloatingBadges, SectionHeader } from "./UI.jsx";
import { ChevronRight, ArrowDown, Sparkles, Rocket } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-[92vh] items-center overflow-hidden">
      <motion.div style={{ y }} className="pointer-events-none absolute -inset-x-20 -top-24">
        <GridGlow />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-28 md:grid-cols-2 md:py-36">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-6">
          <motion.h1 variants={fadeUp} className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hey, I’m <span className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">KHUSH</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            Full‑stack web dev & ML engineer crafting delightful, fast experiences. I build modern apps with React, TypeScript, Node, and a sprinkle of intelligent UX.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-zinc-900">
              View Projects <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/5">
              Contact <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1"><Sparkles className="h-4 w-4" /> Open to full‑time</span>
            <span>•</span>
            <span>Remote / Hybrid</span>
          </motion.div>
        </motion.div>

        <motion.div style={{ scale }} className="relative">
          <div className="relative mx-auto aspect-square w-72 overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl md:w-96">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
              alt="Laptop setup"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/10 mix-blend-overlay" />
          </div>
          <FloatingBadges />
        </motion.div>
      </div>
    </section>
  );
}
