import React from 'react';
import Form from "./Form"; // Adjust the import path as necessary

var FormMeta = {
  title: 'Form',
  component: Form
};
export default FormMeta;

// Template for creating stories
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Form, args);
};

// Example Story: Default Form
export var DefaultForm = Template.bind({});
DefaultForm.args = {
  fields: [{
    field: {
      type: 'text',
      id: 'email',
      label: 'Email',
      placeholder: 'example@email.com'
    }
  }],
  onSubmit: function onSubmit(formData) {
    console.log('Form Data:', formData);
  }
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
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}