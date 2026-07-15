interface QuestionCardProps {
  question: string;
  options: string[];
  selected: number | null;
  onSelect: (index: number) => void;
}

const QuestionCard = ({
  question,
  options,
  selected,
  onSelect,
}: QuestionCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
      <h2 className="text-2xl font-bold text-white">
        {question}
      </h2>

      <div className="mt-8 space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-full rounded-xl border p-4 text-left transition ${
              selected === index
                ? "border-blue-500 bg-blue-600 text-white"
                : "border-slate-700 text-slate-300 hover:border-blue-500"
            }`}
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;