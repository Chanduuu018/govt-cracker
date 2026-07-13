const Logo = () => {
  return (
    <a
      href="/"
      className="flex items-center gap-3 text-white transition-transform duration-300 hover:scale-105"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold shadow-lg shadow-blue-600/30">
        GC
      </div>

      <div>
        <h1 className="text-lg font-bold leading-none">
          Govt Cracker
        </h1>

        <p className="text-xs text-slate-400">
          Crack Your Dream Job
        </p>
      </div>
    </a>
  );
};

export default Logo;