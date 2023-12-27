import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import SelectInput from './SelectInput'; // Adjust the import path as necessary

const SelectInputMeta: ComponentMeta<typeof SelectInput> = {
  title: 'SelectInput',
  component: SelectInput,
};

export default SelectInputMeta;

// Template for creating stories
const Template: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />;

// Example Story: Default SelectInput
export const DefaultSelectInput = Template.bind({});
DefaultSelectInput.args = {
  config: {
    id: 'default-select',
    label: 'Select Option',
    defaultValue: 'option2',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    hidden: false,
    debug: false,
  },
};

// Example Story: With Hidden SelectInput
export const HiddenSelectInput = Template.bind({});
HiddenSelectInput.args = {
  config: {
    ...DefaultSelectInput.args.config,
    hidden: true,
  },
};

// You can create more stories for other scenarios like 'Pre-filled SelectInput', 'Disabled State', etc.
