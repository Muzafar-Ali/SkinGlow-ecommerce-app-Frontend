import { CategoryType } from "@/utils/types";
import { useEffect, useState } from "react";


export const useFetchCategories = (url: string) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data.category || []); // Handle cases where data.category might be undefined
      } catch (error: any) {
        setError(error.message || 'An error occurred'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { categories, loading, error };
};