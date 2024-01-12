import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Form } from './Form'; // Adjust the import path as necessary

const FormMeta: ComponentMeta<typeof Form> = {
  title: 'Form',
  component: Form,
};

export default FormMeta;

// Template for creating stories
const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

// Example Story: Default Form
export const DefaultForm = Template.bind({});
DefaultForm.args = {
  fields: [
    { field: {
      type: 'text',
      id: 'email',
      label: 'Email',
      placeholder: 'example@email.com',
    }},
    { field: {
      type: 'text',
      id: 'password',
      label: 'Password',
      placeholder: 'example@email.com',
    }}
  ],
  onSubmit: (formData: any) => {
    console.log('Form Data:', formData);
  },
};

// You can create more stories for other scenarios like 'Empty Form', 'Pre-filled Form', etc.


// fields: [
//     { field: {
//       type: 'email',
//       id: 'email',
//       label: 'Email',
//       placeholder: 'example@email.com',
//     }},
//     { field: {
//       type: 'password',
//       id: 'password',
//       label: 'Password',
//       placeholder: 'Set your password',
//     }},
//     { field: {
//       type: 'textarea',
//       id: 'textarea',
//       label: 'Text Area',
//       placeholder: 'Set a description',
//     }},
//     { field: {
//       type: 'select',
//       id: 'select',
//       label: 'Select',
//       placeholder: 'Select',
//       options: [
//         { name: 'Option 1', id: 1 },
//         { name: 'Option 2', id: 2 },
//       ],
//     }},
//     { field: {
//       type: 'datepicker',
//       id: 'datepicker',
//       label: 'Date Picker',
//     }},
//   ],