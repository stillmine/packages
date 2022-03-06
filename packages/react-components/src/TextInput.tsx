import { Input } from '@chakra-ui/react';
import { OmitProps } from '@stillmine/types';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';

import { Field } from './Field';

interface Props extends OmitProps<typeof Field, 'children'>, ComponentProps<typeof Input> {}

export const TextInput = forwardRef(
  ({ error, errorMessage, label, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Field error={error} errorMessage={errorMessage} label={label}>
        <Input ref={ref} {...props} />
      </Field>
    );
  }
);
