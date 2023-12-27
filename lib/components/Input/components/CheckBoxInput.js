function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput as RNTextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from "../../../styles";
export var CheckBoxInput = function CheckBoxInput(_ref) {
  var config = _ref.config;
  var id = config.id,
    label = config.label,
    options = config.options,
    debug = config.debug;
  var _useState = useState(options.map(function (obj) {
      return _objectSpread(_objectSpread({}, obj), {}, {
        active: false
      });
    })),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  useEffect(function () {
    updateValue();
  }, [list]);
  var updateValue = function updateValue() {
    var activeItems = list.filter(function (item) {
      return item.active;
    }).map(function (item) {
      return item.value;
    });
    setValue(activeItems.join(', '));
  };
  var handleUpdate = function handleUpdate(itemIndex) {
    var updatedList = list.map(function (item, index) {
      if (index === itemIndex) {
        return _objectSpread(_objectSpread({}, item), {}, {
          active: !item.active
        });
      }
      return item;
    });
    setList(updatedList);
  };
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.label
  }, label), debug && /*#__PURE__*/React.createElement(RNTextInput, {
    value: value,
    editable: false
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.checkboxContainer
  }, list.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      key: index,
      style: [styles.checkbox, item.active ? styles.active : styles.inactive],
      onPress: function onPress() {
        return handleUpdate(index);
      }
    }, /*#__PURE__*/React.createElement(Text, {
      style: styles.checkboxText
    }, item.name));
  })));
};
var styles = StyleSheet.create({
  label: {
    // Define your label text styles
  },
  checkboxContainer: {
    // Define your container styles for the checkboxes
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  checkbox: {
    // Define your base checkbox styles
    margin: 4,
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    // Define your styles for active (selected) state
    backgroundColor: colors.primary[700] // Replace with actual color code
  },
  inactive: {
    // Define your styles for inactive (unselected) state
    backgroundColor: colors.primary[400] // Replace with actual color code
  },
  checkboxText: {
    // Define text styles inside the checkbox
  }
});
export default CheckBoxInput;
try {
  CheckBoxInput.displayName = "CheckBoxInput";
  CheckBoxInput.__docgenInfo = {
    description: "",
    displayName: "CheckBoxInput",
    props: {
      "\"config\"": {
        "defaultValue": null,
        "description": "",
        "name": "config",
        "required": true,
        "type": {
          "name": "{ id: string; label: string; options: OptionType[]; debug?: boolean; }",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}