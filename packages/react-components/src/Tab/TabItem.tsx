import { resetButton } from '@stillmine/styles';
import { color } from '@stillmine/units';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const TabItem = forwardRef<HTMLButtonElement, Props>(({ active, ...props }, ref) => {
  return (
    <button
      aria-selected={active}
      css={[resetButton, { color: active ? color.black : color.gray.github }]}
      ref={ref}
      role="tab"
      {...props}
    />
  );
});
