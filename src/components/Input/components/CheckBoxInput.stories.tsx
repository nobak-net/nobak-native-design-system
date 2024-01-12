import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import CheckBoxInput from './CheckBoxInput'; // Adjust the import path as necessary

const CheckBoxInputMeta: ComponentMeta<typeof CheckBoxInput> = {
  title: 'CheckBoxInput',
  component: CheckBoxInput,
};

export default CheckBoxInputMeta;

// Template for creating stories
const Template: ComponentStory<typeof CheckBoxInput> = (args) => <CheckBoxInput {...args} />;

// Example Story: Default CheckBoxInput
export const DefaultCheckBoxInput = Template.bind({});
DefaultCheckBoxInput.args = {
  config: {
    id: 'default-checkbox',
    label: 'Choose Options',
    options: [
      { name: 'Option 1', value: 'opt1' },
      { name: 'Option 2', value: 'opt2' },
      { name: 'Option 3', value: 'opt3' },
    ],
    debug: false,
  },
};

// You can create more stories for other scenarios like 'Pre-filled CheckBox', 'Disabled State', etc.
