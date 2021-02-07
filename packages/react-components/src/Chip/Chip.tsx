import { css } from '@emotion/react';
import { As } from '@stillmine/types';
import { Color } from '@stillmine/units';
import { ComponentProps, forwardRef } from 'react';

import { Button } from '../Button/mod';

interface Props extends ComponentProps<As> {
  color?: string;
}

export const Chip = forwardRef<As, Props>((props, ref) => {
  return (
    <Button
      css={css`
        background-color: ${Color.tossBlue};
        border-radius: 9999px;
        color: ${Color.white};
        padding: 4px 12px;

        &:hover {
          background-color: ${Color.facebookBlue};
        }
      `}
      ref={ref}
      {...props}
    />
  );
});
