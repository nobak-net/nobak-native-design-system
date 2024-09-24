import React from 'react';
import { MethodCard } from "./MethodCard";
import { View, StyleSheet } from 'react-native';
var MethodCardMeta = {
  title: 'Components/MethodCard',
  component: MethodCard,
  args: {
    // Default props can be defined here
  }
};
export default MethodCardMeta;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(MethodCard, args));
};
export var EmailVerified = Template.bind({});
EmailVerified.args = {
  type: 'email',
  value: 'user@example.com',
  status: 'Verified'
};
export var EmailPending = Template.bind({});
EmailPending.args = {
  type: 'email',
  value: 'user@example.com',
  status: 'Pending'
};
export var EmailMissing = Template.bind({});
EmailMissing.args = {
  type: 'email',
  onPress: function onPress() {
    return console.log('Add Email Pressed');
  }
};
export var PhoneVerified = Template.bind({});
PhoneVerified.args = {
  type: 'phone_number',
  value: '+1 555-123-4567',
  status: 'Verified'
};
export var PhonePending = Template.bind({});
PhonePending.args = {
  type: 'phone_number',
  value: '+1 555-123-4567',
  status: 'Pending'
};
export var PhoneMissing = Template.bind({});
PhoneMissing.args = {
  type: 'phone_number',
  onPress: function onPress() {
    return console.log('Add Phone Number Pressed');
  }
};
export var StellarAddressVerified = Template.bind({});
StellarAddressVerified.args = {
  type: 'stellar_address',
  value: 'GABCD1234...',
  status: 'Verified'
};
export var StellarAddressPending = Template.bind({});
StellarAddressPending.args = {
  type: 'stellar_address',
  value: 'GABCD1234...',
  status: 'Pending'
};
export var StellarAddressMissing = Template.bind({});
StellarAddressMissing.args = {
  type: 'stellar_address',
  onPress: function onPress() {
    return console.log('Add Stellar Address Pressed');
  }
};
var styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF' // Adjust according to your app's theme
  }
});
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}