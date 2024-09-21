function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { texts, colors } from "../../styles";
import { Icon } from "../Icon"; // Import the Icon component

export var Button = function Button(_ref) {
  var onPress = _ref.onPress,
    beforePress = _ref.beforePress,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? '' : _ref$text,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '' : _ref$description,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? 'Analytics' : _ref$icon,
    _ref$buttonStyle = _ref.buttonStyle,
    buttonStyle = _ref$buttonStyle === void 0 ? {
      variant: 'primary',
      size: 'medium'
    } : _ref$buttonStyle,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type;
  var style = getStyle(buttonStyle);
  var handlePress = function handlePress() {
    if (!!beforePress) {
      beforePress();
    }
    onPress();
  };
  var renderContent = function renderContent() {
    switch (type) {
      case 'iconText':
        return /*#__PURE__*/React.createElement(View, {
          style: {
            flexDirection: 'row',
            alignItems: 'center'
          }
        }, icon && /*#__PURE__*/React.createElement(Icon, {
          name: icon,
          size: buttonStyle.size,
          color: variants[buttonStyle.variant].text
        }), text && /*#__PURE__*/React.createElement(Text, {
          style: style.text
        }, text));
      case 'icon':
        return icon && /*#__PURE__*/React.createElement(Icon, {
          name: icon,
          size: buttonStyle.size,
          color: variants[buttonStyle.variant].text
        });
      case 'caption':
        return /*#__PURE__*/React.createElement(View, {
          style: {
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement(View, {
          style: {
            flexDirection: 'row',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement(View, {
          style: {
            marginRight: 10
          }
        }, icon && /*#__PURE__*/React.createElement(Icon, {
          name: icon,
          size: buttonStyle.size,
          color: variants[buttonStyle.variant].text
        })), text && /*#__PURE__*/React.createElement(Text, {
          style: style.text
        }, text)), /*#__PURE__*/React.createElement(View, null, text && /*#__PURE__*/React.createElement(Text, {
          style: _objectSpread(_objectSpread({}, texts.CaptionMedium), {}, {
            color: variants[buttonStyle.variant].text
          })
        }, description)));
      case 'text':
        return text && /*#__PURE__*/React.createElement(Text, {
          style: style.text
        }, text);
      default:
        return text && /*#__PURE__*/React.createElement(Text, {
          style: style.text
        }, text);
    }
  };
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: style.container,
    onPress: handlePress
  }, renderContent());
};

// Build Button Style
var getStyle = function getStyle(_ref2) {
  var _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? "primary" : _ref2$variant,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? "medium" : _ref2$size,
    _ref2$full = _ref2.full,
    full = _ref2$full === void 0 ? false : _ref2$full;
  var backgroundColor = variants[variant].background || variants.primary.background;
  var textColor = variants[variant].text || variants.primary.text;
  var strokeColor = variants[variant].stroke || variants.primary.stroke;
  var sizeBase = sizes[size] || sizes.medium;
  var textSize = textSizes[size];
  return StyleSheet.create({
    container: _objectSpread(_objectSpread({}, sizeBase), {}, {
      backgroundColor: backgroundColor,
      borderColor: strokeColor,
      borderWidth: 1,
      alignSelf: full ? "stretch" : "flex-start",
      // Conditional full width
      width: full ? '100%' : undefined // Set width to 100% if full is true
    }),
    text: _objectSpread(_objectSpread({}, textSize), {}, {
      color: textColor
    })
  });
};

// Button Styles
var sizes = {
  tiny: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4
  },
  small: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10
  },
  large: {
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderRadius: 12
  }
};
var textSizes = {
  tiny: _objectSpread({}, texts.buttonTiny),
  small: _objectSpread({}, texts.buttonSmall),
  medium: _objectSpread({}, texts.buttonMedium),
  large: _objectSpread({}, texts.buttonLarge)
};
var variants = {
  primary: {
    background: colors.primary[2100],
    stroke: colors.primary[2100],
    text: colors.primary[100]
  },
  secondary: {
    background: colors.primary[300],
    stroke: colors.primary[600],
    text: colors.primary[1700]
  }
};
try {
  Button.displayName = "Button";
  Button.__docgenInfo = {
    description: "",
    displayName: "Button",
    props: {
      "\"onPress\"": {
        "defaultValue": null,
        "description": "",
        "name": "onPress",
        "required": true,
        "type": {
          "name": "() => void",
          "raw": null,
          "value": null
        }
      },
      "\"beforePress\"": {
        "defaultValue": null,
        "description": "",
        "name": "beforePress",
        "required": false,
        "type": {
          "name": "() => void",
          "raw": null,
          "value": null
        }
      },
      "\"text\"": {
        "defaultValue": {
          "value": ""
        },
        "description": "",
        "name": "text",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "\"isLoading\"": {
        "defaultValue": null,
        "description": "",
        "name": "isLoading",
        "required": false,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      },
      "\"buttonStyle\"": {
        "defaultValue": {
          "value": "{ variant: 'primary', size: 'medium' }"
        },
        "description": "",
        "name": "buttonStyle",
        "required": false,
        "type": {
          "name": "ButtonStyleProps",
          "raw": null,
          "value": null
        }
      },
      "\"description\"": {
        "defaultValue": {
          "value": ""
        },
        "description": "",
        "name": "description",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "\"icon\"": {
        "defaultValue": {
          "value": "Analytics"
        },
        "description": "",
        "name": "icon",
        "required": false,
        "type": {
          "name": "\"Analytics\" | \"Albedo\" | \"Clockwork\" | \"Collections\" | \"CloudKey\" | \"CloudSync\" | \"Bars\" | \"dots\" | \"Extension\" | \"Freighter\" | \"Info\" | \"Lifesaver\" | \"Medal\" | \"Power\" | \"Rabet\" | ... 51 more ... | \"XTwitter\"",
          "raw": null,
          "value": null
        }
      },
      "\"type\"": {
        "defaultValue": {
          "value": "text"
        },
        "description": "",
        "name": "type",
        "required": false,
        "type": {
          "name": "\"text\" | \"icon\" | \"iconText\" | \"caption\"",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}