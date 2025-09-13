import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./UI.jsx";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    console.log(res)
    if (res.ok) {
      alert("✅ Message sent successfully!");
      e.target.reset();
    } else {
      alert("❌ Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" ref={ref} className="mx-auto max-w-6xl px-4 py-24">
      <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"}>
        <SectionHeader title="Contact" eyebrow="Say hello" />

        {/* Form */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <input name="name" required placeholder="Your name"
            className="rounded-xl border border-zinc-300 bg-white/70 px-4 py-3 outline-none transition focus:border-indigo-400 dark:border-white/10 dark:bg-white/5" />
          <input type="email" name="email" required placeholder="Email"
            className="rounded-xl border border-zinc-300 bg-white/70 px-4 py-3 outline-none transition focus:border-indigo-400 dark:border-white/10 dark:bg-white/5" />
          <textarea name="message" required rows={5} placeholder="Message"
            className="md:col-span-2 rounded-xl border border-zinc-300 bg-white/70 px-4 py-3 outline-none transition focus:border-indigo-400 dark:border-white/10 dark:bg-white/5" />
          <div className="md:col-span-2">
            <button type="submit"
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-xl">
              Send <ArrowDown className="h-4 w-4 rotate-[-90deg] transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>

        {/* Socials */}
        <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="https://github.com/Khushkmwt" className="inline-flex items-center gap-1 hover:underline"><Github className="h-4 w-4" /> GitHub</a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/khushkumawat" className="inline-flex items-center gap-1 hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          <span>•</span>
          <a href="mailto:khushkumawat.dev@gmail.com" className="inline-flex items-center gap-1 hover:underline"><Mail className="h-4 w-4" /> Email</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
