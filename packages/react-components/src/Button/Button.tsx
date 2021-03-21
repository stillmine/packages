import { css } from '@emotion/react';
import { As } from '@stillmine/types';
import { Color } from '@stillmine/units';
import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<As> {
  as?: As;
  color?: string;
}

export const Button = forwardRef<As, Props>(({ as: Component = 'button', ...props }, ref) => {
  return (
    <Component
      css={css`
        border: 0;
        border-radius: 4px;
        color: ${Color.black};
        cursor: pointer;
        padding: 12px 16px;
        transition: background-color 0.2s ease;
      `}
      ref={ref}
      {...props}
    />
  );
});
