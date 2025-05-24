import { useEffect, useState } from "react";

// ✅ Custom Hook: Search Query অনুযায়ী API কল করে রেজাল্ট, লোডিং ও এরর রিটার্ন করে
export default function useSearchAPI(searchQuery) {
  const [data, setData] = useState({ items: [] }); // API response data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error message

  useEffect(() => {
    const controller = new AbortController(); // ✅ পুরাতন অনুরোধ বাতিলের জন্য
    const timeoutId = setTimeout(() => {
      const query = searchQuery.trim();

      // ✅ খালি query হলে ডেটা রিসেট করে ফেলে
      if (!query) {
        setData({ items: [] });
        setLoading(false);
        setError(null);
        return;
      }

      const fetchData = async () => {
        setLoading(true);
        setError(null); // ✅ নতুন কল শুরু করলে error মুছে ফেলি

        try {
          const response = await fetch(
            `${import.meta.env.VITE_SERVER_BASE_API_URL}=${query}`,
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
              },
              signal: controller.signal, // ✅ অনুরোধ বাতিল করার জন্য
            }
          );

          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }

          const result = await response.json();
          setData(result);
        } catch (err) {
          // ✅ যদি ইউজার অন্য কিছু টাইপ করে ফেলেন, AbortError হলে ইগনোর করি
          if (err.name !== "AbortError") {
            setError(err.message || "Something went wrong");
            setData({ items: [] });
          }
        } finally {
          setLoading(false); // ✅ শেষ হোক যেভাবেই, লোডিং false করব
        }
      };

      fetchData();
    }, 500); // ✅ 500ms delay দিয়ে টাইপিং শেষে API call

    // ✅ Cleanup: নতুন টাইপ করলে আগের টাইমআউট এবং ফেচ বাতিল
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  return { data, loading, error };
}
