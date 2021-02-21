import { css } from '@emotion/react';
import { Color } from '@stillmine/units';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect, useWindowScroll } from 'react-use';

export const ProgressBar = () => {
  const { y } = useWindowScroll();
  const [percentage, setPercentage] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const heightPercentage = y / (document.body.offsetHeight - window.innerHeight);

    setPercentage(Math.round(heightPercentage * 100));
  }, [y]);

  return createPortal(
    <div
      css={css`
        top: 0;
        position: fixed;
        background-color: ${Color.black};
        height: 4px;
        width: ${percentage}vw;
        transition: width 0.2s ease-out;
      `}
    />,
    document.body
  );
};
