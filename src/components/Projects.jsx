import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./UI.jsx";
import { ExternalLink, Github } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function Projects({ onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const projects = useMemo(
    () => [
      {
        title: "Code-Blog",
        blurb:
          "Web platform where users can write, read, and share blogs. Built with MongoDB, Express.js, TailwindCSS, and JWT for secure authentication.",
        tags: ["MongoDB", "Express", "Tailwind", "JWT"],
        image:
          "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
        links: {
          demo: "https://khushkmwt.netlify.app/",
          repo: "https://github.com/Khushkmwt/code-blog",
        },
      },
      {
        title: "Chat-App",
        blurb:
          "MERN stack chat app with group and personal chats, real-time text & file sharing. Zustand for state management and JWT for authentication.",
        tags: ["MERN", "Zustand", "JWT"],
        image:
          "https://images.unsplash.com/photo-1616469829581-73993eb86d5c?q=80&w=1200&auto=format&fit=crop",
        links: {
          demo: "https://khushkmwt.netlify.app/",
          repo: "https://github.com/Khushkmwt/chatapp",
        },
      },
      {
        title: "Face Recognition Attendance System",
        blurb:
          "Full-stack app using React, Flask, and Mediapipe for real-time attendance tracking via facial recognition with secure backend logging.",
        tags: ["React", "Flask", "Mediapipe", "DeepFace"],
        image:
          "https://images.unsplash.com/photo-1600267165477-1cf6422ec8a6?q=80&w=1200&auto=format&fit=crop",
        links: {
          demo: "https://khushkmwt.netlify.app/",
          repo: "https://github.com/Khushkmwt/face_recognition",
        },
      },
    ],
    []
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto max-w-6xl px-4 py-24"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <SectionHeader title="Projects" eyebrow="Things I’ve built" />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} onOpen={onOpen} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition dark:border-white/10 dark:bg-white/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          {project.blurb}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-xs dark:border-white/10 dark:bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline"
          >
            Live <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <span className="text-zinc-400">•</span>
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-300"
          >
            Code <Github className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-4">
          <button
            onClick={() => onOpen(project)}
            className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm transition hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-white/10"
          >
            Quick look
          </button>
        </div>
      </div>
    </motion.article>
  );
}
export function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 text-zinc-50 shadow-2xl"
      >
        {/* Cover image */}
        <div className="relative h-64 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur hover:bg-white/20"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            {project.blurb}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex items-center gap-4 text-sm">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500"
            >
              Live <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-4 py-2 font-medium text-zinc-200 hover:bg-zinc-800"
            >
              Code <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
