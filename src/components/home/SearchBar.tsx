import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="mt-10 flex w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
      <input
        type="text"
        placeholder="Search SSC, Banking, RRB..."
        className="w-full bg-transparent px-6 py-4 outline-none"
      />

      <button className="bg-blue-600 px-6 transition hover:bg-blue-700">
        <Search />
      </button>
    </div>
  );
};

export default SearchBar;