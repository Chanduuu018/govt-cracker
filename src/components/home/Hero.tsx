import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-slate-950" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
        >
          🇮🇳 India's Modern Government Exam Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Crack Your
          <span className="block text-blue-500">Dream Government Job</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          Daily Current Affairs, Mock Tests, PYQs, Notes and Smart
          Performance Tracking — All in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700">
            Start Learning
            <ArrowRight size={18} />
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3 font-semibold transition hover:border-blue-500">
            <BookOpen size={18} />
            Explore Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;