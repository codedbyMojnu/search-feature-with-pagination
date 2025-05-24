import { useEffect, useState } from "react";
import DisplayData from "./components/DisplayData";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";
import { DATA_PER_PAGE, MAX_VISIBLE_PAGE } from "./constants/pagination";
import useSearchAPI from "./hooks/useSearchAPI";
import getDynamicPageNumbers from "./utils/get-dynamic-page-numbers";

export default function App() {
  // Local states
  const [query, setQuery] = useState(""); // Search input
  const [currentPage, setCurrentPage] = useState(1); // Current pagination page, set Default 1
  const [pageNumbers, setPageNumbers] = useState([]); // Visible page numbers
  const [currentItems, setCurrentItems] = useState([]); // Items shown on current page
  const [isTyping, setIsTyping] = useState(false); // Typing indicator

  // Custom hook for fetching user data based on search query
  const { data, loading, error } = useSearchAPI(query);

  // Reset to page 1 when new query is typed
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  // Handle "Typing..." indicator logic
  useEffect(() => {
    if (!query.trim()) {
      setIsTyping(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIsTyping(false); // Stop typing after delay
    }, 500);

    return () => clearTimeout(timeout); // Clear timeout on next key press
  }, [query]);

  // Slice data + calculate page numbers when data or page changes
  useEffect(() => {
    const items = data?.items || [];

    // Get items for current page
    const startIndex = (currentPage - 1) * DATA_PER_PAGE;
    const endIndex = currentPage * DATA_PER_PAGE;
    setCurrentItems(items.slice(startIndex, endIndex));

    // Generate visible page numbers (pagination window)
    const visiblePages = getDynamicPageNumbers(
      currentPage,
      MAX_VISIBLE_PAGE,
      DATA_PER_PAGE,
      items.length
    );
    setPageNumbers(visiblePages);
  }, [data, currentPage]);

  return (
    <div className="p-4 space-y-6">
      {/* 🔍 Search box with typing tracker */}
      <SearchBox
        onQueryChange={setQuery}
        query={query}
        onTyping={setIsTyping}
      />

      {/* ℹ️ Status messages: Typing, Loading, Errors, Empty results */}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {isTyping && <p className="text-yellow-500">Typing...</p>}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* No results */}
        {!isTyping &&
          !loading &&
          !error &&
          query.trim() &&
          data?.items?.length === 0 && <p>No results found.</p>}

        {/* Initial help message */}
        {!loading && !error && query.trim() === "" && (
          <p className="text-center">
            If you are a developer, <br />
            Try searching your GitHub username & see the magic ✨
          </p>
        )}
      </div>

      {/* 🧾 Show user cards for current page */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 min-h-[100px]">
        {!loading && !error && query.trim() && currentItems.length > 0 && (
          <DisplayData data={currentItems} />
        )}
      </div>

      {/* 🔢 Pagination component */}
      {pageNumbers.length > 0 && (
        <Pagination
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          onPageValueChange={setCurrentPage}
        />
      )}
    </div>
  );
}
