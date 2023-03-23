import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

export const useStaticPageData = (callback) => {
  const [data, setData] = useState();
  const [doFetch, isLoading, error] = useFetch(async () => {
    const response = await callback();
    setData(response.data);
  });
  useEffect(() => { doFetch() }, []);
  return [data, isLoading, error];
};