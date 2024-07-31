import React from 'react';
import { Text, View } from 'react-native';
import { QrCodeSvg } from 'react-native-qr-svg';
var QR = function QR(_ref) {
  var value = _ref.value,
    size = _ref.size,
    _ref$margin = _ref.margin,
    margin = _ref$margin === void 0 ? 20 : _ref$margin,
    bgColor = _ref.bgColor,
    fgColor = _ref.fgColor;
  return /*#__PURE__*/React.createElement(View, {
    style: {
      height: size,
      margin: margin
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(QrCodeSvg, {
    value: value,
    frameSize: size,
    contentCells: 5,
    content: /*#__PURE__*/React.createElement(View, {
      style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Text, null, "\uD83D\uDC4B")),
    dotColor: fgColor,
    backgroundColor: bgColor
  })));
};
export { QR };
try {
  QR.displayName = "QR";
  QR.__docgenInfo = {
    description: "",
    displayName: "QR",
    props: {}
  };
} catch (e) {}