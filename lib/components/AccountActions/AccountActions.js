function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from '..';
import { colors, texts } from "../../styles";
var AccountActions = function AccountActions(_ref) {
  var _ref$balance = _ref.balance,
    balance = _ref$balance === void 0 ? '0.00' : _ref$balance,
    deposit = _ref.deposit,
    withdraw = _ref.withdraw,
    swap = _ref.swap;
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: {
      borderRadius: 12,
      backgroundColor: colors.primary[200],
      padding: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread(_objectSpread({}, texts.H4Bold), {}, {
      color: colors.primary[1600]
    })
  }, "USD"), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread(_objectSpread({}, texts.H4Bold), {}, {
      color: colors.primary[1800]
    })
  }, balance), /*#__PURE__*/React.createElement(Icon, {
    name: "Cash",
    size: "large",
    color: colors.primary[1800]
  }))), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "iconText",
    icon: "Add",
    text: "Deposit",
    onPress: function onPress() {
      return deposit();
    },
    buttonStyle: {
      variant: 'secondary',
      size: 'small'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "iconText",
    icon: "Withdraw",
    text: "Withdraw",
    onPress: function onPress() {
      return withdraw();
    },
    buttonStyle: {
      variant: 'secondary',
      size: 'small'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    type: "iconText",
    icon: "Trade",
    text: "Swap",
    onPress: function onPress() {
      return swap();
    },
    buttonStyle: {
      variant: 'secondary',
      size: 'small'
    }
  })));
};
export { AccountActions };
try {
  AccountActions.displayName = "AccountActions";
  AccountActions.__docgenInfo = {
    description: "",
    displayName: "AccountActions",
    props: {
      "\"balance\"": {
        "defaultValue": {
          "value": "0.00"
        },
        "description": "",
        "name": "balance",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "\"deposit\"": {
        "defaultValue": null,
        "description": "",
        "name": "deposit",
        "required": true,
        "type": {
          "name": "() => void",
          "raw": null,
          "value": null
        }
      },
      "\"withdraw\"": {
        "defaultValue": null,
        "description": "",
        "name": "withdraw",
        "required": true,
        "type": {
          "name": "() => void",
          "raw": null,
          "value": null
        }
      },
      "\"swap\"": {
        "defaultValue": null,
        "description": "",
        "name": "swap",
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