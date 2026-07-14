import Section from "../ui/Section";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { examCategories } from "../../constants/examCategories";

import { ArrowRight } from "lucide-react";
const PopularExams = () => {
  return (
    <Section className="scroll-mt-24" id="popular-exams">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">
          Popular Exams
        </h2>

        <p className="mt-4 text-slate-400">
          Choose your exam and start preparing today.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examCategories.map((exam) => (
          <motion.div
  key={exam.title}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
  duration: 0.5,
  delay: examCategories.indexOf(exam) * 0.1,
}}
>
  <Card>
    <div className="text-5xl">{exam.icon}</div>

    <h3 className="mt-4 text-2xl font-semibold text-white">
      {exam.title}
    </h3>

    <p className="mt-4 text-slate-400">
      {exam.questions} Questions
    </p>

    <p className="text-slate-400">
      {exam.mocks} Mock Tests
    </p>
    <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700">
  Start Learning
  <ArrowRight size={18} />
</button>
  </Card>
</motion.div>
        ))}
      </div>
    </Section>
  );
};

export default PopularExams;