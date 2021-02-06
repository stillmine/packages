import { css } from '@emotion/react';

interface Options {
  direction?: 'horizontal' | 'vertical';
  size?: number;
}

export function gutter(options: Options) {
  const { direction = 'vertical', size = 16 } = options;

  if (direction === 'vertical') {
    return css`
      & > * ~ * {
        margin-top: ${size}px;
      }
    `;
  }

  return css`
    & > * ~ * {
      margin-left: ${size}px;
    }
  `;
}
