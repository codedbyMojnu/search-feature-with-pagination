export default function Searchbar({ query, onQueryChange, onTyping }) {
  return (
    <div className="flex justify-center items-center m-4">
      <input
        type="text"
        placeholder="Search by your GitHub username..."
        value={query}
        onChange={(e) => {
          // ✅ User কিছু টাইপ করলে সেটি parent কে জানিয়ে দাও
          onTyping(true); // বলে দাও টাইপিং হচ্ছে
          onQueryChange(e.target.value); // query আপডেট করো
        }}
        className="px-4 py-2 border w-80 border-gray-300 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
      />
    </div>
  );
}
