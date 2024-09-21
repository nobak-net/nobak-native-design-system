function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// components/RCIInput.tsx

import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
// Ensure the path is correct
import { colors } from "../../styles/colors";
import { texts } from "../../styles/texts";
// import * as Clipboard from 'expo-clipboard';

var RCIInput = function RCIInput(_ref) {
  var _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 6 : _ref$maxLength,
    onCodeComplete = _ref.onCodeComplete,
    onPaste = _ref.onPaste,
    label = _ref.label,
    placeholder = _ref.placeholder,
    value = _ref.value,
    handlePaste = _ref.handlePaste,
    onChangeText = _ref.onChangeText;
  var _useState = useState(Array(maxLength).fill('')),
    _useState2 = _slicedToArray(_useState, 2),
    code = _useState2[0],
    setCode = _useState2[1];
  var inputRefs = useRef([]);
  var handleInput = function handleInput(text, index) {
    var newCode = _toConsumableArray(code);
    if (text) {
      // Only take the first character in case multiple characters are pasted
      newCode[index] = text[0];
      setCode(newCode);
      if (onChangeText) {
        onChangeText(newCode.join(''));
      }
      if (index < maxLength - 1) {
        var _inputRefs$current;
        (_inputRefs$current = inputRefs.current[index + 1]) === null || _inputRefs$current === void 0 || _inputRefs$current.focus();
      }
    } else {
      // User hits backspace
      if (index > 0) {
        var _inputRefs$current2;
        newCode[index] = '';
        setCode(newCode);
        if (onChangeText) {
          onChangeText(newCode.join(''));
        }
        (_inputRefs$current2 = inputRefs.current[index - 1]) === null || _inputRefs$current2 === void 0 || _inputRefs$current2.focus();
      } else {
        // If it's the first field, just erase
        newCode[index] = '';
        setCode(newCode);
        if (onChangeText) {
          onChangeText(newCode.join(''));
        }
      }
    }
  };
  var handleKeyPress = function handleKeyPress(_ref2, index) {
    var key = _ref2.nativeEvent.key;
    if (key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        var _inputRefs$current3;
        (_inputRefs$current3 = inputRefs.current[index - 1]) === null || _inputRefs$current3 === void 0 || _inputRefs$current3.focus();
      }
    }
  };

  // const handlePaste = async () => {
  //     const clipboardContent = await Clipboard.getStringAsync();
  //     const pastedCode = clipboardContent.trim().slice(0, maxLength);
  //     if (/^\d+$/.test(pastedCode)) { // Assuming the code is numeric
  //         const newCode = pastedCode.split('');
  //         while (newCode.length < maxLength) {
  //             newCode.push('');
  //         }
  //         setCode(newCode);
  //         if (onPaste) {
  //             onPaste(pastedCode);
  //         }
  //         if (onChangeText) {
  //             onChangeText(pastedCode);
  //         }
  //         // Optionally, you can trigger onCodeComplete if the pasted code is complete
  //         if (pastedCode.length === maxLength) {
  //             onCodeComplete(pastedCode);
  //         }
  //     } else {
  //         Alert.alert('Invalid Code', 'The pasted content is not a valid code.');
  //     }
  // };

  useEffect(function () {
    var candidateCode = code.join('');
    if (candidateCode.length === maxLength && !code.includes('')) {
      onCodeComplete(candidateCode);
    }
  }, [code]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, label && /*#__PURE__*/React.createElement(Text, {
    style: styles.label
  }, label), /*#__PURE__*/React.createElement(View, {
    style: styles.inputContainer
  }, /*#__PURE__*/React.createElement(TextInput, {
    style: styles.hiddenInput,
    onChangeText: handlePaste,
    onFocus: handlePaste // Trigger paste when hidden input is focused
    ,
    maxLength: maxLength,
    autoFocus: true
  }), code.map(function (digit, index) {
    return /*#__PURE__*/React.createElement(TextInput, {
      key: index,
      style: styles.input,
      keyboardType: "number-pad",
      maxLength: 1,
      value: digit,
      onKeyPress: function onKeyPress(e) {
        return handleKeyPress(e, index);
      },
      onChangeText: function onChangeText(text) {
        return handleInput(text, index);
      },
      ref: function ref(_ref3) {
        return inputRefs.current[index] = _ref3;
      },
      returnKeyType: "done",
      blurOnSubmit: false
    });
  })), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handlePaste,
    style: styles.pasteButton
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.pasteText
  }, "Paste Code")));
};
var styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  label: _objectSpread({
    marginBottom: 5,
    color: colors.primary[600]
  }, texts.H4Bold),
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: 40,
    height: 60,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 18,
    color: colors.primary[300]
  },
  hiddenInput: {
    height: 0,
    width: 0,
    opacity: 0
  },
  pasteButton: {
    marginTop: 10,
    alignSelf: 'center'
  },
  pasteText: {
    color: colors.primary[800],
    textDecorationLine: 'underline'
  }
});
export { RCIInput };