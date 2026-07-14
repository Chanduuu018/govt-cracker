interface QuickAccessCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const QuickAccessCard = ({
  icon,
  title,
  subtitle,
}: QuickAccessCardProps) => {
  return (
    <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {subtitle}
      </p>

      <p className="mt-6 font-medium text-blue-400 transition group-hover:translate-x-1">
        Open →
      </p>
    </div>
  );
};

export default QuickAccessCard;