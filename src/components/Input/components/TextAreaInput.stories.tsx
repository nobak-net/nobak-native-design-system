import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import TextAreaInput from './TextAreaInput'; // Adjust the import path as necessary

const TextAreaInputMeta: ComponentMeta<typeof TextAreaInput> = {
  title: 'TextAreaInput',
  component: TextAreaInput,
};

export default TextAreaInputMeta;

// Template for creating stories
const Template: ComponentStory<typeof TextAreaInput> = (args) => <TextAreaInput {...args} />;

// Example Story: Default TextAreaInput
export const DefaultTextAreaInput = Template.bind({});
DefaultTextAreaInput.args = {
  config: {
    id: 'default-text-area-input', // Ensure id is always a string
    label: 'Default Label',
    placeholder: 'Enter text here',
    defaultValue: '',
    maxLength: 500,
  },
};

// Example Story: With Custom Placeholder
export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  config: {
    ...DefaultTextAreaInput.args.config,
    placeholder: 'Custom placeholder text',
  },
};

// Example Story: With Character Limit
export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
  config: {
    ...DefaultTextAreaInput.args.config,
    maxLength: 100,
  },
};

// You can create more stories for other scenarios like 'Pre-filled Text', 'Disabled State', etc.
