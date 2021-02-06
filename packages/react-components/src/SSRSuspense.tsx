import { isClient } from '@stillmine/utils';
import { Suspense } from 'react';

export const SSRSuspense = ({ fallback, ...props }) => {
  if (isClient()) {
    return <Suspense fallback={fallback} {...props} />;
  }

  return fallback;
};
