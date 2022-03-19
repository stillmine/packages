import { As } from '@stillmine/types';
import { color } from '@stillmine/units';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';

import { Button } from '../Button/mod';

interface Props extends ComponentProps<As> {
  color?: string;
}

export const Chip = forwardRef(function Chip(props: Props, ref: ForwardedRef<As>) {
  return (
    <Button
      css={{
        'backgroundColor': color.blue.toss,
        'borderRadius': 9999,
        'color': color.white,
        'padding': '4px 12px',

        '&:hover': {
          backgroundColor: color.blue.facebook,
        },
      }}
      ref={ref}
      {...props}
    />
  );
});
