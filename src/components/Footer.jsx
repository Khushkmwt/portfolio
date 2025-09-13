import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 py-10 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
      <div className="mx-auto max-w-6xl px-4">
        © {new Date().getFullYear()} KHUSH — Built with React, Vite, Tailwind, Zustand & Framer Motion
      </div>
    </footer>
  );
}
