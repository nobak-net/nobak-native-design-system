function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Button.tsx

import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { texts, colors } from "../../styles";
import { Icon } from "../Icon";
// 1. Define the variants before the Button component
var variants = {
  primary: {
    light: {
      background: colors.primary[1800],
      stroke: colors.primary[800],
      text: colors.primary[100]
    },
    dark: {
      background: colors.primary[1600],
      stroke: colors.primary[1300],
      text: colors.primary[100]
    }
  },
  secondary: {
    light: {
      background: colors.primary[300],
      stroke: colors.primary[600],
      text: colors.primary[1700]
    },
    dark: {
      background: colors.primary[1000],
      stroke: colors.primary[800],
      text: colors.primary[2000]
    }
  },
  gradientBorder: {
    light: {
      background: "transparent",
      // For gradient border, background is transparent
      stroke: "transparent",
      // Changed from 'inherit' to 'transparent'
      text: colors.primary[1700]
    },
    dark: {
      background: "transparent",
      stroke: "transparent",
      // Changed from 'inherit' to 'transparent'
      text: colors.primary[100]
    }
  }
};
export var Button = function Button(_ref) {
  var onPress = _ref.onPress,
    beforePress = _ref.beforePress,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? "" : _ref$text,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? "" : _ref$description,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? "Analytics" : _ref$icon,
    _ref$buttonStyle = _ref.buttonStyle,
    buttonStyle = _ref$buttonStyle === void 0 ? {
      variant: "primary",
      size: "medium"
    } : _ref$buttonStyle,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? "light" : _ref$theme,
    wrapper = _ref.wrapper;
  var style = getStyle(buttonStyle, theme);
  var handlePress = function handlePress() {
    if (beforePress) {
      beforePress();
    }
    onPress();
  };
  var renderContent = function renderContent() {
    var iconColor = variants[buttonStyle.variant][theme].text;
    switch (type) {
      case "iconText":
        return /*#__PURE__*/React.createElement(View, {
          style: {
            flexDirection: "row",
            alignItems: "center"
          }
        }, icon && /*#__PURE__*/React.createElement(View, {
          style: {
            marginRight: 4
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: icon,
          size: buttonStyle.size,
          color: iconColor
        })), text && /*#__PURE__*/React.createElement(Text, {
          style: style.text
        }, text));
      case "icon":
        return icon && /*#__PURE__*/React.createElement(Icon, {
          name: icon,
          size: buttonStyle.size,
          color: iconColor
        });
      case "caption":
        return /*#__PURE__*/React.createElement(View, {
          style: {
            width: "100%"
          }
        }, /*#__PURE__*/React.createElement(View, {
          style: {
            flexDirection: "row",
            alignItems: "center"
          }
        }, icon && /*#__PURE__*/React.createElement(View, {
          style: {
            marginRight: 8
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: icon,
          size: buttonStyle.size,
          color: iconColor
        })), text && /*#__PURE__*/React.createElement(Text, {
          style: style.text
        }, text)), description && /*#__PURE__*/React.createElement(Text, {
          style: style.description
        }, description));
      case "text":
      default:
        return text && /*#__PURE__*/React.createElement(Text, {
          style: style.text
        }, text);
    }
  };
  var isGradientBorder = buttonStyle.variant === "gradientBorder";
  if (isGradientBorder && wrapper) {
    // If variant is gradientBorder and a wrapper is provided, use the wrapper
    if (/*#__PURE__*/React.isValidElement(wrapper)) {
      return /*#__PURE__*/React.cloneElement(wrapper, {
        style: [style.gradientBorderContainer, wrapper.props.style]
      },
      /*#__PURE__*/
      // Merge styles
      React.createElement(TouchableOpacity, {
        style: style.innerContainer,
        onPress: handlePress
      }, renderContent()));
    } else {
      console.warn("Wrapper provided is not a valid React element.");
      return /*#__PURE__*/React.createElement(View, {
        style: style.gradientBorderContainer
      }, /*#__PURE__*/React.createElement(TouchableOpacity, {
        style: style.innerContainer,
        onPress: handlePress
      }, renderContent()));
    }
  } else if (isGradientBorder) {
    // If variant is gradientBorder but no wrapper is provided, fallback to a default view
    return /*#__PURE__*/React.createElement(View, {
      style: style.gradientBorderContainer
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: style.innerContainer,
      onPress: handlePress
    }, renderContent()));
  }
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: style.container,
    onPress: handlePress
  }, renderContent());
};

