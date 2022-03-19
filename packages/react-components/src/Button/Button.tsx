import { As } from '@stillmine/types';
import { color } from '@stillmine/units';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';

interface Props extends ComponentProps<As> {
  as?: As;
  color?: string;
}

export const Button = forwardRef(function Button({ as: Component = 'button', ...props }: Props, ref: ForwardedRef<As>) {
  return (
    <Component
      css={{
        border: 0,
        borderRadius: 4,
        color: color.black,
        cursor: 'pointer',
        padding: '12px 16px',
        transition: 'background-color 0.2s ease',
      }}
      ref={ref}
      {...props}
    />
  );
});
