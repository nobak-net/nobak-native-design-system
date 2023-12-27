function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';
import colors from "../../../styles/colors";
var TextAreaInput = function TextAreaInput(_ref) {
  var config = _ref.config;
  var id = config.id,
    label = config.label,
    placeholder = config.placeholder,
    defaultValue = config.defaultValue,
    _config$maxLength = config.maxLength,
    maxLength = _config$maxLength === void 0 ? 500 : _config$maxLength;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var handleChange = function handleChange(text) {
    setCount(text.length);
    // Other validation or update logic goes here
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(RNTextInput, {
    multiline: true,
    numberOfLines: 4 // You can adjust this number based on your requirement
    ,
    style: styles.textArea,
    onChangeText: handleChange,
    maxLength: maxLength,
    placeholder: placeholder,
    defaultValue: defaultValue
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.counter
  }, count, "/", maxLength));
};
var styles = StyleSheet.create({
  container: {
    // Define container styles
  },
  label: {
    // Define your label styles
    paddingLeft: 4
  },
  textArea: {
    marginTop: 8,
    // Define styles for your text area
    textAlignVertical: 'top',
    // Aligns text to the top for Android
    // Other styles like border, padding, etc.
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary[400],
    paddingLeft: 12,
    paddingBottom: 4,
    paddingTop: 4,
    paddingRight: 8
  },
  counter: {
    // Style for the character counter
  }
});
export { TextAreaInput };
try {
  TextAreaInput.displayName = "TextAreaInput";
  TextAreaInput.__docgenInfo = {
    description: "",
    displayName: "TextAreaInput",
    props: {
      "\"config\"": {
        "defaultValue": null,
        "description": "",
        "name": "config",
        "required": true,
        "type": {
          "name": "{ id?: string; label: string; placeholder: string; defaultValue: string; maxLength?: number; required?: boolean; }",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}