import React from 'react';
import { Icon, icons } from "./Icon";
import { View, Text } from 'react-native';
import { colors } from "../../styles";
var iconNames = Object.keys(icons);
var IconMeta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['tiny', 'small', 'medium', 'large', 'xlarge']
      }
    },
    color: {
      control: 'color'
    },
    name: {
      control: {
        type: 'select',
        options: iconNames // List all your icon names here
      }
    }
  }
};
export default IconMeta;
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Icon, args);
};
export var AnalyticsIcon = Template.bind({});
AnalyticsIcon.args = {
  name: 'Analytics',
  size: 'medium',
  color: colors.primary[2400] // Replace with your default color
};
export var AllIcons = function AllIcons() {
  return /*#__PURE__*/React.createElement(View, null, iconNames.map(function (name) {
    return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, name), /*#__PURE__*/React.createElement(Icon, {
      name: name,
      color: colors.primary[100]
    }));
  }));
};
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}