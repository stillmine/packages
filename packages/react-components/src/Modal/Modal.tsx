import { useBoolean } from '@stillmine/hooks';
import { DialogHTMLAttributes } from 'react';

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {}

export const Modal = ({ open = false, ...props }: Props) => {
  const [visible] = useBoolean(open);

  return <dialog open={visible} {...props} />;
};
