import { ReactNode, SuspenseProps } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';

import { SSRSuspense } from './SSRSuspense';

interface Props {
  children: ReactNode;
  errorFallback?: ErrorBoundaryPropsWithRender['fallbackRender'];
  suspenseFallback?: SuspenseProps['fallback'];
}

export const SuspenseBoundary = ({
  children,
  errorFallback = () => <div>error</div>,
  suspenseFallback = <div>loading</div>,
}: Props) => {
  return (
    <ErrorBoundary fallbackRender={errorFallback}>
      <SSRSuspense fallback={suspenseFallback}>{children}</SSRSuspense>
    </ErrorBoundary>
  );
};
