import React from 'react';
import { View } from 'react-native';
import { Logo } from '..';
import { colors } from "../../styles";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
var Header = function Header() {
  var insets = useSafeAreaInsets();
  return /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: colors.primary[100],
      paddingTop: insets.top
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    type: "Isologo"
  })));
};
export { Header };