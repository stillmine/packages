import { lg, md, mq, sm, xl, xxl } from '@stillmine/styles';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: any;
}

export function Container({ as: Component = 'div', ...props }: Props) {
  return (
    <Component
      css={[
        mq({ maxWidth: [null, sm, md, lg, xl, xxl] }),
        {
          margin: '0 auto',
          padding: '1rem',
          width: '100%',
        },
      ]}
      {...props}
    />
  );
}
