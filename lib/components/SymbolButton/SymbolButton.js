import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Symbol as _Symbol } from "../Symbol";
import { colors } from "../../styles/colors";
var SymbolButton = function SymbolButton(_ref) {
  var type = _ref.type,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? colors.primary[100] : _ref$color,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 8 : _ref$padding,
    onPress = _ref.onPress,
    style = _ref.style;
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress,
    style: [{
      padding: padding
    }, style]
  }, /*#__PURE__*/React.createElement(_Symbol, {
    type: type,
    color: color
  }));
};
export { SymbolButton };