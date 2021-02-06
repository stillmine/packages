import { css } from '@emotion/react';
import { As } from '@stillmine/types';
import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<As> {
  as?: As;
  color?: string;
}

export const Button = forwardRef<HTMLButtonElement, Props>(({ as: Component = 'button', ...props }, ref) => {
  return (
    <Component
      css={css`
        background-color: #000;
        color: #fff;

        &:hover {
          background-color: #555;
        }
      `}
      ref={ref}
      {...props}
    />
  );
});
