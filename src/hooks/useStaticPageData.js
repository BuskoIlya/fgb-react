import React from 'react';
import { useFetch } from './useFetch';

export const useStaticPageData = (callback) => {
  const [data, setData] = React.useState();
  const [doFetch, isLoading, error] = useFetch(async () => {
    const response = await callback();
    setData(response.data);
  });
  React.useEffect(() => { doFetch() }, []);
  return [data, isLoading, error];
};