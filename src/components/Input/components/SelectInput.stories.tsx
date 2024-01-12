import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { SelectInput } from './SelectInput'; 

const SelectInputMeta: ComponentMeta<typeof SelectInput> = {
  title: 'SelectInput',
  component: SelectInput,
};

export default SelectInputMeta;

const Template: ComponentStory<typeof SelectInput> = (args) => <SelectInput {...args} />;

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
