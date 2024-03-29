import { As } from '@stillmine/types';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface Props extends ComponentProps<As> {
  as?: As;
  level: Level;
}

function font(level: Level) {
  switch (level) {
    case 1:
      return {
        fontSize: '1rem',
      };
    case 3:
      return {
        fontSize: '1.5rem',
        fontWeight: 700,
      };
    default:
      return {
        fontSize: '1rem',
      };
  }
}

export const Text = forwardRef(function Text(
  { as: Component = 'p', level = 4, ...props }: Props,
  ref: ForwardedRef<As>
) {
  return <Component css={font(level)} ref={ref} {...props} />;
});
