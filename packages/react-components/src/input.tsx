import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, inputMode, type }) => {
  return <input className={className} inputMode={inputMode} type={type} />;
};
