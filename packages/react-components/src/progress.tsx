import { ProgressHTMLAttributes, useState } from 'react';

interface ProgressProps extends ProgressHTMLAttributes<HTMLProgressElement> {}

export function usePercentage(initialPercentage = 0) {
  const [percentage] = useState(initialPercentage);

  return [percentage];
}

export function Progress(props: ProgressProps) {
  const [percentage] = usePercentage();

  return <progress max="100" value={percentage} {...props} />;
}
