import { gutter } from '@stillmine/styles';
import { As, OmitProps } from '@stillmine/types';
import { forwardRef } from 'react';

import { Flex } from '../Flex';
import { HorizontalStack } from './HorzontalStack';
import { VerticalStack } from './VerticalStack';

type GutterOptions = Parameters<typeof gutter>[0];

interface Props extends OmitProps<typeof Flex, 'direction'>, Omit<GutterOptions, 'space'> {
  gutter?: GutterOptions['space'];
}

const ForwardedStack = forwardRef<As, Props>(({ direction = 'vertical', gutter: space, ...props }, ref) => {
  return (
    <Flex
      css={gutter({ direction, space })}
      direction={direction === 'vertical' ? 'column' : 'row'}
      ref={ref}
      {...props}
    />
  );
});

type StackType = typeof ForwardedStack & {
  Horizontal: typeof HorizontalStack;
  Vertical: typeof VerticalStack;
};

export const Stack = ForwardedStack as StackType;

Stack.Horizontal = HorizontalStack;
Stack.Vertical = VerticalStack;
