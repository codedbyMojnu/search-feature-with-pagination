import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";
import UsersInfo from "./components/UsersInfo";
import { MAX_VISIBLE_PAGE, USERS_PER_PAGE } from "./constants/pagination";
import useGithubUsersAPI from "./hooks/useGithubUsersAPI";
import getDynamicPageNumbers from "./utils/get-dynamic-page-numbers";

export default function App() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dynamicPageNumbers, setDynamicPageNumbers] = useState([]);
  const [slicedData, setslicedData] = useState([]);

  const usersData = useGithubUsersAPI(query);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    const items = usersData?.items || [];
    const start = (currentPage - 1) * USERS_PER_PAGE;
    const end = currentPage * USERS_PER_PAGE;

    setslicedData(items.slice(start, end));

    const pageNumbers = getDynamicPageNumbers(
      currentPage,
      MAX_VISIBLE_PAGE,
      USERS_PER_PAGE,
      items.length
    );

    setDynamicPageNumbers(pageNumbers);
  }, [usersData, currentPage]);

  return (
    <>
      <SearchBox onQueryChange={setQuery} query={query} />

      <UsersInfo searchQuery={query} usersData={slicedData} />

      <Pagination
        pageNumbers={dynamicPageNumbers}
        onPageValueChange={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
