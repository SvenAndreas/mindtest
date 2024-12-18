import { useEffect, useState } from "react";

type ValidKeys = 'tasks';

export const useLocalStorage = (key: ValidKeys) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const setItem = (value: unknown) => {
    if (isClient) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getItem = () => {
    if (isClient) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  };

  const removeItem = () => {
    if (isClient) {
      window.localStorage.removeItem(key);
    }
  };

  return { setItem, getItem, removeItem };
};
