import { useCallback, useState } from 'react';

export function useBoolean(initialActive: boolean) {
  const [active, setActive] = useState(initialActive);

  const on = useCallback(() => {
    setActive(true);
  }, []);

  const off = useCallback(() => {
    setActive(false);
  }, []);

  const toggle = useCallback(() => {
    setActive(active => !active);
  }, []);

  return [active, on, off, toggle] as const;
}
