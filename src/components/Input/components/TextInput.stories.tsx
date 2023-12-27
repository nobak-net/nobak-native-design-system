import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {TextInput} from './TextInput'; // Adjust the import path as necessary

const TextInputMeta: ComponentMeta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
};

export default TextInputMeta;

// Template for creating stories
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

// Example Story: Default TextInput
export const DefaultTextInput = Template.bind({});
DefaultTextInput.args = {
  config: {
    id: 'default-text-input',
    label: 'Default Label',
    placeholder: 'Enter text',
    defaultValue: '',
    maxLength: 50,
    disabled: false,
    icon: 'pencil', // Replace with your icon name
    type: 'text',
    validation: {
      fn: async (text) => ({ valid: true, message: '' }),
    },
    afterChange: (info) => console.log('After change:', info),
  },
};

// Example Story: Disabled TextInput
export const DisabledTextInput = Template.bind({});
DisabledTextInput.args = {
  config: {
    ...DefaultTextInput.args.config,
    disabled: true,
  },
};

// You can create more stories for other scenarios like 'Error State', 'With Icon', etc.
