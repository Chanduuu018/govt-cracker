interface ProgressCardProps {
  icon: string;
  title: string;
  value: string;
}

const ProgressCard = ({
  icon,
  title,
  value,
}: ProgressCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-blue-400">
        {value}
      </p>
    </div>
  );
};

export default ProgressCard;