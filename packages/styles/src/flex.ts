import { css } from '@emotion/react';
import { CSSProperties } from 'react';

interface Options {
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
}

export function flex(options: Options) {
  const { align = 'flex-start', direction = 'row', justify = 'flex-start' } = options;

  return css`
    align-items: ${align};
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
  `;
}
