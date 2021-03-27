import { css, keyframes } from '@emotion/react';

type Size = 'sm' | 'md' | 'lg';

interface Props {
  size?: Size;
}

const spinFrame = keyframes`
  0% {
    transform: rotate(40deg);
  }

  100% {
    transform: rotate(400deg);
  }
`;

function getSpinnerSize(size: Size) {
  switch (size) {
    case 'lg':
      return css`
        border-width: 5px;
        height: 70px;
        width: 70px;
      `;
    case 'sm':
      return css`
        border-width: 2px;
        height: 20px;
        width: 20px;
      `;
    case 'md':
    default:
      return css`
        border-width: 3px;
        height: 40px;
        width: 40px;
      `;
  }
}

export const Spinner = ({ size = 'md' }: Props) => {
  return (
    <div
      css={[
        getSpinnerSize(size),
        css`
          animation: ${spinFrame} 1s ease-in-out infinite;
          border-color: #707070;
          border-left-color: transparent;
          border-radius: 50%;
          border-style: solid;
        `,
      ]}
    />
  );
};
