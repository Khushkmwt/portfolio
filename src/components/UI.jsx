import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionHeader({ title, eyebrow }) {
  return (
    <div>
      <div className="text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400">{eyebrow}</div>
      <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export function IconButton({ children, className = "", ...props }) {
  return (
    <button
      className={`group inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white/80 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 transition hover:shadow-md hover:shadow-indigo-500/10 ${className}`}
      {...props}
    >
      <span className="sr-only">Icon button</span>
      <motion.span whileTap={{ scale: 0.92 }}>{children}</motion.span>
    </button>
  );
}

export function GridGlow() {
  return (
    <div aria-hidden className="pointer-events-none select-none">
      <div className="h-[60vh] bg-[radial-gradient(1000px_400px_at_20%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_300px_at_80%_10%,rgba(217,70,239,0.22),transparent)]" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />
      <div className="grid h-48 w-full grid-cols-12 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)] dark:opacity-30">
        {Array.from({ length: 12 * 8 }).map((_, i) => <div key={i} className="border-r border-b border-zinc-200/60 dark:border-white/10" />)}
      </div>
    </div>
  );
}

export function FloatingBadges() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const items = [
    { label: "React", x: "-30%", y: "10%" },
    { label: "Vite", x: "60%", y: "-10%" },
    { label: "Tailwind", x: "-20%", y: "80%" },
    { label: "Zustand", x: "70%", y: "70%" },
    { label: "Framer Motion", x: "10%", y: "-20%" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((b, i) => (
        <motion.span
          key={b.label}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, -10, 10], opacity: 1 }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur dark:border-white/10 dark:bg-white/10"
          style={{ left: b.x, top: b.y }}
        >
          {b.label}
        </motion.span>
      ))}
    </div>
  );
}
