import { OmitProps } from '@stillmine/types';
import { createMask } from 'imask';
import { ChangeEvent, ForwardedRef, forwardRef } from 'react';

import { TextInput } from './TextInput';

interface Props extends OmitProps<typeof TextInput, 'type' | 'value' | 'onChange'> {
  value?: string;
  onChange?: (value: number) => void;
}

const masked = createMask({
  mask: Number,
  thousandsSeparator: ',',
});

export const CurrencyInput = forwardRef(({ value, onChange, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <TextInput
      ref={ref}
      type="tel"
      value={masked.resolve(value ?? '')}
      onChange={({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        onChange?.(Number(value.replaceAll(',', '')));
      }}
      {...props}
    />
  );
});
