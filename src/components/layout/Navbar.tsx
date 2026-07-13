import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions.tsx";
import MobileMenu from "./MobileMenu";
import Container from "../ui/Container";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <Container>
  <div className="flex h-20 items-center justify-between">
        <Logo />

        <NavLinks />

        <UserActions />

        <MobileMenu />
       </div>
</Container>
</header>
  );
};

export default Navbar;