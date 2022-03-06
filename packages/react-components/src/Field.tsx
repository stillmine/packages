import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  error?: boolean;
  errorMessage?: string;
  label?: ReactNode;
}

export function Field({ children, error, errorMessage, label }: Props) {
  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
