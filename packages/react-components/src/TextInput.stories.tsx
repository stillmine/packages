import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput } from './TextInput';

export default { title: 'TextInput', component: TextInput } as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = props => {
  return <TextInput {...props} />;
};

export const Basic = Template.bind({});
