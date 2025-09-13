import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./UI.jsx";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const skills = [
    { k: "Frontend", v: "React, TS, Zustand, Tailwind, Vite, Vitest" },
    { k: "Backend", v: "Node, Express, Postgres, Prisma, Redis" },
    { k: "ML / Data", v: "Python, PyTorch, scikit, FastAPI" },
  ];

  return (
    <section id="about" ref={ref} className="mx-auto max-w-6xl px-4 py-24">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
        <SectionHeader title="About" eyebrow="Who I am" />
        <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300">
          I’m a builder who loves performance, clean DX, and little details that make UIs feel alive.
          I’ve shipped production apps across the stack (React, Next/Vite, Node, Postgres, Python) and I’m comfortable
          weaving ML features when they unlock real value.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((it) => (
            <div key={it.k} className="rounded-2xl border border-zinc-200 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="text-sm text-zinc-500 dark:text-zinc-400">{it.k}</div>
              <div className="mt-1 font-medium">{it.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
