import { useEffect, useState } from "react";

export default function useGithubUsersAPI(searchQuery) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    const timeOutId = setTimeout(() => {
      if (!searchQuery.trim()) {
        setData({ items: [] }); // ✅ Make sure this line exists
        return;
      }

      async function fetchUsers() {
        await fetch(`https://api.github.com/search/users?q=${searchQuery}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (!ignore) {
              setData(data);
            }
          });
      }

      fetchUsers();
    }, 500);

    return () => {
      ignore = true;
      clearTimeout(timeOutId);
    }; // ignore true for new keystroke
  }, [searchQuery]);
  return data;
}
