import { useState } from "react";

export function useFetching(callback: () => any) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetching = async (...args: any) => {
    try {
      setIsLoading(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
}
