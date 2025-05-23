import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";
import UsersInfo from "./components/UsersInfo";
import useGithubUsersAPI from "./hooks/useGithubUsersAPI";
import getDynamicPageNumbers from "./utils/get-dynamic-page-numbers";

export default function App() {
  const [query, setQuery] = useState("");
  const [dynamicPageNumbers, setDynamicPageNumbers] = useState(null);
  const [currentPageValue, setCurrentPageValue] = useState(1);
  const [sliceData, setSliceData] = useState(null);
  const usersData = useGithubUsersAPI(query);

  let usersDataPerPage = 3;
  let maxVisiblePage = 5;

  useEffect(() => {
    // Whenever the search query changes, reset to first page
    setCurrentPageValue(1);
  }, [query]);

  useEffect(() => {
    const sliceUserData = usersData?.items?.slice(
      (currentPageValue - 1) * usersDataPerPage,
      currentPageValue * usersDataPerPage
    );

    setSliceData(sliceUserData);
  }, [usersData, currentPageValue, usersDataPerPage]);

  useEffect(() => {
    const pageNumbers = getDynamicPageNumbers(
      currentPageValue,
      maxVisiblePage,
      usersDataPerPage,
      usersData?.items.length
    );
    setDynamicPageNumbers(pageNumbers);
  }, [
    currentPageValue,
    maxVisiblePage,
    usersDataPerPage,
    usersData?.items?.length,
  ]);

  function handleSearchQuery(searchQuery) {
    setQuery(searchQuery);
  }

  function handlePageValueChange(pageNumber) {
    setCurrentPageValue(pageNumber);
  }

  return (
    <>
      <SearchBox onQueryChange={handleSearchQuery} query={query} />

      <UsersInfo searchQuery={query} usersData={sliceData} />

      <Pagination
        pageNumbers={dynamicPageNumbers}
        onPageValueChange={handlePageValueChange}
      />
    </>
  );
}
