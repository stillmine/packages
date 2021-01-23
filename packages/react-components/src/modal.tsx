import { useVisible } from '@stillmine/hooks';
import { DialogHTMLAttributes, FC } from 'react';

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  visible?: boolean;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  const [visible] = useVisible(false);

  return <dialog open={visible}>{children}</dialog>;
};
