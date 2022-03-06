import { isClient } from '@stillmine/utils';
import { ComponentProps, Suspense } from 'react';

interface Props extends ComponentProps<typeof Suspense> {}

export function SSRSuspense({ fallback, ...props }: Props) {
  if (isClient()) {
    return <Suspense fallback={fallback} {...props} />;
  }

  return <>{fallback}</>;
}
