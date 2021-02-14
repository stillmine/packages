import { fireEvent, render } from '@testing-library/react';

import { Tab } from './Tab';

const TAB_ITEMS = [
  { label: '사과', value: 'apple' },
  { label: '바나나', value: 'banana' },
  { label: '오렌지', value: 'orange' },
];

describe('<Tab />', () => {
  it('Tab.Item을 선택하면 활성 상태가 된다.', () => {
    const { getAllByRole } = render(
      <Tab>
        {TAB_ITEMS.map(({ label, value }) => {
          return (
            <Tab.Item key={value} value={value}>
              {label}
            </Tab.Item>
          );
        })}
      </Tab>
    );

    getAllByRole('tab').forEach(tabItem => {
      fireEvent.click(tabItem);

      expect(tabItem).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('Tab.Item을 선택하면 onChange 이벤트가 발생한다.', () => {
    const handleChange = jest.fn();
    const { getAllByRole } = render(
      <Tab onChange={handleChange}>
        {TAB_ITEMS.map(({ label, value }) => {
          return (
            <Tab.Item key={value} value={value}>
              {label}
            </Tab.Item>
          );
        })}
      </Tab>
    );

    getAllByRole('tab').forEach((tabItem, index) => {
      fireEvent.click(tabItem);

      expect(handleChange).toBeCalledWith(TAB_ITEMS[index].value);
    });
  });
});
