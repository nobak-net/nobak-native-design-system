import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Symbol as _Symbol } from "../Symbol";
import { colors } from "../../styles/colors";
var IconButton = function IconButton(_ref) {
  var type = _ref.type,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? colors.primary[100] : _ref$color,
    onPress = _ref.onPress,
    style = _ref.style;
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress,
    style: [styles.button, style]
  }, /*#__PURE__*/React.createElement(_Symbol, {
    type: type,
    color: color
  }));
};
var styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export { IconButton };