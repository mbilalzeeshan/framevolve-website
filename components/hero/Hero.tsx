"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl text-center"
      >
        <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          Motion Graphics • Websites • AI Automation
        </p>

        <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
          Transform
          <br />
          Real Estate
          <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Into Experiences.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400 md:text-xl">
          Framevolve helps real estate professionals attract more buyers through
          cinematic motion graphics, 3D walkthroughs, premium websites, and AI
          automation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button>Book Free Consultation</Button>

          <Button variant="outline">View Portfolio</Button>
        </div>
      </motion.div>
    </section>
  );
}
