import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./UI.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      org: "OXMIANT Tech Pvt. Ltd.",
      time: "Jun 2024 – Sep 2024",
      points: [
        "Developed dynamic web applications using React, Node.js, and MongoDB.",
        "Implemented user authentication, API integrations, and responsive UI with TailwindCSS.",
        "Collaborated with the team in an agile environment to deliver production-ready features."
      ]
    },
    {
      role: "Teaching Assistant",
      org: "Apna College",
      time: "Jan 2024 – May 2024",
      points: [
        "Mentored 1000+ students in Data Structures, Algorithms, and Full-Stack Development.",
        "Reviewed assignments and guided students through debugging and optimization.",
        "Delivered doubt-clearing sessions and contributed to structured learning paths."
      ]
    }
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <SectionHeader title="Experience" eyebrow="Where I’ve worked" />
        <div className="mt-10 space-y-6">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-zinc-200 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {e.role} ·{" "}
                  <span className="text-zinc-500 dark:text-zinc-400">
                    {e.org}
                  </span>
                </h3>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {e.time}
                </div>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
