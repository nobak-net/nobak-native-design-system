import React from 'react';
import { Icon } from "./Icon";
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
        options: ['Analytics'] // List all your icon names here
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
  color: '#000' // Replace with your default color
};
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}