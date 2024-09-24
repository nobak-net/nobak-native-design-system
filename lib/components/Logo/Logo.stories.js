// Logo.stories.js
import React from 'react';
import { Logo } from "./Logo"; // Adjust the import path as necessary
import { View } from 'react-native';

// Meta configuration for the Logo component
var LogoMeta = {
  title: 'Components/Logo',
  component: Logo,
  args: {
    type: 'Isologo'
  },
  decorators: []
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
export var AllLogos = function AllLogos(args, _ref) {
  var _globals$backgrounds;
  var globals = _ref.globals;
  var theme = (globals === null || globals === void 0 || (_globals$backgrounds = globals.backgrounds) === null || _globals$backgrounds === void 0 ? void 0 : _globals$backgrounds.value) === "#F5F4F7" ? 'light' : 'dark';
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Logo, {
    theme: theme,
    type: "LogoFull"
  }), /*#__PURE__*/React.createElement(Logo, {
    theme: theme,
    type: "Isologo"
  }), /*#__PURE__*/React.createElement(Logo, {
    theme: theme,
    type: "Logo"
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