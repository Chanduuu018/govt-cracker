import ProgressCard from "./ProgressCard";

const ProgressGrid = () => {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <ProgressCard
        icon="📚"
        title="Notes Completed"
        value="42"
      />

      <ProgressCard
        icon="🧪"
        title="Mock Tests"
        value="18"
      />

      <ProgressCard
        icon="🔥"
        title="Study Streak"
        value="12 Days"
      />

      <ProgressCard
        icon="⭐"
        title="Accuracy"
        value="87%"
      />
    </div>
  );
};

export default ProgressGrid;