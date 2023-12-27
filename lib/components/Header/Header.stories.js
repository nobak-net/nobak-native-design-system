// Header.stories.js
import React from 'react';
import { Header } from "./Header"; // Adjust the import path as necessary

// Meta configuration for the Header component
var HeaderMeta = {
  title: 'Components/Header',
  component: Header
};
export default HeaderMeta;

// Template for creating stories
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Header, args);
};

// Example Story: Default Header
export var DefaultHeader = Template.bind({});
DefaultHeader.args = {
  // Add props that your Header component expects
  title: 'My Header'
  // ... other props
};
try {
  ComponentMeta.displayName = "ComponentMeta";
  ComponentMeta.__docgenInfo = {
    description: "For the common case where a component's stories are simple components that receives args as props:\n\n```tsx\nexport default { ... } as ComponentMeta<typeof Button>;\n```",
    displayName: "ComponentMeta",
    props: {}
  };
} catch (e) {}