// stories/RCIInput.stories.tsx

import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { RCIInput } from './RCIInput'; // Adjust the path as needed
import { Story, Meta } from '@storybook/react-native';

export default {
  title: 'Components/RCIInput',
  component: RCIInput,
} as Meta;

const Template: Story = (args) => {
  const [code, setCode] = useState('');

  const handleCodeComplete = (enteredCode: string) => {
    setCode(enteredCode);
    Alert.alert('Code Complete', `Entered Code: ${enteredCode}`);
  };

  const handlePaste = (pastedCode: string) => {
    Alert.alert('Code Pasted', `Pasted Code: ${pastedCode}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <RCIInput
        {...args}
        onCodeComplete={handleCodeComplete}
        onPaste={handlePaste}
        value={code}
        onChangeText={setCode}
      />
    </View>
  );
};

export const Default = Template.bind({});
Default.args = {
  maxLength: 6,
  label: 'Enter Verification Code',
  placeholder: '•',
};