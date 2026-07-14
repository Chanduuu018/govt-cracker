interface ExamHeroProps {
  title: string;
  description: string;
}

const ExamHero = ({ title, description }: ExamHeroProps) => {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 backdrop-blur-md">
      <h1 className="text-5xl font-bold text-white">
        {title}
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-slate-400">
        {description}
      </p>

      <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
        Continue Learning
      </button>
    </section>
  );
};

export default ExamHero;