function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import { AccountCard } from "./AccountCard";
import { View } from "react-native";
var AccountCardMeta = {
  title: "AccountCard",
  component: AccountCard,
  args: {
    publicKey: "GDSI2T2V7UEYDRALHUTXYQDXNJ6SPZOHYIRJYP5WXRVRPZBGBE6YNRHZ",
    balance: "100.0000",
    canSign: true,
    isBackedUp: false
  },
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(View, {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(Story, null));
  }]
};
export default AccountCardMeta;
// Function to create a story for a specific set of props (e.g., canSign, isBackedUp)
var createAccountCardStory = function createAccountCardStory(canSign, isBackedUp) {
  return function (args) {
    return /*#__PURE__*/React.createElement(AccountCard, _extends({}, args, {
      canSign: canSign,
      isBackedUp: isBackedUp
    }));
  };
};

// Create stories for various account conditions
export var CanSignBackedUp = createAccountCardStory(true, true);
export var CanSignNotBackedUp = createAccountCardStory(true, false);
export var CannotSignBackedUp = createAccountCardStory(false, true);
export var CannotSignNotBackedUp = createAccountCardStory(false, false);

// Template for a generic story
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(AccountCard, args);
};

// Example Story: Default AccountCard
export var DefaultAccountCard = Template.bind({});
DefaultAccountCard.args = {
  publicKey: "GDSI2T2V7UEYDRALHUTXYQDXNJ6SPZOHYIRJYP5WXRVRPZBGBE6YNRHZ",
  balance: "50.1234",
  canSign: true,
  isBackedUp: true
};
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}