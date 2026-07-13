import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions.tsx";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <NavLinks />

        <UserActions />

        <MobileMenu />
      </div>
    </header>
  );
};

export default Navbar;