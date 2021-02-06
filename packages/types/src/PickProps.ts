import { ComponentProps } from 'react';

import { As } from './As';

export type PickProps<T extends As, K extends keyof ComponentProps<T>> = Pick<ComponentProps<T>, K>;
