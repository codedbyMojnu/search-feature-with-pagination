export default function Searchbar({ onQueryChange, query }) {
  return (
    <div className="flex justify-center items-center m-4">
      <input
        type="text"
        placeholder="Search by your github name..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="px-4 py-2 border w-80 border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
      />
    </div>
  );
}
