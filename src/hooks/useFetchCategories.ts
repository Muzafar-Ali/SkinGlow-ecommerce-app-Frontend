import { CategoryType } from '@/utils/types';
import { useEffect, useState } from 'react';


export const useFetchCategories = (url: string, setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>) => {
 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
            method: 'GET', // Assuming a GET request
            headers: {
              'Content-Type': 'application/json', // Optional content type
            },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json(); // Assuming the API returns an array of CategoryType objects directly

        setCategories(data.category);
      } catch (error: any) {
      } finally {
        setLoading(false);  
      }
    };

    fetchData();
  }, [url]); // Re-run effect when URL changes


}
