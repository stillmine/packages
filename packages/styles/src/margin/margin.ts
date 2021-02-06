import { css } from '@emotion/react';

import { marginTop } from './margin-top';
import { marginY } from './margin-y';

interface Options {
  top?: number;
  x?: number;
  y?: number;
}

export function margin(options: Options) {
  const { top, x, y } = options;

  if (x != null) {
    return css`
      margin-left: ${x}px;
      margin-right: ${x}px;
    `;
  }

  if (y != null) {
    return css`
      margin-bottom: ${y}px;
      margin-top: ${y}px;
    `;
  }

  return css`
    margin-top: ${top}px;
  `;
}

margin.top = marginTop;
margin.y = marginY;
