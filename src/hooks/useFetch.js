import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, SetError] = useState(false);
  useEffect(() => {
    async function fetching() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Something went wrong...");
        }
        const resData = await res.json();
        setData(resData.products);
        setLoading(false);
        SetError(false);
      } catch (error) {
        setLoading(false);
        SetError(error.message);
      }
    }

    fetching();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
