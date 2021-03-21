import { spacing } from './spacing';

export function margin(options: Parameters<typeof spacing>[1]) {
  return spacing('margin', options);
}

margin.bottom = (unit: number) => margin({ bottom: unit });

margin.left = (unit: number) => margin({ left: unit });

margin.right = (unit: number) => margin({ right: unit });

margin.top = (unit: number) => margin({ top: unit });

margin.x = (unit: number) => margin({ x: unit });

margin.y = (unit: number) => margin({ y: unit });
