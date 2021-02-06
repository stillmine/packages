import { ComponentProps } from 'react';

import { As } from './As';

export type OmitProps<T extends As, K extends keyof ComponentProps<T>> = Omit<ComponentProps<T>, K>;
