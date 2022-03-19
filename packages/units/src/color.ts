import theme from '@chakra-ui/theme';
import { ValueOf } from '@stillmine/types';

export const color = {
  ...theme.colors,
  white: '#fff',
  black: '#333',
  red: {
    google: '#ea4335',
    slack: '#e01e5a',
    youtube: '#ff0000',
  },
  yellow: {
    slack: '#ecb22e',
    google: '#fbbc05',
    kakao: '#ffcd00',
  },
  green: {
    google: '#34a853',
    slack: '#2eb67d',
    spotify: '#1db954',
    naver: '#00c63a',
  },
  blue: {
    facebook: '#3b5998',
    slack: '#36c5f0',
    toss: '#317ff3',
    google: '#4285f4',
  },
  gray: {
    ...theme.colors.gray,
    github: '#f5f5f5',
  },
} as const;

export type Color = ValueOf<typeof color>;
