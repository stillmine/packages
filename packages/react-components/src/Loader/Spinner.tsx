import { keyframes } from '@emotion/react';

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
      return {
        borderWidth: 5,
        height: 70,
        width: 70,
      };
    case 'sm':
      return {
        borderWidth: 2,
        height: 20,
        width: 20,
      };
    case 'md':
    default:
      return {
        borderWidth: 3,
        height: 40,
        width: 40,
      };
  }
}

export function Spinner({ size = 'md' }: Props) {
  return (
    <div
      css={[
        getSpinnerSize(size),
        {
          animation: `${spinFrame} 1s ease-in-out infinite`,
          borderColor: '#707070',
          borderLeftColor: 'transparent',
          borderRadius: '50%',
          borderStyle: 'solid',
        },
      ]}
    />
  );
}
