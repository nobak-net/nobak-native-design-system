function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { TextAreaInput } from "./TextAreaInput"; // Adjust the import path as necessary

var TextAreaInputMeta = {
  title: 'TextAreaInput',
  component: TextAreaInput
};
export default TextAreaInputMeta;

// Template for creating stories
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(TextAreaInput, args);
};

// Example Story: Default TextAreaInput
export var DefaultTextAreaInput = Template.bind({});
DefaultTextAreaInput.args = {
  config: {
    id: 'default-text-area-input',
    // Ensure id is always a string
    label: 'Default Label',
    placeholder: 'Enter text here',
    defaultValue: '',
    maxLength: 500
  }
};

// Example Story: With Custom Placeholder
export var WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  config: _objectSpread(_objectSpread({}, DefaultTextAreaInput.args.config), {}, {
    placeholder: 'Custom placeholder text'
  })
};

// Example Story: With Character Limit
export var WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
  config: _objectSpread(_objectSpread({}, DefaultTextAreaInput.args.config), {}, {
    maxLength: 100
  })
};

// You can create more stories for other scenarios like 'Pre-filled Text', 'Disabled State', etc.
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}