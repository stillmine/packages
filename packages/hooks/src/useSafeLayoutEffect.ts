import { isClient } from '@stillmine/utils';
import { useEffect, useLayoutEffect } from 'react';

export function useSafeLayoutEffect(...args: Parameters<typeof useEffect>) {
  if (isClient()) {
    return useLayoutEffect(...args);
  }

  return useEffect(...args);
}
