import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

const useFetch = (endpoint) => {
  const [data, setData] = useState( ); // Set initial state to null

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
        console.log(res);
      } catch (error) {
        console.error('API call failed:', error);
        // You could also set an error state here if needed
      }
    };

    makeApiCall(); // Immediately invoke the async function
  }, [endpoint]);

  return { data };
};

export default useFetch;



