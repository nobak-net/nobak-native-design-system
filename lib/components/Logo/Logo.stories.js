// Logo.stories.js
import React from 'react';
import { Logo } from "./Logo"; // Adjust the import path as necessary

// Meta configuration for the Logo component
var LogoMeta = {
  title: 'Components/Logo',
  component: Logo,
  args: {
    type: 'Isologo'
  }
};
export default LogoMeta;

// Template for creating stories
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Logo, args);
};

// Example Stories for each logo type
export var IsologoStory = Template.bind({});
IsologoStory.args = {
  type: 'Isologo'
};
export var LogoFullStory = Template.bind({});
LogoFullStory.args = {
  type: 'LogoFull'
};
export var LogoStory = Template.bind({});
LogoStory.args = {
  type: 'Logo'
};
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}