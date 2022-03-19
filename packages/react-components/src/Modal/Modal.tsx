import { useBoolean } from '@stillmine/hooks';
import { DialogHTMLAttributes } from 'react';

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {}

export function Modal({ open = false, ...props }: Props) {
  const [visible] = useBoolean(open);

  return <dialog open={visible} {...props} />;
}
