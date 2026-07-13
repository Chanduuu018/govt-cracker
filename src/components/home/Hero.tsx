import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

import HeroBackground from "./HeroBackground";
import SearchBar from "./SearchBar";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300"
        >
          🇮🇳 India's Modern Government Exam Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Crack Your
          <span className="block text-blue-500">
            Dream Government Job
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg text-slate-300"
        >
          Prepare smarter with AI-powered learning, daily current affairs,
          mock tests, previous papers, and performance tracking.
        </motion.p>

        <SearchBar />

        <div className="mt-10 flex gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
            Start Learning
            <ArrowRight size={18} />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 transition hover:border-blue-500">
            <BookOpen size={18} />
            Explore Courses
          </button>
        </div>

        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;