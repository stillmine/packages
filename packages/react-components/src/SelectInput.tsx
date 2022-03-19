import { useId } from '@reach/auto-id';
import { Select } from '@chakra-ui/react';
import { OmitProps } from '@stillmine/types';
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';

import { Field } from './Field';

interface Props extends OmitProps<typeof Field, 'children'>, ComponentPropsWithoutRef<typeof Select> {}

const BaseSelectInput = forwardRef(function BaseSelectInput(
  { error, errorMessage, label, ...props }: Props,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <Field error={error} errorMessage={errorMessage} label={label}>
      <Select ref={ref} {...props} />
    </Field>
  );
});

const SearchableSelectInput = forwardRef(function SearchableSelectInput(
  { children, error, errorMessage, id, label, ...props }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const uuid = useId(id);

  return (
    <Field error={error} errorMessage={errorMessage} label={label}>
      <input list={uuid} ref={ref} type="text" {...props} />
      <datalist id={uuid}>{children}</datalist>
    </Field>
  );
});

type SelectInput = typeof BaseSelectInput & {
  Searchable: typeof SearchableSelectInput;
};

export const SelectInput = BaseSelectInput as SelectInput;

SelectInput.Searchable = SearchableSelectInput;
