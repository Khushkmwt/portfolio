import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./UI.jsx";
import { FileText, Download, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" ref={ref} className="mx-auto max-w-6xl px-4 py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <SectionHeader title="Resume" eyebrow="My Journey" />

        {/* Intro text */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300"
        >
          Here’s a quick look at my resume. You can download it, view it in a
          new tab, or preview it right here.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/20 transition hover:shadow-xl hover:shadow-indigo-500/30"
          >
            <FileText className="h-5 w-5" /> View in New Tab
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 text-zinc-800 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            <Download className="h-5 w-5" /> Download Resume
          </a>
          <button
            onClick={() => setShowPreview((p) => !p)}
            className="inline-flex items-center gap-2 rounded-2xl border border-indigo-300 bg-indigo-50 px-4 py-2 text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/40"
          >
            <Eye className="h-5 w-5" /> {showPreview ? "Hide Preview" : "Preview Resume"}
          </button>
        </motion.div>

        {/* Conditional PDF Preview */}
        {showPreview && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-lg dark:border-white/10"
          >
            <embed
              src="/resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
              type="application/pdf"
              className="w-full h-[90vh]"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
