import { useCallback, useState } from 'react';

export function useBoolean(
  initialActive: boolean
): [active: boolean, on: () => void, off: () => void, toggle: () => void] {
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

  return [active, on, off, toggle];
}
