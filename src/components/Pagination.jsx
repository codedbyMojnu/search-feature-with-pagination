// src/components/Pagination.jsx

export default function Pagination({
  onPageValueChange,
  pageNumbers,
  currentPage,
}) {
  return (
    <div className="flex justify-center items-center m-4 gap-1">
      {/* ◀️ Previous Button */}
      <button
        disabled={currentPage === 1} // প্রথম পেজে গেলে disable
        onClick={() => onPageValueChange(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        &laquo;
      </button>

      {/* 🔢 Dynamic Page Number Buttons */}
      {pageNumbers?.map((number) => (
        <button
          key={number}
          onClick={() => onPageValueChange(number)} // পেজ নাম্বার চেঞ্জ
          className={`px-3 py-1 border rounded ${
            currentPage === number ? "bg-blue-500 text-white" : ""
          }`}
        >
          {number}
        </button>
      ))}

      {/* ▶️ Next Button */}
      <button
        disabled={currentPage === pageNumbers[pageNumbers.length - 1]} // শেষ পেজে গেলে disable
        onClick={() => onPageValueChange(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        &raquo;
      </button>
    </div>
  );
}
