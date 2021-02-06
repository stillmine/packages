import { ComponentProps, forwardRef } from 'react';
import { Flex } from 'src/Flex/mod';

interface Props extends Omit<ComponentProps<typeof Flex>, 'align' | 'justify'> {}

export const FlexCenter = forwardRef<any, Props>((props, ref) => {
  return <Flex align="center" justify="center" ref={ref} {...props} />;
});
