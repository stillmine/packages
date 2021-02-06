import { css } from '@emotion/react';
import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: any;
  color?: string;
}

export const Button: FC<Props> = ({ as: Component = 'button', children, ...props }) => {
  return (
    <Component
      css={css`
        background-color: #000;
        color: #fff;

        &:hover {
          background-color: #555;
        }
      `}
      {...props}
    >
      {children}
    </Component>
  );
};
