import { useState, useCallback } from "react";

//Fetching data, handling loading and error state
const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (URL, dataTransformFn) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(URL);

      if (!response.ok) throw new Error(response.status);

      const data = await response.json();

      dataTransformFn(data);
    } catch (error) {
      setError(`${error}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;
