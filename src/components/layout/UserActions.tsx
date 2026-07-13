import { Search } from "lucide-react";
import Button from "../ui/Button";

const UserActions = () => {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <button
        className="rounded-full p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      <button className="text-sm font-medium text-slate-300 transition hover:text-white">
        Login
      </button>

      <Button>Get Started</Button>
    </div>
  );
};

export default UserActions;