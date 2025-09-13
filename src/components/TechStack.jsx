import { motion } from "framer-motion";
import { Code2, Database, Cpu } from "lucide-react";

const stack = [
  {
    year: "2023",
    icon: <Code2 className="h-5 w-5 text-indigo-500" />,
    skills: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Zustand"],
  },
  {
    year: "2024",
    icon: <Database className="h-5 w-5 text-emerald-500" />,
    skills: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    year: "2025",
    icon: <Cpu className="h-5 w-5 text-fuchsia-500" />,
    skills: ["Machine Learning", "PyTorch", "FastAPI", "Cloud Deployments", "Microservices"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TechStack() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center"
        >
          Tech Stack Timeline
        </motion.h2>

        <div className="relative border-l border-zinc-300 dark:border-zinc-700">
          {stack.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="mb-14 ml-8 flex flex-col gap-4"
            >
              {/* Dot + Icon */}
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 ring-8 ring-white dark:bg-zinc-800 dark:ring-zinc-900">
                {item.icon}
              </span>

              {/* Card */}
              <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {item.year}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-sm text-zinc-700 transition hover:border-indigo-400 hover:bg-indigo-50 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:border-indigo-500/50 dark:hover:bg-indigo-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
