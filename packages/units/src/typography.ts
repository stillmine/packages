import theme from '@chakra-ui/theme';
import { ValueOf } from '@stillmine/types';

export const typography = {
  lineHeight: theme.lineHeights,
  size: {
    ...theme.fontSizes,
    md: '1rem',
  },
  weight: theme.fontWeights,
} as const;

export type Typography = ValueOf<typeof typography>;
