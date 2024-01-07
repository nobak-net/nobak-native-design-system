import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../styles";
import { Symbol as _Symbol } from "../Symbol";
// import { Icon, type IconKeys } from '../Icon'; // Import the Icon component

var TabButton = function TabButton(_ref) {
  var onPress = _ref.onPress,
    beforePress = _ref.beforePress,
    text = _ref.text,
    _ref$symbol = _ref.symbol,
    symbol = _ref$symbol === void 0 ? 'World' : _ref$symbol,
    isActive = _ref.isActive;
  var handlePress = function handlePress() {
    if (!!beforePress) {
      beforePress();
    }
    onPress();
  };
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.button,
    onPress: handlePress
  }, /*#__PURE__*/React.createElement(_Symbol, {
    type: symbol,
    color: styles.button.color
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.label
  }, text));
};
var styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.primary[100]
  },
  label: {
    color: colors.primary[100]
  }
});
export { TabButton };
try {
  TabButton.displayName = "TabButton";
  TabButton.__docgenInfo = {
    description: "",
    displayName: "TabButton",
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
        "defaultValue": null,
        "description": "",
        "name": "text",
        "required": false,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      },
      "\"symbol\"": {
        "defaultValue": {
          "value": "World"
        },
        "description": "",
        "name": "symbol",
        "required": false,
        "type": {
          "name": "SymbolType",
          "raw": null,
          "value": null
        }
      },
      "\"isActive\"": {
        "defaultValue": null,
        "description": "",
        "name": "isActive",
        "required": true,
        "type": {
          "name": "boolean",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}