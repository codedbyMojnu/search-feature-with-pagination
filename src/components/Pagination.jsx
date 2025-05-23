import { useState } from "react";

export default function Pagination({ onPageValueChange, pageNumbers }) {
  const [acitvePage, setActivePage] = useState(1);

  function handleActivePage(number) {
    setActivePage(number);
  }
  return (
    <div className="flex justify-center items-center m-4">
      {pageNumbers?.map((number, index) => (
        <button
          onClick={() => {
            onPageValueChange(number);
            handleActivePage(number);
          }}
          key={index}
          className={`mx-1 px-4 py-2 text-sm font-medium  border border-gray-300 rounded hover:bg-gray-100 ${
            acitvePage === number
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 "
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
}
