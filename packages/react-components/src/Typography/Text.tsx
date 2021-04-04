import { As } from '@stillmine/types';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<As> {
  as?: As;
  color?: string;
}

export const Text = ({ as: Component = 'p', ...props }: Props) => {
  return <Component {...props} />;
};
