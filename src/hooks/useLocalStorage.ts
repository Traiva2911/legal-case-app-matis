import { useEffect, useState } from "react";

/** Same storage key contract as the legacy app — do not rename these keys, real user data lives there. */
export function useLocalStorage(key: string, initial: string) {
  const [value, setValue] = useState(() => localStorage.getItem(key) ?? initial);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
