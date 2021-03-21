import { spacing } from './spacing';

export function padding(options: Parameters<typeof spacing>[1]) {
  return spacing('padding', options);
}

padding.bottom = (unit: number) => padding({ bottom: unit });

padding.left = (unit: number) => padding({ left: unit });

padding.right = (unit: number) => padding({ right: unit });

padding.top = (unit: number) => padding({ top: unit });

padding.x = (unit: number) => padding({ x: unit });

padding.y = (unit: number) => padding({ y: unit });
