import { useState } from 'react';

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const doFetch = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
      setError(e.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [doFetch, isLoading, error];
};