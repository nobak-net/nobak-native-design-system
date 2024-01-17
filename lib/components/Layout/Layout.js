import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
var screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

export var Layout = function Layout(_ref) {
  var children = _ref.children,
    style = _ref.style;
  var insets = useSafeAreaInsets();
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.content, {
      paddingTop: insets.top
    }]
  }, children));
};
var styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  content: {
    width: screenWidth * 0.92,
    alignSelf: 'center',
    justifyContent: 'center'
  }
});