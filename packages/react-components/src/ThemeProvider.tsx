import { ChakraProvider } from '@chakra-ui/react';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof ChakraProvider> {}

export function ThemeProvider(props: Props) {
  return <ChakraProvider {...props} />;
}
