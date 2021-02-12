import { useSelect } from '@stillmine/hooks';
import { render } from '@testing-library/react';

import { Select } from './Select';

const initialOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
];

const SelectComponent = () => {
  const { options } = useSelect({ initialOptions });

  return (
    <Select label="Fruits">
      {options.map(({ label, value }) => {
        return (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        );
      })}
    </Select>
  );
};

describe('<Select />', () => {
  it('should render options', () => {
    const { getByLabelText } = render(<SelectComponent />);
    const { childNodes } = getByLabelText('Fruits');

    childNodes.forEach((option, index) => {
      expect(option).toHaveValue(initialOptions[index].value);
    });
  });
});
