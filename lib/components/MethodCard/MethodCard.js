function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '..';
import { Icon } from "../Icon"; // Assuming you have an Icon component
import { colors, texts } from "../../styles"; // Assuming you have a styles directory
import { formatPublicKey } from "../../utils/stellar";
export var MethodCard = function MethodCard(_ref) {
  var type = _ref.type,
    value = _ref.value,
    status = _ref.status,
    onAdd = _ref.onAdd,
    onComplete = _ref.onComplete,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'light' : _ref$theme;
  // Map the type to corresponding icon and label
  var methodInfo = {
    stellar_address: {
      icon: 'Stellar',
      // Replace with your actual icon keys
      label: 'Stellar'
    },
    phone_number: {
      icon: 'Device',
      label: 'Phone'
    },
    email: {
      icon: 'At',
      label: 'Email'
    }
  };
  var _methodInfo$type = methodInfo[type],
    icon = _methodInfo$type.icon,
    label = _methodInfo$type.label;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.cardContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.iconContainer
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: "medium",
    color: colors.primary[600]
  })), /*#__PURE__*/React.createElement(View, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.label
  }, label)), value && /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.value
  }, type === "stellar_address" ? formatPublicKey(value) : value)))), /*#__PURE__*/React.createElement(View, {
    style: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center'
    }
  }, !value ? /*#__PURE__*/React.createElement(Button, {
    text: "Add",
    buttonStyle: {
      size: 'medium',
      variant: 'primary'
    },
    theme: theme,
    onPress: function onPress() {
      return onAdd;
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.status
  }, status), status === 'Pending' && /*#__PURE__*/React.createElement(Button, {
    text: "Complete",
    buttonStyle: {
      size: 'medium',
      variant: 'secondary'
    },
    theme: theme,
    onPress: function onPress() {
      return onComplete;
    }
  }))));
};
var styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.primary[2400],
    borderColor: colors.primary[1000],
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    // Shadow for iOS
    shadowColor: colors.primary[100],
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 2
  },
  iconContainer: {
    marginRight: 12
  },
  contentContainer: {
    flex: 1
  },
  label: _objectSpread(_objectSpread({}, texts.P2Bold), {}, {
    color: colors.primary[100],
    marginBottom: 4
  }),
  value: _objectSpread(_objectSpread({}, texts.P3Light), {}, {
    color: colors.primary[600],
    marginBottom: 4
  }),
  status: _objectSpread(_objectSpread({}, texts.P3Bold), {}, {
    color: colors.primary[400]
  }),
  button: {
    backgroundColor: colors.primary[600],
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 4
  },
  buttonText: _objectSpread(_objectSpread({}, texts.buttonTiny), {}, {
    color: colors.primary[100]
  })
});