import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <button
      className="rounded-lg p-2 text-white transition hover:bg-slate-800 lg:hidden"
      aria-label="Open Menu"
    >
      <Menu size={26} />
    </button>
  );
};

export default MobileMenu;