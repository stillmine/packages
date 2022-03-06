import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { IconButton, theme } from '@chakra-ui/react';
import { useCalendar } from '@h6s/calendar';
import { ComponentMeta } from '@storybook/react';
import { format } from 'date-fns';
import { Fragment } from 'react';

import { Calendar } from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template = props => {
  const { body, cursorDate, headers, navigation } = useCalendar();

  return (
    <Calendar>
      <Calendar.Header
        left={
          <IconButton
            aria-label="prev"
            icon={<ChevronLeftIcon />}
            onClick={() => {
              navigation.toPrev();
            }}
          />
        }
        right={
          <IconButton
            aria-label="next"
            icon={<ChevronRightIcon />}
            onClick={() => {
              navigation.toNext();
            }}
          />
        }
      >
        {format(cursorDate, 'yyyy. MM')}
      </Calendar.Header>
      <Calendar.Weeks css={{ borderBottom: `1px solid ${theme.colors.gray['700']}`, marginTop: 8 }}>
        {headers.weekDays.map(({ key, value }) => {
          return <Calendar.Cell key={key}>{format(value, 'E')}</Calendar.Cell>;
        })}
      </Calendar.Weeks>
      <Calendar.Dates css={{ marginTop: 8 }}>
        {body.value.map(({ key, value: days }) => {
          return (
            <Fragment key={key}>
              {days.map(({ isCurrentMonth, isWeekend, key, value }) => {
                return (
                  <Calendar.Cell disabled={!isCurrentMonth} holiday={isWeekend} key={key}>
                    {format(value, 'd')}
                  </Calendar.Cell>
                );
              })}
            </Fragment>
          );
        })}
      </Calendar.Dates>
    </Calendar>
  );
};

export const Basic = Template.bind({});
