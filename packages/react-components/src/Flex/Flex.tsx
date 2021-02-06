import { flex } from '@stillmine/styles';
import { forwardRef, HTMLAttributes } from 'react';
import { FlexCenter } from 'src/Flex/FlexCenter';

type FlexOptions = Parameters<typeof flex>[0];

interface Props extends FlexOptions, HTMLAttributes<HTMLElement> {
  as?: any;
}

const ForwardedFlex = forwardRef<any, Props>(({ align, as: Component = 'div', direction, justify, ...props }, ref) => {
  return <Component css={flex({ align, direction, justify })} ref={ref} {...props} />;
});

type FlexType = typeof ForwardedFlex & {
  Center: typeof FlexCenter;
};

export const Flex = ForwardedFlex as FlexType;

Flex.Center = FlexCenter;
