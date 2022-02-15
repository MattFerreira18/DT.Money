import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export function useLocalStorage<StorageData = string>(
  key: string,
  initialValue: StorageData,
  ): [StorageData | null, (newValue: StorageData) => void, () => void] {
  const getStoredData = useCallback(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  }, [initialValue, key]);

  const location = useLocation();
  const [state, setState] = useState<StorageData | null>(() => getStoredData());

  function updateStorage(newValue: StorageData) {
    setState(newValue);

    localStorage.setItem(key, JSON.stringify(newValue));
  }

  function destroyStorage() {
    setState(null);

    localStorage.removeItem(key);
  }

  useEffect(() => {
    setState(() => getStoredData());
  }, [getStoredData, location.pathname]);

  return [state, updateStorage, destroyStorage];
}
