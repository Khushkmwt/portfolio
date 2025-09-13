import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./UI.jsx";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Integrate Formspree or backend here)");
  };

  return (
    <section id="contact" ref={ref} className="mx-auto max-w-6xl px-4 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <SectionHeader title="Contact" eyebrow="Say hello" />

        {/* Contact form */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <input
            placeholder="Your name"
            aria-label="Your name"
            required
            className="rounded-xl border border-zinc-300 bg-white/70 px-4 py-3 outline-none transition focus:border-indigo-400 dark:border-white/10 dark:bg-white/5"
          />
          <input
            type="email"
            placeholder="Email"
            aria-label="Your email"
            required
            className="rounded-xl border border-zinc-300 bg-white/70 px-4 py-3 outline-none transition focus:border-indigo-400 dark:border-white/10 dark:bg-white/5"
          />
          <textarea
            rows={5}
            placeholder="Message"
            aria-label="Your message"
            required
            className="md:col-span-2 rounded-xl border border-zinc-300 bg-white/70 px-4 py-3 outline-none transition focus:border-indigo-400 dark:border-white/10 dark:bg-white/5"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-xl"
            >
              Send
              <ArrowDown className="h-4 w-4 rotate-[-90deg] transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400"
        >
          <a
            href="https://github.com/Khushkmwt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/khushkmwt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <span>•</span>
          <a
            href="mailto:khushkumawat.dev@gmail.com"
            className="inline-flex items-center gap-1 hover:underline"
            aria-label="Email me"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
