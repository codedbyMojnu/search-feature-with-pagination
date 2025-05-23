export default function Pagination({ onPageValueChange, pageNumbers }) {
  return (
    <div className="flex justify-center items-center m-4">
      {pageNumbers?.map((number, index) => (
        <button
          onClick={() => onPageValueChange(number)}
          key={index}
          className="mx-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {number}
        </button>
      ))}
    </div>
  );
}
