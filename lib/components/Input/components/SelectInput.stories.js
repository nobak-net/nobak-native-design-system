import React from 'react';
import { SelectInput } from "./SelectInput";
var SelectInputMeta = {
  title: 'SelectInput',
  component: SelectInput
};
export default SelectInputMeta;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(SelectInput, args);
};
export var DefaultSelectInput = Template.bind({});
DefaultSelectInput.args = {
  config: {
    id: 'default-select',
    label: 'Select Option',
    defaultValue: 'option2',
    options: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }, {
      label: 'Option 3',
      value: 'option3'
    }],
    hidden: false,
    debug: false
  }
};
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}