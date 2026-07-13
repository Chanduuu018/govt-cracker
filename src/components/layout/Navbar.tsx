const Navbar = () => {
  return (
    <header className="w-full bg-slate-950 border-b border-slate-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-blue-500">
          Govt Cracker
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Courses
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Mock Tests
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Current Affairs
          </a>
        </nav>

        <button className="rounded-lg bg-blue-600 px-5 py-2 hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;