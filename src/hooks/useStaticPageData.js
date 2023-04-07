import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

export const useStaticPageData = (callback, observableParams) => {
  const [data, setData] = useState();
  const [doFetch, isLoading, error] = useFetch(async () => {
    const response = await callback();
    setData(response.data);
  });
  if (!observableParams) {
    observableParams = [];
  }
  useEffect(() => { doFetch() }, observableParams);
  return [data, isLoading, error];
};