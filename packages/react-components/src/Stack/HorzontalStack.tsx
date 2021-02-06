import { ComponentProps, forwardRef } from 'react';
import { Stack } from 'src/Stack/mod';

interface Props extends Omit<ComponentProps<typeof Stack>, 'direction'> {}

export const HorizontalStack = forwardRef<any, Props>((props, ref) => {
  return <Stack direction="horizontal" ref={ref} {...props} />;
});
