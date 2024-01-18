import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "../../styles";
import { Symbol as _Symbol } from "../Symbol";
// import { Icon, type IconKeys } from '../Icon'; // Import the Icon component

var TabButton = function TabButton(_ref) {
  var onPress = _ref.onPress,
    beforePress = _ref.beforePress,
    text = _ref.text,
    _ref$symbol = _ref.symbol,
    symbol = _ref$symbol === void 0 ? 'World' : _ref$symbol,
    active = _ref.active;
  var handlePress = function handlePress() {
    if (!!beforePress) {
      beforePress();
    }
    onPress();
  };
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: active ? 8 : 0,
      borderBottomRightRadius: active ? 8 : 0
    }, {
      backgroundColor: active ? colors.primary[2400] : colors.primary[100]
    }],
    onPress: handlePress
  }, /*#__PURE__*/React.createElement(_Symbol, {
    type: symbol,
    color: active ? colors.primary[100] : colors.primary[2400]
  }), /*#__PURE__*/React.createElement(Text, {
    style: {
      color: active ? colors.primary[100] : colors.primary[2400]
    }
  }, text));
};
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
      "\"active\"": {
        "defaultValue": null,
        "description": "",
        "name": "active",
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