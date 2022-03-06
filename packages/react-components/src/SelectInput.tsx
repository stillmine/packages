import { Select } from '@chakra-ui/react';
import { OmitProps } from '@stillmine/types';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';

import { Field } from './Field';

interface Props extends OmitProps<typeof Field, 'children'>, ComponentProps<typeof Select> {}

export const SelectInput = forwardRef(
  ({ error, errorMessage, label, ...props }: Props, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <Field error={error} errorMessage={errorMessage} label={label}>
        <Select ref={ref} {...props} />
      </Field>
    );
  }
);
