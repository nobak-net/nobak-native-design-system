import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { ServerCard } from './ServerCard';
import { View, StyleSheet } from 'react-native';

const ServerCardMeta: ComponentMeta<typeof ServerCard> = {
  title: 'Components/ServerCard',
  component: ServerCard,
  args: {
    // Default props can be defined here
  },
};

export default ServerCardMeta;

const Template: ComponentStory<typeof ServerCard> = (args) => (
  <View style={styles.container}>
    <ServerCard {...args} />
  </View>
);

export const OnlinePairedAuthed = Template.bind({});
OnlinePairedAuthed.args = {
  name: 'Main Server',
  status: 'online',
  paired: true,
  isAuthed: true,
  uptime_percentage: 99.9,
  onPress: () => console.log('Server card pressed'),
};

export const OnlineNotPairedNotAuthed = Template.bind({});
OnlineNotPairedNotAuthed.args = {
  name: 'New Server',
  status: 'online',
  paired: false,
  isAuthed: false,
  uptime_percentage: 98.5,
};

export const OfflinePairedNotAuthed = Template.bind({});
OfflinePairedNotAuthed.args = {
  name: 'Backup Server',
  status: 'offline',
  paired: true,
  isAuthed: false,
  uptime_percentage: 95.0,
};

export const MaintenanceNotPairedAuthed = Template.bind({});
MaintenanceNotPairedAuthed.args = {
  name: 'Test Server',
  status: 'maintenance',
  paired: false,
  isAuthed: true,
  uptime_percentage: 97.5,
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF', // Adjust according to your app's theme
  },
});