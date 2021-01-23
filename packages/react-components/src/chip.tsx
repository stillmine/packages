import { css } from '@emotion/core';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export const Chip: FC<Props> = ({ children }) => {
  return (
    <div
      css={css`
        border: 1px solid #333;
        border-radius: 9999px;
        padding: 4px 12px;
      `}
    >
      {children}
    </div>
  );
};
