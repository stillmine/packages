import { As, OmitProps } from '@stillmine/types';
import { ForwardedRef, forwardRef } from 'react';

import { Flex } from './Flex';

interface Props extends OmitProps<typeof Flex, 'align' | 'justify'> {}

export const FlexCenter = forwardRef(function FlexCenter(props: Props, ref: ForwardedRef<As>) {
  return <Flex align="center" justify="center" ref={ref} {...props} />;
});
