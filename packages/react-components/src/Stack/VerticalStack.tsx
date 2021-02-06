import { ComponentProps, forwardRef } from 'react';

import { Stack } from './Stack';

interface Props extends Omit<ComponentProps<typeof Stack>, 'direction'> {}

export const VerticalStack = forwardRef<any, Props>((props, ref) => {
  return <Stack direction="vertical" ref={ref} {...props} />;
});
