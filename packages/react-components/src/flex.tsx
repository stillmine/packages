import { css } from '@emotion/core';
import { FC } from 'react';

interface Props {
  align?: 'center' | 'flex-end' | 'flex-start';
  as?: any;
  direction?: 'column' | 'row';
  justify?: 'center' | 'flex-end' | 'flex-start';
}

export const Flex: FC<Props> = ({
  align = 'flex-start',
  as: Component = 'div',
  children,
  direction,
  justify = 'flex-start',
}) => {
  return (
    <Component
      css={css`
        align-items: ${align};
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
      `}
    >
      {children}
    </Component>
  );
};
