import React from 'react';
import { View } from 'react-native';
import { FormProvider } from "./context/Form";
import { Input } from "./Input"; // This is the new Input component

var Form = function Form(_ref) {
  var fields = _ref.fields,
    onSubmit = _ref.onSubmit,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'light' : _ref$theme;
  return /*#__PURE__*/React.createElement(FormProvider, {
    onSubmit: onSubmit,
    theme: theme
  }, /*#__PURE__*/React.createElement(View, null, fields.map(function (_ref2, index) {
    var field = _ref2.field;
    return /*#__PURE__*/React.createElement(View, {
      style: {
        paddingTop: 8
      },
      key: index
    }, /*#__PURE__*/React.createElement(Input, {
      field: field
    }));
  })));
};
export { Form };
try {
  Form.displayName = "Form";
  Form.__docgenInfo = {
    description: "",
    displayName: "Form",
    props: {}
  };
} catch (e) {}