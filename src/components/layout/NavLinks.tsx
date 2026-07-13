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
          className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;