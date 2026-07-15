import { useNavigate } from "react-router-dom";

interface MockTestCardProps {
  title: string;
  questions: number;
  duration: number;
  difficulty: string;
}

const MockTestCard = ({
  title,
  questions,
  duration,
  difficulty,
}: MockTestCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-4 space-y-2 text-slate-400">
        <p>📝 {questions} Questions</p>
        <p>⏱ {duration} Minutes</p>
        <p>🎯 {difficulty}</p>
      </div>

      <button
        onClick={() => navigate("/ssc/test/1")}
        className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Start Test
      </button>
    </div>
  );
};

export default MockTestCard;