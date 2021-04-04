import { useSelect } from '@stillmine/hooks';

import { Select } from './Select';

const initialOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
];

export const Basic = () => {
  const { options, ...selectProps } = useSelect({ initialOptions });

  return (
    <Select label="Fruits" {...selectProps}>
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

export const Searchable = () => {
  const { options } = useSelect({ initialOptions });

  return (
    <Select.Searchable label="Fruits">
      {options.map(({ label, value }) => {
        return (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        );
      })}
    </Select.Searchable>
  );
};

export default { title: 'Select' };
