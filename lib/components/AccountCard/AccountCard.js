function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from '..';
import { colors, texts } from "../../styles";

// interface StellarAccount {
//     publicKey: string;
//     secretKey: string;
//     canSign: boolean;
//     isBackedUp: boolean;
//     getBalance: () => Promise<string>;
//   }

var AccountCard = function AccountCard(_ref) {
  var key = _ref.key,
    publicKey = _ref.publicKey,
    balance = _ref.balance,
    canSign = _ref.canSign,
    isBackedUp = _ref.isBackedUp;
  return /*#__PURE__*/React.createElement(View, {
    key: key,
    style: {
      borderColor: colors.primary[1600],
      borderWidth: 1,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8
    }
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread({
      color: colors.primary[100]
    }, texts.P1Light)
  }, publicKey.length > 20 ? "".concat(publicKey.slice(0, 20), "...") : publicKey), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bank",
    color: canSign ? colors.primary[100] : colors.primary[1600]
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "Analytics",
    color: isBackedUp ? colors.primary[100] : colors.primary[1600]
  }), /*#__PURE__*/React.createElement(Button, {
    onPress: function onPress() {
      return console.log('Backup/Restore');
    },
    buttonStyle: {
      variant: 'secondary',
      size: 'small'
    },
    type: "icon",
    icon: "Info"
  }))), /*#__PURE__*/React.createElement(Text, {
    style: _objectSpread({
      color: colors.primary[100]
    }, texts.P1Light)
  }, balance, " XLM"));
};

// const AccountCard = ({ account, balance }: { account: StellarAccount, balance: string }) => {
//     const croppedPublicKey = `${account.publicKey.slice(0, 5)}...${account.publicKey.slice(-5)}`; // Crop public key

//     const handleBackup = () => {
//         // Add logic to handle backup
//         console.log(`Backing up account: ${account.publicKey}`);
//     };

//     return (
//         <View style={{
//             borderWidth: 1,
//             borderColor: colors.primary[1600],
//             borderRadius: 12,
//             padding: 12,
//             marginVertical: 12,
//             backgroundColor: colors.primary[100],
//         }}>
//             <Text style={{ ...texts.P1Bold, color: colors.primary[1600], marginBottom: 8 }}>
//                 {croppedPublicKey}
//             </Text>

//             <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: 8
//             }}>
//                 <Text style={{ ...texts.P1Light, color: colors.primary[1600] }}>
//                     Balance: {balance} XLM
//                 </Text>
//             </View>

//             <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//             }}>
//                 <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                 }}>
//                     <Text style={{ marginLeft: 4, color: colors.primary[1600], ...texts.P2Bold }}>
//                         Can Sign: {account.canSign ? 'Yes' : 'No'}
//                     </Text>
//                 </View>

//                 <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                 }}>
//                     <Button 
//                       onPress={handleBackup} 
//                       text={account.isBackedUp ? "Backed Up" : "Backup Now"} 
//                       buttonStyle={{ variant: account.isBackedUp ? 'primary' : 'secondary', size: 'small' }}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

export { AccountCard };