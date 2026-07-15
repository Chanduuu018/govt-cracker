import MockTestCard from "../../../components/exam/MockTestCard";
import { mockTests } from "../../../data/ssc/mockTests";

const MockTests = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-bold text-white">
          🧪 SSC Mock Tests
        </h1>

        <p className="mt-4 text-slate-400">
          Practice with full-length mock tests and improve your score.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((test) => (
            <MockTestCard
              key={test.id}
              title={test.title}
              questions={test.questions}
              duration={test.duration}
              difficulty={test.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTests;