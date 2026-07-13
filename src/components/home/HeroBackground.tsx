const HeroBackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-950 to-slate-950" />

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
    </>
  );
};

export default HeroBackground;