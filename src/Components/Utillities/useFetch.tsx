import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setdata] = useState<T>();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        response.json().then((result) => {
          setdata(result);
        });
      })
      .catch((error) => {
        seterror(error.message);
      })
      .finally(() => {
        setloading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
