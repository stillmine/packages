import { ComponentProps, forwardRef } from 'react';
import { Stack } from 'src/Stack/mod';

interface Props extends Omit<ComponentProps<typeof Stack>, 'direction'> {}

export const VerticalStack = forwardRef<any, Props>((props, ref) => {
  return <Stack direction="vertical" ref={ref} {...props} />;
});
