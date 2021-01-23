import { DialogHTMLAttributes, FC } from 'react';

import { useVisible } from './hooks/mod';

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  visible?: boolean;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  const [visible] = useVisible(false);

  return <dialog open={visible}>{children}</dialog>;
};
