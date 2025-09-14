import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./UI.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const skills = [
    { k: "Languages", v: ["Java (DSA)", "JavaScript (Web)", "Python"] },
    { k: "Frontend", v: ["React", "Tailwind CSS", "Bootstrap", "EJS"] },
    { k: "Backend", v: ["Node.js", "Express", "REST APIs", "JWT"] },
    { k: "Databases", v: ["MongoDB", "MySQL"] },
    { k: "Tools", v: ["Git", "GitHub", "Postman"] },
    { k: "ML / Data", v: ["Python", "PyTorch", "scikit-learn", "FastAPI"] },
  ];

  return (
    <section id="about" ref={ref} className="mx-auto max-w-6xl px-4 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <SectionHeader title="About" eyebrow="Who I am" />

        {/* About text */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300"
        >
          I’m a builder who loves performance, clean developer experience, and
          the little details that make UIs feel alive. I’ve shipped production
          apps across the stack (React, Node.js, MongoDB, MySQL) and I’m
          comfortable weaving ML features when they unlock real value.
          <br />
          <br />
          Alongside development, I’ve also guided students in mastering the MERN
          stack by solving doubts as a <span className="font-semibold">Teaching Assistant</span>, which
          strengthened my fundamentals even further.
        </motion.p>

        {/* Skills grid */}
        <motion.div
          variants={fadeUp}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((it) => (
            <div
              key={it.k}
              className="rounded-2xl border border-zinc-200 bg-white/60 p-5 backdrop-blur 
                         dark:border-white/10 dark:bg-white/5"
            >
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                {it.k}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {it.v.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 
                               text-xs font-medium text-zinc-700 
                               dark:border-white/10 dark:bg-white/10 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
