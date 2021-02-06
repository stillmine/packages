import { As, OmitProps } from '@stillmine/types';
import { forwardRef } from 'react';

import { Flex } from './Flex';

interface Props extends OmitProps<typeof Flex, 'align' | 'justify'> {}

export const FlexCenter = forwardRef<As, Props>((props, ref) => {
  return <Flex align="center" justify="center" ref={ref} {...props} />;
});
