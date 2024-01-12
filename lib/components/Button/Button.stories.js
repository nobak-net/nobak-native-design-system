function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import { Button } from "./Button";
import { View } from "react-native";
var ButtonMeta = {
  title: "Button",
  component: Button,
  args: {
    text: "Hello"
  },
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(View, {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(Story, null));
  }]
};
export default ButtonMeta;
var variants = ['primary', 'secondary'];
var sizes = ['tiny', 'small', 'medium', 'large'];

// Function to create a story for a specific variant and size
var createButtonStory = function createButtonStory(variant, size) {
  return function (args) {
    return /*#__PURE__*/React.createElement(Button, _extends({}, args, {
      buttonStyle: {
        variant: variant,
        size: size
      }
    }));
  };
};

// Create stories for each variant and size
variants.forEach(function (variant) {
  sizes.forEach(function (size) {
    module.exports["".concat(variant, "_").concat(size)] = createButtonStory(variant, size);
  });
});

// Template for creating stories
var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Button, args);
};

// Example Story: Default Header
export var CaptionButton = Template.bind({});
CaptionButton.args = {
  // Add props that your Header component expects
  text: 'My Header',
  description: 'My Header'
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