import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export var Button = function Button(_ref) {
  var onPress = _ref.onPress,
    text = _ref.text;
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: styles.container,
    onPress: onPress
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.text
  }, text));
};
var styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "blue",
    alignSelf: "flex-start",
    borderRadius: 8
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});
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
      "\"text\"": {
        "defaultValue": null,
        "description": "",
        "name": "text",
        "required": true,
        "type": {
          "name": "string",
          "raw": null,
          "value": null
        }
      }
    }
  };
} catch (e) {}