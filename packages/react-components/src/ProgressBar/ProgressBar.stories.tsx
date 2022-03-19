import { css } from '@emotion/react';

import { ProgressBar } from './ProgressBar';

export default { title: 'ProgressBar' };

export function Basic() {
  return (
    <div css={css(`min-height: 200vh`)}>
      <ProgressBar />
    </div>
  );
}
