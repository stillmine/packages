import { flex } from '@stillmine/styles';
import { As } from '@stillmine/types';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';

import { FlexCenter } from './FlexCenter';

type FlexOptions = Parameters<typeof flex>[0];

interface Props extends ComponentProps<As>, FlexOptions {
  as?: As;
}

const BaseFlex = forwardRef(function BaseFlex(
  { align, as: Component = 'div', direction, justify, ...props }: Props,
  ref: ForwardedRef<As>
) {
  return <Component css={flex({ align, direction, justify })} ref={ref} {...props} />;
});

type Flex = typeof BaseFlex & {
  Center: typeof FlexCenter;
};

export const Flex = BaseFlex as Flex;

Flex.Center = FlexCenter;
