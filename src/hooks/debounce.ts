import { useEffect, useState } from "react";

export const useDebounce = (value: unknown, delay = 500): unknown => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
