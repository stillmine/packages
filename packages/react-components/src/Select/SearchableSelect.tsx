import { forwardRef, HTMLAttributes } from 'react';

import { Stack } from '../Stack/mod';

interface Props extends HTMLAttributes<HTMLDataListElement> {
  label: string;
}

export const SearchableSelect = forwardRef<HTMLInputElement, Props>(({ children, label }, ref) => {
  return (
    <Stack.Vertical as="label" gutter={4}>
      <span>{label}</span>
      <input list="select" ref={ref} type="text" />
      <datalist id="select">{children}</datalist>
    </Stack.Vertical>
  );
});
