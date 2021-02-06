import { As, OmitProps } from '@stillmine/types';
import { forwardRef } from 'react';

import { Stack } from './Stack';

interface Props extends OmitProps<typeof Stack, 'direction'> {}

export const HorizontalStack = forwardRef<As, Props>((props, ref) => {
  return <Stack direction="horizontal" ref={ref} {...props} />;
});
