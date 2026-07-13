const HeroStats = () => {
  const stats = [
    { value: "100K+", label: "Students" },
    { value: "5000+", label: "Questions" },
    { value: "1000+", label: "Mock Tests" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="text-center">
          <h2 className="text-3xl font-bold text-blue-500">
            {item.value}
          </h2>

          <p className="mt-2 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;