import { gutter } from '@stillmine/styles';
import { ComponentProps, forwardRef } from 'react';
import { Flex } from 'src/Flex/mod';
import { HorizontalStack } from 'src/Stack/HorzontalStack';
import { VerticalStack } from 'src/Stack/VerticalStack';

type GutterOptions = Parameters<typeof gutter>[0];

interface Props extends Omit<ComponentProps<typeof Flex>, 'direction'>, Omit<GutterOptions, 'size'> {
  gutter?: GutterOptions['size'];
}

const ForwardedStack = forwardRef<any, Props>(({ direction = 'vertical', gutter: size, ...props }, ref) => {
  return (
    <Flex
      css={gutter({ direction, size })}
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
