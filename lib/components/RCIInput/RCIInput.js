function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// components/RCIInput.tsx

import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
// Ensure the path is correct

// import * as Clipboard from 'expo-clipboard';

var RCIInput = function RCIInput(_ref) {
  var _ref$maxLength = _ref.maxLength,
    maxLength = _ref$maxLength === void 0 ? 6 : _ref$maxLength,
    onCodeComplete = _ref.onCodeComplete,
    onPaste = _ref.onPaste;
  var _useState = useState(new Array(maxLength).fill('')),
    _useState2 = _slicedToArray(_useState, 2),
    code = _useState2[0],
    setCode = _useState2[1];
  var inputRefs = useRef([]);
  var handleInput = function handleInput(text, index) {
    var newCode = _toConsumableArray(code);
    if (text) {
      newCode[index] = text;
      setCode(newCode);
      if (index < maxLength - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      if (index > 0) {
        newCode[index] = '';
        setCode(newCode);
        inputRefs.current[index - 1].focus();
      } else {
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };
  var handleKeyPress = function handleKeyPress(_ref2, index) {
    var key = _ref2.nativeEvent.key;
    if (key === 'Backspace' && index > 0 && code[index] === '') {
      inputRefs.current[index - 1].focus();
    }
  };
  useEffect(function () {
    var candidateCode = code.join('');
    if (candidateCode.length === maxLength) {
      onCodeComplete(candidateCode);
    }
  }, [code, maxLength, onCodeComplete]);

  // const handlePaste = async () => {
  //     if (onPaste) {
  //         try {
  //             const clipboardContent = await Clipboard.getStringAsync();
  //             if (clipboardContent && clipboardContent.length === maxLength) {
  //                 const newCode = clipboardContent.split('');
  //                 setCode(newCode);
  //                 inputRefs.current[maxLength - 1].focus();
  //                 onPaste(clipboardContent);
  //             }
  //         } catch (error) {
  //             console.error('Error accessing clipboard:', error);
  //         }
  //     }
  // };

  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, " ", code.map(function (digit, index) {
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
        if (_ref3) {
          inputRefs.current[index] = _ref3;
        }
      }
    });
  }));
};
var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  },
  input: {
    width: 40,
    height: 60,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 18
  },
  hiddenInput: {
    height: 0,
    width: 0,
    opacity: 0
  }
});
export { RCIInput };