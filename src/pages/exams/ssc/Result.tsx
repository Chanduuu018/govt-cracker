import { useLocation, Link } from "react-router-dom";

const Result = () => {
  const location = useLocation();

  const {
    score = 0,
    total = 0,
  } = location.state || {};

  const accuracy =
    total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-2xl bg-slate-900 p-8 text-center">
        <h1 className="text-5xl font-bold text-white">
          🎉 Test Completed
        </h1>

        <p className="mt-8 text-2xl text-blue-400">
          Score: {score} / {total}
        </p>

        <p className="mt-4 text-xl text-white">
          Accuracy: {accuracy}%
        </p>

        <Link
          to="/ssc/mock-tests"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Back to Mock Tests
        </Link>
      </div>
    </div>
  );
};

export default Result;