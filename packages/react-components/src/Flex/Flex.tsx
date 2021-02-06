import { flex } from '@stillmine/styles';
import { As } from '@stillmine/types';
import { ComponentProps, forwardRef } from 'react';

import { FlexCenter } from './FlexCenter';

type FlexOptions = Parameters<typeof flex>[0];

interface Props extends ComponentProps<As>, FlexOptions {
  as?: As;
}

const ForwardedFlex = forwardRef<As, Readonly<Props>>(
  ({ align, as: Component = 'div', direction, justify, ...props }, ref) => {
    return <Component css={flex({ align, direction, justify })} ref={ref} {...props} />;
  }
);

type FlexType = typeof ForwardedFlex & {
  Center: typeof FlexCenter;
};

export const Flex = ForwardedFlex as FlexType;

Flex.Center = FlexCenter;