// Build Button Style
var getStyle = function getStyle(_ref2, theme) {
  var _variants$variant;
  var _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? "primary" : _ref2$variant,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? "medium" : _ref2$size,
    _ref2$full = _ref2.full,
    full = _ref2$full === void 0 ? false : _ref2$full;
  var variantStyles = (_variants$variant = variants[variant]) === null || _variants$variant === void 0 ? void 0 : _variants$variant[theme];
  if (!variantStyles) {
    // Fallback styles
    return StyleSheet.create({
      container: _objectSpread(_objectSpread({}, sizes[size]), {}, {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: 0,
        alignSelf: full ? "stretch" : "flex-start",
        width: full ? "100%" : undefined,
        justifyContent: "center",
        alignItems: "center"
      }),
      gradientBorderContainer: _objectSpread(_objectSpread({}, sizes[size]), {}, {
        borderRadius: sizes[size].borderRadius,
        padding: 0,
        alignSelf: full ? "stretch" : "flex-start",
        width: full ? "100%" : undefined,
        justifyContent: "center",
        alignItems: "center"
      }),
      innerContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        borderRadius: sizes[size].borderRadius,
        justifyContent: "center",
        alignItems: "center"
      },
      text: _objectSpread(_objectSpread({}, textSizes[size]), {}, {
        color: "black"
      }),
      description: _objectSpread(_objectSpread({}, texts.CaptionMedium), {}, {
        color: "black"
      })
    });
  }
  var background = variantStyles.background,
    text = variantStyles.text,
    stroke = variantStyles.stroke;
  return StyleSheet.create({
    container: _objectSpread(_objectSpread({}, sizes[size]), {}, {
      backgroundColor: background,
      borderColor: stroke,
      borderWidth: 1,
      alignSelf: full ? "stretch" : "flex-start",
      width: full ? "100%" : undefined,
      justifyContent: "center",
      alignItems: "center"
    }),
    gradientBorderContainer: _objectSpread(_objectSpread({}, sizes[size]), {}, {
      borderRadius: sizes[size].borderRadius,
      padding: 1,
      // Controls the thickness of the gradient border
      alignSelf: full ? "stretch" : "flex-start",
      width: full ? "100%" : undefined,
      justifyContent: "center",
      alignItems: "center"
    }),
    innerContainer: {
      width: "100%",
      height: "100%",
      backgroundColor: theme === "light" ? colors.primary[100] : colors.primary[2100],
      // Adjust based on theme
      borderRadius: sizes[size].borderRadius - 1,
      // Slightly smaller to fit inside the gradient border
      justifyContent: "center",
      alignItems: "center"
    },
    text: _objectSpread(_objectSpread({}, textSizes[size]), {}, {
      color: text
    }),
    description: _objectSpread(_objectSpread({}, texts.CaptionMedium), {}, {
      color: text
    })
  });
};

// Button Sizes
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

// Button Text Sizes
var textSizes = {
  tiny: _objectSpread({}, texts.buttonTiny),
  small: _objectSpread({}, texts.buttonSmall),
  medium: _objectSpread({}, texts.buttonMedium),
  large: _objectSpread({}, texts.buttonLarge)
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
          "value": "{ variant: \"primary\", size: \"medium\" }"
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
          "name": "\"At\" | \"Analytics\" | \"Albedo\" | \"Clockwork\" | \"Collections\" | \"CloudKey\" | \"CloudSync\" | \"Bars\" | \"Device\" | \"dots\" | \"Extension\" | \"Freighter\" | \"Info\" | \"Lifesaver\" | \"Medal\" | ... 53 more ... | \"XTwitter\"",
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
      },
      "\"theme\"": {
        "defaultValue": {
          "value": "light"
        },
        "description": "",
        "name": "theme",
        "required": false,
        "type": {
          "name": "\"light\" | \"dark\"",
          "raw": null,
          "value": null
        }
      },
      "\"wrapper\"": {
        "defaultValue": null,
        "description": "",
        "name": "wrapper",
        "required": false,
        "type": {
          "name": "React.ReactElement",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}