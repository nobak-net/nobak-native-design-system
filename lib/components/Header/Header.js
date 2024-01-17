function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Logo, Icon } from '..';
import { colors, texts } from "../../styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
var Header = function Header(_ref) {
  var action = _ref.action;
  var insets = useSafeAreaInsets();
  return /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: colors.primary[100],
      paddingTop: insets.top
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    type: "Isologo"
  }), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: function onPress() {
      return action();
    },
    style: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "QR",
    color: colors.primary[2000],
    size: "large"
  }), /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread(_objectSpread({}, texts.CaptionUnderlined), {}, {
      color: colors.primary[2400]
    })
  }, "SCAN QR"))));
};
export { Header };
try {
  Header.displayName = "Header";
  Header.__docgenInfo = {
    description: "",
    displayName: "Header",
    props: {
      "\"action\"": {
        "defaultValue": null,
        "description": "",
        "name": "action",
        "required": true,
        "type": {
          "name": "() => void",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}