const links = [
  "Home",
  "Exams",
  "Mock Tests",
  "Current Affairs",
  "Notes",
  "About",
];

const NavLinks = () => {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {links.map((link) => (
        <a
  key={link}
  href="#"
  className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
>
  {link}

  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
</a>
      ))}
    </nav>
  );
};

export default NavLinks;