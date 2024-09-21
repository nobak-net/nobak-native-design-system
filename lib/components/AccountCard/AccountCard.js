function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from '..';
import { colors, texts } from "../../styles";
var AccountCard = function AccountCard(_ref) {
  var name = _ref.name,
    publicKey = _ref.publicKey,
    balance = _ref.balance,
    canSign = _ref.canSign,
    isBackedUp = _ref.isBackedUp,
    viewAccount = _ref.viewAccount;
  return /*#__PURE__*/React.createElement(View, {
    style: {
      borderColor: colors.primary[1600],
      borderWidth: 1,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread({
      color: colors.primary[100]
    }, texts.P1Light)
  }, name), /*#__PURE__*/React.createElement(Button, {
    onPress: viewAccount,
    buttonStyle: {
      variant: 'secondary',
      size: 'small'
    },
    type: "icon",
    icon: "Info"
  })), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread({
      color: colors.primary[100]
    }, texts.P1Light)
  }, publicKey.length > 20 ? "".concat(publicKey.slice(0, 20), "...") : publicKey)), /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread({
      color: colors.primary[100]
    }, texts.P1Light)
  }, balance, " XLM"), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Key",
    color: canSign ? colors.primary[100] : colors.primary[1600]
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "CloudSync",
    color: isBackedUp ? colors.primary[100] : colors.primary[1600]
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "CloudKey",
    color: colors.primary[1600]
  })));
};
export { AccountCard };