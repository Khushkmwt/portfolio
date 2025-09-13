import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Sun, Moon, ChevronRight } from "lucide-react";
import { IconButton } from "./UI.jsx";

const cn = (...c) => c.filter(Boolean).join(" ");

export default function NavBar({ sections, theme, onToggleTheme, navOpen, setNavOpen }) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-xl",
        isTop ? "bg-transparent" : "bg-white/60 shadow-sm dark:bg-zinc-900/60"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button onClick={() => scrollTo("home")} className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">KHUSH</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-950/5 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <IconButton onClick={onToggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </IconButton>

          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <span className="sr-only">Menu</span>
            <div className="h-6 w-6">
              <motion.div animate={{ rotate: navOpen ? 45 : 0, y: navOpen ? 6 : 0 }} className="my-[3px] h-0.5 bg-current" />
              <motion.div animate={{ opacity: navOpen ? 0 : 1 }} className="my-[3px] h-0.5 bg-current" />
              <motion.div animate={{ rotate: navOpen ? -45 : 0, y: navOpen ? -6 : 0 }} className="my-[3px] h-0.5 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <motion.div initial={false} animate={{ height: navOpen ? "auto" : 0 }} className="overflow-hidden md:hidden">
        <div className="mx-auto max-w-6xl px-4 pb-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="block w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-200 dark:hover:bg-white/5"
            >
              {s.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
