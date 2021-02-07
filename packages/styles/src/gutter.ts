import { css } from '@emotion/react';
import { numberToUnit } from '@stillmine/utils';

interface Options {
  direction?: 'horizontal' | 'vertical';
  selector?: string;
  space?: number;
}

export function gutter({ direction = 'vertical', selector = '*', space = 16 }: Readonly<Options>) {
  if (direction === 'vertical') {
    return css`
      & > ${selector} ~ ${selector} {
        margin-top: ${numberToUnit(space)};
      }
    `;
  }

  return css`
    & > ${selector} ~ ${selector} {
      margin-left: ${numberToUnit(space)};
    }
  `;
}
