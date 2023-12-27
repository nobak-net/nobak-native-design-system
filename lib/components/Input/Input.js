import React from 'react';
import { TextInput } from "./components/TextInput"; // Import or create these components

var Input = function Input(_ref) {
  var field = _ref.field;
  var type = field.type,
    id = field.id,
    label = field.label,
    placeholder = field.placeholder,
    options = field.options;
  switch (type) {
    case 'text':
      return /*#__PURE__*/React.createElement(TextInput, {
        id: id,
        label: label,
        placeholder: placeholder
      });
    // case 'password':
    //     return <TextInput id={id} label={label} placeholder={placeholder} />;
    // case 'textarea':
    //     return <TextAreaInput id={id} label={label} placeholder={placeholder} />;
    // case 'select':
    //     return <SelectInput id={id} label={label} options={options} />;
    default:
      return null;
  }
};
export { Input };
try {
  Input.displayName = "Input";
  Input.__docgenInfo = {
    description: "",
    displayName: "Input",
    props: {}
  };
} catch (e) {}