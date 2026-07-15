import { useState } from "react";
import QuestionCard from "../../../components/exam/QuestionCard";
import { test1Questions } from "../../../data/ssc/mock-tests/test1";

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(test1Questions.length).fill(null)
  );

  const handleSelect = (optionIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIndex;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">
            SSC CGL Mock Test
          </h1>

          <span className="rounded-lg bg-blue-600 px-4 py-2 text-white">
            Question {currentQuestion + 1} / {test1Questions.length}
          </span>
        </div>

        <QuestionCard
          question={test1Questions[currentQuestion].question}
          options={test1Questions[currentQuestion].options}
          selected={answers[currentQuestion]}
          onSelect={handleSelect}
        />

        <div className="mt-8 flex justify-between">
          <button
            disabled={currentQuestion === 0}
            onClick={() =>
              setCurrentQuestion((prev) => prev - 1)
            }
            className="rounded-lg bg-slate-700 px-6 py-3 text-white disabled:opacity-50"
          >
            Previous
          </button>

          <button
            disabled={currentQuestion === test1Questions.length - 1}
            onClick={() =>
              setCurrentQuestion((prev) => prev + 1)
            }
            className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;