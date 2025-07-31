import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-8">
      <div className="relative max-w-xl mx-auto">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500 text-xl pointer-events-none">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or specialization…"
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white text-gray-800 transition"
        />
      </div>
    </div>
  );
}

export default SearchBar;
