import { ReactNode } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithFallback } from 'react-error-boundary';

interface Props extends Omit<ErrorBoundaryPropsWithFallback, 'fallback'> {
  children: ReactNode;
}

export const GlobalErrorBoundary = (props: Props) => {
  return <ErrorBoundary fallback={<div>error</div>} {...props} />;
};
