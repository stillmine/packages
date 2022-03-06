import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SelectInput } from './SelectInput';

export default {
  title: 'SelectInput',
  component: SelectInput,
} as ComponentMeta<typeof SelectInput>;

const options = [
  { label: 'Chrome', value: 'chrome' },
  { label: 'Firefox', value: 'firefox' },
  { label: 'Internet Explorer', value: 'ie' },
  { label: 'Opera', value: 'opera' },
  { label: 'Safari', value: 'safari' },
  { label: 'Microsoft Edge', value: 'edge' },
];

const Template: ComponentStory<typeof SelectInput> = ({ options, ...props }) => {
  return (
    <SelectInput {...props}>
      {options.map(({ label, value }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </SelectInput>
  );
};

export const Basic = Template.bind({});
Basic.args = { label: 'Browser', options };
