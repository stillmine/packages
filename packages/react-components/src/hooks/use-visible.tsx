import { useCallback, useState } from 'react';

export function useVisible(defaultVisible: boolean) {
  const [visible, setVisible] = useState(defaultVisible);

  const show = useCallback(() => {
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    setVisible(false);
  }, []);

  return [visible, show, hide] as const;
}
