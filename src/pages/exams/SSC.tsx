import ExamHero from "../../components/exam/ExamHero";
import ProgressGrid from "../../components/exam/ProgressGrid";
const SSC = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <ExamHero
          title="SSC CGL Preparation"
          description="Everything you need to crack SSC CGL with AI-powered learning, previous year papers, mock tests, and smart study plans."
        />
        <ProgressGrid />
      </div>
    </div>
  );
};

export default SSC;