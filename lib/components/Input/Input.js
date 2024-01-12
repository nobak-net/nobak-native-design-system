function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { TextInput } from "./components/TextInput"; // Import or create these components

var Input = function Input(_ref) {
  var field = _ref.field;
  var type = field.type,
    id = field.id,
    label = field.label,
    placeholder = field.placeholder,
    options = field.options;
  var config = {
    id: id,
    label: label,
    placeholder: placeholder
  };
  switch (type) {
    case 'text':
      return /*#__PURE__*/React.createElement(TextInput, {
        config: _objectSpread(_objectSpread({}, config), {}, {
          type: type
        })
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