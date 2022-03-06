import { theme } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode, useMemo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Calendar(props: Props) {
  return (
    <section
      css={{
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    />
  );
}

interface CalendarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  left?: ReactNode;
  right?: ReactNode;
}

Calendar.Header = function Header({ children, left, right, ...props }: CalendarHeaderProps) {
  return (
    <div css={{ display: 'flex', justifyContent: 'space-between' }} {...props}>
      {left}
      {children}
      {right}
    </div>
  );
};

const DateWrapper = styled.div({ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(7, 1fr)' });

Calendar.Weeks = DateWrapper;
Calendar.Dates = DateWrapper;

interface CalendarCellProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  holiday?: boolean;
}

Calendar.Cell = function Cell({ disabled, holiday, ...props }: CalendarCellProps) {
  const color = useMemo(() => {
    if (disabled) {
      return theme.colors.gray['300'];
    }

    if (holiday) {
      return theme.colors.red['500'];
    }

    return 'inherit';
  }, [disabled, holiday]);

  return (
    <div
      css={{
        borderRadius: 4,
        color,
        cursor: disabled ? 'not-allowed' : 'default',
        padding: 8,
        transition: 'background-color 0.2s ease-in-out',
        '&:hover': { backgroundColor: theme.colors.gray['100'] },
      }}
      {...props}
    />
  );
};
