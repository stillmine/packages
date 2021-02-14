import { css } from '@emotion/react';
import { resetButton } from '@stillmine/styles';
import { Color } from '@stillmine/units';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const TabItem = forwardRef<HTMLButtonElement, Props>(({ active, ...props }, ref) => {
  return (
    <button
      aria-selected={active}
      css={[resetButton, css(`color: ${active ? Color.black : Color.githubGray}`)]}
      ref={ref}
      role="tab"
      {...props}
    />
  );
});
