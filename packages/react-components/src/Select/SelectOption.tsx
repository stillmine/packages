import { OptionHTMLAttributes } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement> {}

export const SelectOption = ({ children, value }: Props) => {
  return <option value={value}>{children}</option>;
};
