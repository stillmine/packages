import { ReactNode } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';

import { SSRSuspense } from './SSRSuspense';

interface Props extends Omit<ErrorBoundaryPropsWithRender, 'fallback' | 'fallbackRender'> {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ErrorBoundaryPropsWithRender['fallbackRender'];
}

export function SuspenseBoundary({
  children,
  fallback = <div>loading</div>,
  errorFallback = () => <div>error</div>,
  ...props
}: Props) {
  return (
    <ErrorBoundary fallbackRender={errorFallback} {...props}>
      <SSRSuspense fallback={fallback}>{children}</SSRSuspense>
    </ErrorBoundary>
  );
}
