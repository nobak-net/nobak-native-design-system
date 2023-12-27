function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet } from 'react-native';
var SelectInput = function SelectInput(_ref) {
  var config = _ref.config;
  var id = config.id,
    label = config.label,
    defaultValue = config.defaultValue,
    options = config.options,
    hidden = config.hidden,
    debug = config.debug;
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  useEffect(function () {
    // Update value if the default value is not in the options
    var hasValue = options.some(function (option) {
      return "".concat(option.value) === value;
    });
    if (!hasValue && options.length > 0) {
      setValue(options[0].value);
    }
  }, [options, value]);
  var handleChange = function handleChange(selectedValue) {
    setValue(selectedValue);
  };
  return /*#__PURE__*/React.createElement(View, {
    style: !hidden ? styles.container : styles.hidden
  }, !hidden && /*#__PURE__*/React.createElement(Text, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(Picker, {
    selectedValue: value,
    onValueChange: function onValueChange(itemValue) {
      return handleChange(itemValue);
    },
    style: !hidden ? styles.picker : styles.hidden
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(Picker.Item, {
      key: index,
      label: option.label,
      value: option.value
    });
  })));
};
var styles = StyleSheet.create({
  container: {
    // Define your container styles
  },
  label: {
    // Define your label text styles
  },
  picker: {
    // Define your picker styles
  },
  hidden: {
    display: 'none'
  }
});
export { SelectInput };
try {
  SelectInput.displayName = "SelectInput";
  SelectInput.__docgenInfo = {
    description: "",
    displayName: "SelectInput",
    props: {
      "\"config\"": {
        "defaultValue": null,
        "description": "",
        "name": "config",
        "required": true,
        "type": {
          "name": "{ id: string; label: string; defaultValue: string; options: { label: string; value: string; }[]; required?: boolean; debug?: boolean; belongs_to?: string; populateOptions?: Function; multiple?: boolean; hidden?: boolean; }",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}