// src/components/Pagination.jsx
export default function Pagination({
  onPageValueChange,
  pageNumbers,
  currentPage,
}) {
  return (
    <div className="flex justify-center items-center m-4 gap-1">
      {pageNumbers?.length > 0 && (
        <button
          disabled={currentPage === 1}
          onClick={() => onPageValueChange(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          &laquo;
        </button>
      )}

      {pageNumbers?.map((number) => (
        <button
          onClick={() => onPageValueChange(number)}
          key={number}
          className={`px-3 py-1 border rounded ${
            currentPage === number ? "bg-blue-500 text-white" : ""
          }`}
        >
          {number}
        </button>
      ))}

      {pageNumbers?.length > 0 && (
        <button
          disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
          onClick={() => onPageValueChange(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          &raquo;
        </button>
      )}
    </div>
  );
}
