import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MethodCard } from './MethodCard';
import { View, StyleSheet } from 'react-native';

const MethodCardMeta: ComponentMeta<typeof MethodCard> = {
  title: 'Components/MethodCard',
  component: MethodCard,
  args: {
    // Default props can be defined here
  },
};

export default MethodCardMeta;

const Template: ComponentStory<typeof MethodCard> = (args) => (
  <View style={styles.container}>
    <MethodCard {...args} />
  </View>
);

export const EmailVerified = Template.bind({});
EmailVerified.args = {
  type: 'email',
  value: 'user@example.com',
  status: 'Verified',
};

export const EmailPending = Template.bind({});
EmailPending.args = {
  type: 'email',
  value: 'user@example.com',
  status: 'Pending',
};

export const EmailMissing = Template.bind({});
EmailMissing.args = {
  type: 'email',
  onPress: () => console.log('Add Email Pressed'),
};

export const PhoneVerified = Template.bind({});
PhoneVerified.args = {
  type: 'phone_number',
  value: '+1 555-123-4567',
  status: 'Verified',
};

export const PhonePending = Template.bind({});
PhonePending.args = {
  type: 'phone_number',
  value: '+1 555-123-4567',
  status: 'Pending',
};

export const PhoneMissing = Template.bind({});
PhoneMissing.args = {
  type: 'phone_number',
  onPress: () => console.log('Add Phone Number Pressed'),
};

export const StellarAddressVerified = Template.bind({});
StellarAddressVerified.args = {
  type: 'stellar_address',
  value: 'GABCD1234...',
  status: 'Verified',
};

export const StellarAddressPending = Template.bind({});
StellarAddressPending.args = {
  type: 'stellar_address',
  value: 'GABCD1234...',
  status: 'Pending',
};

export const StellarAddressMissing = Template.bind({});
StellarAddressMissing.args = {
  type: 'stellar_address',
  onPress: () => console.log('Add Stellar Address Pressed'),
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF', // Adjust according to your app's theme
  },
});