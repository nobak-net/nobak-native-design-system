function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// stories/RCIInput.stories.tsx

import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { RCIInput } from "./RCIInput"; // Adjust the path as needed

export default {
  title: 'Components/RCIInput',
  component: RCIInput
};
var Template = function Template(args) {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    code = _useState2[0],
    setCode = _useState2[1];
  var handleCodeComplete = function handleCodeComplete(enteredCode) {
    setCode(enteredCode);
    Alert.alert('Code Complete', "Entered Code: ".concat(enteredCode));
  };
  var handlePaste = function handlePaste(pastedCode) {
    Alert.alert('Code Pasted', "Pasted Code: ".concat(pastedCode));
  };
  return /*#__PURE__*/React.createElement(View, {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(RCIInput, _extends({}, args, {
    onCodeComplete: handleCodeComplete,
    onPaste: handlePaste,
    value: code,
    onChangeText: setCode
  })));
};
export var Default = Template.bind({});
Default.args = {
  maxLength: 6,
  label: 'Enter Verification Code',
  placeholder: '•'
};