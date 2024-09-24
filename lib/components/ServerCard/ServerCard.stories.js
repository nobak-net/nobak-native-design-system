import React from 'react';
import { ServerCard } from "./ServerCard";
import { View, StyleSheet } from 'react-native';
var ServerCardMeta = {
  title: 'Components/ServerCard',
  component: ServerCard,
  args: {
    // Default props can be defined here
  }
};
export default ServerCardMeta;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(ServerCard, args));
};
export var OnlinePairedAuthed = Template.bind({});
OnlinePairedAuthed.args = {
  name: 'Main Server',
  status: 'online',
  paired: true,
  isAuthed: true,
  uptime_percentage: 99.9,
  onPress: function onPress() {
    return console.log('Server card pressed');
  }
};
export var OnlineNotPairedNotAuthed = Template.bind({});
OnlineNotPairedNotAuthed.args = {
  name: 'New Server',
  status: 'online',
  paired: false,
  isAuthed: false,
  uptime_percentage: 98.5
};
export var OfflinePairedNotAuthed = Template.bind({});
OfflinePairedNotAuthed.args = {
  name: 'Backup Server',
  status: 'offline',
  paired: true,
  isAuthed: false,
  uptime_percentage: 95.0
};
export var MaintenanceNotPairedAuthed = Template.bind({});
MaintenanceNotPairedAuthed.args = {
  name: 'Test Server',
  status: 'maintenance',
  paired: false,
  isAuthed: true,
  uptime_percentage: 97.5
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