import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
export var ModalComponent = function ModalComponent(_ref) {
  var children = _ref.children,
    initialState = _ref.initialState,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 'small' : _ref$padding,
    _ref$fullScreen = _ref.fullScreen,
    fullScreen = _ref$fullScreen === void 0 ? false : _ref$fullScreen,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? true : _ref$closable,
    closeModal = _ref.closeModal;
  var getPadding = function getPadding() {
    switch (padding) {
      case 'none':
        return 0;
      case 'small':
        return 10;
      case 'medium':
        return 20;
      case 'large':
        return 30;
      default:
        return 10;
    }
  };
  return /*#__PURE__*/React.createElement(Modal, {
    transparent: true,
    visible: initialState,
    animationType: "slide",
    onRequestClose: closable ? closeModal : function () {}
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.overlay
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.modalContainer, fullScreen ? styles.fullScreen : styles.partialScreen, {
      padding: getPadding()
    }]
  }, closable && /*#__PURE__*/React.createElement(Pressable, {
    style: styles.closeButton,
    onPress: closeModal
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.closeText
  }, "X")), children)));
};
var styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  fullScreen: {
    flex: 1,
    width: '100%'
  },
  partialScreen: {
    width: '80%'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold'
  }
});