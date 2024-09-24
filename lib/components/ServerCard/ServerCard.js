function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "../Icon"; // Adjust the import based on your project structure
import { colors, texts } from "../../styles"; // Adjust the import based on your project structure
import { Button } from "../Button";
export var ServerCard = function ServerCard(_ref) {
  var name = _ref.name,
    status = _ref.status,
    paired = _ref.paired,
    isAuthed = _ref.isAuthed,
    uptime_percentage = _ref.uptime_percentage,
    _onPress = _ref.onPress,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'light' : _ref$theme;
  // Determine status color
  var statusColor = colors.primary[1000];
  // status === 'online'
  //   ? colors.success
  //   : status === 'offline'
  //   ? colors.error
  //   : colors.warning; // For maintenance or other statuses

  // Paired and Authenticated Icons
  var pairedIcon = paired ? 'CheckCircle' : 'Circle'; // Replace with your actual icon keys
  var authedIcon = isAuthed ? 'Lock' : 'Unlock';
  return /*#__PURE__*/React.createElement(View, {
    style: styles.cardContainer
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: styles.header
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.name
  }, name)), /*#__PURE__*/React.createElement(View, {
    style: styles.infoRow
  }, /*#__PURE__*/React.createElement(Icon, {
    name: pairedIcon,
    size: "small",
    color: colors.primary[600]
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.infoText
  }, paired ? 'Paired' : 'Not Paired')), /*#__PURE__*/React.createElement(View, {
    style: styles.infoRow
  }, /*#__PURE__*/React.createElement(Icon, {
    name: authedIcon,
    size: "small",
    color: colors.primary[600]
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.infoText
  }, isAuthed ? 'Authenticated' : 'Not Authenticated')), /*#__PURE__*/React.createElement(View, {
    style: styles.infoRow
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Analytics",
    size: "small",
    color: colors.primary[600]
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.infoText
  }, "Uptime: ", uptime_percentage, "%"))), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Button, {
    text: "Auth",
    buttonStyle: {
      size: 'medium',
      variant: 'secondary'
    },
    theme: theme,
    onPress: function onPress() {
      return _onPress;
    }
  })));
};
var styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.primary[2000],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary[1000],
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: _objectSpread(_objectSpread({}, texts.P3Bold), {}, {
    color: colors.primary[100]
  }),
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  infoText: _objectSpread(_objectSpread({}, texts.CaptionBold), {}, {
    color: colors.primary[100],
    marginLeft: 8
  })
});