import { css } from '@emotion/react';
import { numberToUnit } from '@stillmine/utils';

import type { Unit } from '../unit';

type SpacingType = 'margin' | 'padding';

interface SpacingOptions {
  bottom?: Unit;
  left?: Unit;
  right?: Unit;
  top?: Unit;
  x?: Unit;
  y?: Unit;
}

export function spacing(type: SpacingType, options: SpacingOptions | number) {
  const spacing: Record<string, Unit> = {};

  if (typeof options === 'number') {
    spacing.bottom = options;
    spacing.left = options;
    spacing.right = options;
    spacing.top = options;
  } else {
    const { bottom, left, right, top, x, y } = options;

    if (x != null) {
      spacing.left = x;
      spacing.right = x;
    }

    if (y != null) {
      spacing.bottom = y;
      spacing.top = y;
    }

    if (bottom != null) {
      spacing.bottom = bottom;
    }

    if (left != null) {
      spacing.left = left;
    }

    if (right != null) {
      spacing.right = right;
    }

    if (top != null) {
      spacing.top = top;
    }
  }

  return css(
    Object.entries(spacing)
      .map(([direction, unit]) => `${type}-${direction}: ${numberToUnit(unit)};`)
      .join('')
  );
}
