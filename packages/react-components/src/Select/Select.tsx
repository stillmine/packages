import React, { forwardRef, SelectHTMLAttributes } from 'react';

import { Stack } from '../Stack/mod';
import { SearchableSelect } from './SearchableSelect';
import { SelectOption } from './SelectOption';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const ForwardedSelect = forwardRef<HTMLSelectElement, Props>(({ children, label, ...props }, ref) => {
  return (
    <Stack.Vertical as="label" gutter={4}>
      <span>{label}</span>
      <select ref={ref} {...props}>
        {children}
      </select>
    </Stack.Vertical>
  );
});

type SelectType = typeof ForwardedSelect & {
  Option: typeof SelectOption;
  Searchable: typeof SearchableSelect;
};

export const Select = ForwardedSelect as SelectType;

Select.Option = SelectOption;
Select.Searchable = SearchableSelect;
