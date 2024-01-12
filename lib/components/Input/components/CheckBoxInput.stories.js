import React from 'react';
import CheckBoxInput from "./CheckBoxInput"; // Adjust the import path as necessary

var CheckBoxInputMeta = {
  title: 'CheckBoxInput',
  component: CheckBoxInput
};
export default CheckBoxInputMeta;

// Template for creating stories
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(CheckBoxInput, args);
};

// Example Story: Default CheckBoxInput
export var DefaultCheckBoxInput = Template.bind({});
DefaultCheckBoxInput.args = {
  config: {
    id: 'default-checkbox',
    label: 'Choose Options',
    options: [{
      name: 'Option 1',
      value: 'opt1'
    }, {
      name: 'Option 2',
      value: 'opt2'
    }, {
      name: 'Option 3',
      value: 'opt3'
    }],
    debug: false
  }
};

// You can create more stories for other scenarios like 'Pre-filled CheckBox', 'Disabled State', etc.
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}