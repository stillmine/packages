import { action } from '@storybook/addon-actions';

import { Tab } from './Tab';

const TAB_ITEMS = [
  { label: '사과', value: 'apple' },
  { label: '바나나', value: 'banana' },
  { label: '오렌지', value: 'orange' },
];

export default { title: 'Tab' };

export const Uncontrolled = () => {
  return (
    <Tab onChange={action('change')}>
      {TAB_ITEMS.map(({ label, value }) => {
        return (
          <Tab.Item key={value} value={value}>
            {label}
          </Tab.Item>
        );
      })}
    </Tab>
  );
};
